

import React from 'react'

const CartItem = ({ id, title, price, quantity }) => {

  //renderizar las propiedades que llegan del map

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Quantity: {quantity}</p>
        <p className="card-text">Total: ${price * quantity}</p>
        <button onClick={() => removeItem(id)}>x</button>
      </div>
    </div>
    
  );
}

export default CartItem;