  {/*CONTEXT : PARA MANTENER EL ESTADO DE COMPRA DEL USUARIO. QUE NOS DA LAS FUNCIONES RELACIONADAS AL CARRITO DE COMPRAS
* */}
import { createContext, useContext, useState } from 'react';

// Creo un contexto para el carrito de compras
const CartContext = createContext ({
  cart: []
});
 
{/*funcion que va a contener toda la lgica del carrito de compras (CartProvider, Va a recibir por props todos los componentes hijos, por lo cual v a ser un componente de alto orden*/} 
export const CartProvider = ({ children }) => {
     // Para Almacenar los productos en el carrito
    //este es mi estado inicial
  const [cart, setCart] = useState([])
  console.log (cart) 

// agregar producto
const addItem =(item, quantity) => {
  if(!isInCart(item.id)) {
    setCart (prev => [...prev, {...item, quantity}])
  }else {
    console.error('El producto ya fue agregado')
  }
}

 {/*Filtra los productos en el carrito para eliminar el que coincida con el productId */}
const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart (cartUpdated)
}

//vaciar carrito
const clearCart = () => {
  setCart ([])
}

const isInCart = (itemId) => {
  return  cart.some (prod => prod.id === itemId)
}

//esta sintaxis SIEMPRE VA A SER IGUAL cuado yo tenga un contexto
//todas las funciones son compartidas a los componentes hijos a traves de value y un objeto q la contiene
  return (
    <CartContext.Provider value = {{cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )

}
export default CartContext;
