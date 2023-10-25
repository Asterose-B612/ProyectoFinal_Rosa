import { useCartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { createContext } from "react";
import {Link} from 'react-router-dom'
import {useContext,useState} from "react";
import { CartContext } from '../../context/CartContext'
import './Cart.css';

const Cart = () => {
  //tods las func y datos vienen del Cart Context
    const {cart, clearCart, totalQuantity, total} = useCartContext(createContext)
//validacion de productos agregados
    if (totalQuantity === 0) {
        return(
            <div>
             <h2> Carrito vacío </h2>
                <Link to ='/' className='OptionCarrito'>Productos</Link>
            </div>
        )
    }


    return (
        <div className='cartContainer'>
        <div className='cartItemProd'>   { cart.map(p => <CartItem key={p.id}  {...p}/> ) } </div> 
            <h3>Total: ${total}</h3>
            <button onClick={ () => clearCart() } className='ButtonVaciar'> Vaciar Carrito </button>
            <Link to = '/checkout' className='ButtonCheckout'>Checkout</Link>
        </div>
    )

}

export default Cart;