{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

import './Item.css'

const Item = ({  id, image, title, price, itHadDues, isAnOffer, stock }) => {


    return (
    
    <article>

        <header>
            <h2>
                {title}
            </h2>
        </header>

           <div>
                <img src={image} alt={title}/>
           </div>

            <section>
                <p>Precio: ${price}</p>
                <p>Stock: ${stock}</p>
            </section>

            <footer className='ItemFooter'>
            <button className='buttonDetalle'>Ver Detalle</button>
            </footer>

     </article>
      
    )
}

export default Item;