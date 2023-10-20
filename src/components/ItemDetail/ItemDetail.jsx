{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}
{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext,useState} from "react";
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

{/*Estado: almacena la cantidad agregada de ese producto. La funcion q se ejecuta al hacer click en el boton del contador que se recibe por la prop onAdd */}

const ItemDetail = ({  id, category, image, title, price, itHadDues, isAnOffer, stock }) => {
//estado  para almacenarla cantidad agregada
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext (CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
//armo los datos del objeto
        const item = {
            id, title, price
        }
//esos datos se los paso a ña funcion addItem y cantidad qseleccionada x usuario
        addItem (item, quantity)
    }


    return (
    <article className='cardItem'>

        <header className='header'>
            <h2 className='ItemHeader'>
                {title}
            </h2>
        </header>

           <div>

           <img className='ItemImg' src={image} alt={title}/>
           </div>

            <section>
                <p className='Info'>Categoría: {category} </p>
                <p className='Info'>Descripción: {title}</p>
                <p className='Info'>Precio: ${price}</p>
            </section>

            <footer className='ItemFooter'>
                {/**3 props tengo: valor iniial del contador, otra para el stock y otra con una funcion declarada que se va a ejecutar cuando haga click en el carrito */}

                {quantityAdded > 0 ?
                    <Link to='/cart' className='Option'>Terminar compra
                    </Link>
               :
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                }
          
           
    


            )
          
            </footer>

     </article>
      
    )
}

export default ItemDetail;