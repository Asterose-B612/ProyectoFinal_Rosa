import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './CartItem.css';


const CartItem = ({ id, title, price, quantity }) => {
const {removeItem}= useCartContext()
  //renderizar las propiedades que llegan del map

  return (
    <div className="card">

      <div className="card-body">
   {/**      <div><img className='ItemImg' src={image} alt={title}/></div>   */} 
        <h5 className="card-title">{title}  </h5>
        <p className="card-text">Precio: ${price}  </p>
        <p className="card-text">Cantidad: {quantity}  </p>
        <p className="card-text">Total: ${price * quantity}</p>
        <button className='btnRemove' onClick={() => removeItem(id)}>x</button>
     
      </div>

    </div>




    
  );
}

export default CartItem;