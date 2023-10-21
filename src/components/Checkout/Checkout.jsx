import { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'
import {db} from '../../Services/firebase/FirebaseConfig'



const Checkout =() => {

const [loading, setloading] = useState(false)
const[orderId, setOrderId] = useState ('')

const { cart, total, clearCart } = useContext(CartContext)

const createOrder = async ({ name, phone,email}) => {
setloading (true)

try {
    const objOrder = {
        buyer : {
            name, phone, email
        },
        item : cart,
        total: total,
        date: Timestamp.fromDate (new Date())
    }
    const batch = writeBatch (db)
   
    const outOfStock = []
   
    const ids = cart.map(prod => prod.id)
   
    const productsRef = collection (db, 'products')
    
    const productsAddedFromFirestore= await getDocs(query(productsRef, where(documentId(), 'in',)))
   
    const {docs} = productsAddedFromFirestore

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stockDb
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        //actualizacion de stock
        if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity })
        }else {
            outOfStock.push({ id: doc.id, ...dataDoc})
        }
    })


    if(outOfStock.length === 0) {
    await batch.commit()

    const orderRef = collection (db, 'orders')

//generamos la orden

    const orderAdded = await addDoc (orderRef, objOrder)

    setOrderId(orderAdded.id)
    clearCart()
    }else {
    console.error('hay productos fuera de stock')
    }


    }catch(error){
    console.log(error)
    } finally {
    setLoading(false)
    }
}

if (loading) {
    return <h1>Se esta generando su orden...</h1>
}

if (orderId) {
    return <h1>El id de su orden es: {orderId} </h1>
}

return(
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm = {createOrder} />
    </div>
)

}


export default Checkout;