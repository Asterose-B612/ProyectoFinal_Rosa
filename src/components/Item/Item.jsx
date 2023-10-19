{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

import './Item.css'

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
            <button className='buttonDetalle'>Ver Detalle</button>
            </footer>

     </article>
      
    )
}

export default Item;