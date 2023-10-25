import './ItemCount.css'
import { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    {/* ↑ es un STATE: va a estar almacenando la cantidad del contador */}

    // Función para incrementar con su validación correspondiente
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };
// Función para incrementar con su validación correspondiente
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    
{/*El return : devuelve el componente con los controles donde se muestra la cantidad. Tambien esta el boton de agregar al carrito */}
    return (
        <div className= 'Counter'>

            {/* inicio controles del contador */} 
            <div className='controlsContainer'> 
            <button className='buttonCount' onClick={decrement} disabled={quantity <= 1}>  -  </button>
            {/* disabled para deshabilitar el botón de decremento cuando la cantidad es igual a 1.. */}

            <h4 className='number'>{quantity}</h4>

            <button className='buttonCount' onClick={increment}  disabled={quantity >= stock}>  +  </button>
            </div>{/* disabled para deshabilitar el botón de incremento cuando la cantidad alcanza el stock disponible. */}


           {/* inicio boton Agregar al carrito.IMPORTANTE TENER EN CUENTA!!: Este boton va a ejecutar como CallBack la funcion recibida por props ONADD y se le va a pasar como argumento la cantidad del estado. En caso de no tener stock disponible debemos evitar que se ejecute esta función.Usando la propiedad disable del boton  validando que haya stock disponible*/}
            <div> 
                <button className='btnAgregar'  onClick={() => onAdd(quantity)}
    disabled={!stock || quantity === 0}> Agregar al carrito </button>
            </div> {/*deshabilitar el botón "Agregar al carrito" si no hay stock disponible.*/}

        </div>//fin counter
    );
};


export default ItemCount;
