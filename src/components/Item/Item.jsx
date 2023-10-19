{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

import './Item.css'
import { Link } from "react-router-dom";

const Item = ({  id, image, title, price, itHadDues, isAnOffer, stock }) => {


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
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock: ${stock}</p>
            </section>

            <footer className='ItemFooter'>
            <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>

     </article>
      
    )
}

export default Item;