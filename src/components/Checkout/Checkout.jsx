// Checkout.js
import  { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/CartContext';
import { db } from '../../Services/firebase/FirebaseConfig';
import {
  collection,
  addDoc,
  writeBatch,
  Timestamp,
  getDocs,
  query,
  where,
  documentId,
} from 'firebase/firestore';


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    // Validaciones en el cliente
    if (name.length < 5) {
      setFormErrors({ ...formErrors, name: 'El nombre debe tener al menos 5 caracteres' });
      setLoading(false);
      return;
    }

    if (!phone) {
      setFormErrors({ ...formErrors, phone: 'El teléfono es obligatorio' });
      setLoading(false);
      return;
    }

    if (!email) {
      setFormErrors({ ...formErrors, email: 'El email es obligatorio' });
      setLoading(false);
      return;
    }

    const createOrder = async ({ name, phone, email }) => {
      setLoading(true);
      
      try {
      const objOrder = {
      buyer: {
      name, phone, email
      },
      item: cart,
      total: total,
      date: Timestamp.fromDate(new Date()),
      };
      
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map (prod => prod.id)
      const productsRef = collection (db, 'items')
      const productsAdaptedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in, id')))
      const { docs } = productsAdaptedFromFirestore
      
      docs.forEach (doc => {
      const dataDoc = doc.data ()
      const stockDb = dataDoc.stock
      
      const productsAdaptedToCart = cart.find (prod => prod.id === doc.id)
      const prodQuantity = productsAdaptedToCart?.quantity
      
      if (stockDb >= prodQuantity) {
      batch.update (doc.ref, {stock: stockDb - prodQuantity})
      
      } else {
      outOfStock.push ({id: doc.id, ...dataDoc})
      }
      
      
      })
      
      if (outOfStock.length === 0) {
        await batch.commit()
        
        const orderRef = collection (db, 'orders')
        const orderAdded = await addDoc (orderRef, objOrder)
        
        setOrderId (orderAdded.id)
        clearCart ()
        } else {
        console.error ('No se encuentran en stock')
        }
        
        } catch (error) {
        console.error (error)
        } finally {
        setLoading (false)
        }
        
        
        };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} formErrors={formErrors} />
    </div>
  );
};

export default Checkout;