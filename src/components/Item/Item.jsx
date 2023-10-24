{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

import './Item.css'
import { NavLink } from "react-router-dom";

const Item = ({  id, image, title, price, itHadDues, isAnOffer, stock }) => {


    return (
    
    <article className='cardItem'>

           <div  className='ItemImgContainer'>
                <img className='ItemImg' src={image} alt={title}/>
           </div>

        <header className='header'>
            <h2 className='ItemHeader'>
                {title}
            </h2>
        </header>


            <section>
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock: {stock}</p>
            </section>

            <section className='ItemFooter'>
            <NavLink to={`/item/${id}`} className='Option'> Ver Detalle </NavLink>
            </section>

     </article>
      
    )
}

export default Item;