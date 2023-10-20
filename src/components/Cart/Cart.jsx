import { useCartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartItem from '../CartItem/CartItem'
import { createContext } from "react";
import {Link} from 'react-router-dom'

const Cart = () => {
  //tods las func y datos vienen del Cart Context
    const {cart, clearCart, totalQuantity, total} = useCartContext(createContext)
//validacion de productos agregados
    if (totalQuantity === 0) {
        return(
            <div>
             <h2>Carrito vacío</h2>
                <Link to ='/' className='Option'>Productos</Link>
            </div>
        )
    }


    return (
        <div>
            { cart.map(p => <CartItem key={p.id}  {...p}/> ) }
            <h3>Total: ${total}</h3>
            <button onClick={ () => clearCart() } className='Button'>Vaciar Carrito</button>
            <Link to = '/checkout' className='Option'>Checkout</Link>
            </div>
    )

}

export default Cart;