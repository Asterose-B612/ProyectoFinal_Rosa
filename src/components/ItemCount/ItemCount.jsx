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
            <div className='Controls'> 
            <button className='ButtonCount' onClick={decrement} style={{ fontSize: "20px", marginRight: "10px", color: "black", borderColor: 'gray' }}>  -  </button>

            <h4 className='Number' style={{ fontSize: "2vh", marginRight: "1vh", marginLeft: "1vh",color: "black", borderColor: 'gray' }}>{quantity}</h4>

            <button className='ButtonCount' onClick={increment} style={{ fontSize: "20px", marginLeft: "10px", color: "black", borderColor: 'gray' }}>  +  </button>
            </div>{/* fin controles del contador */}


           {/* inicio boton Agregar al carrito.IMPORTANTE TENER EN CUENTA!!: Este boton va a ejecutar como CallBack la funcion recibida por props ONADD y se le va a pasar como argumento la cantidad del estado. En caso de no tener stock disponible debemos evitar que se ejecute esta función.Usando la propiedad disable del boton  validando que haya stock disponible*/}
            <div> 
                <button className='ButtonAgregar' onClick={() => onAdd(quantity)} disabled={!stock}
                style={{
                    fontSize: "1.8vh",
                    backgroundColor: "gray",
                    color: "lightgray",
                    padding: "5px 10px",
                    marginLeft: "20px",
                    borderRadius: "5px",
                    border: "none",}}>

                Agregar al carrito
                </button>
            </div> {/*fin boton agregar al carrito */}



        </div>//fin counter
    );
};


export default ItemCount;
