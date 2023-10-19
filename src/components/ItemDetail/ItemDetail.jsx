
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

{/**COMPONENTE ITEM: VA A SER LA CARD DE NUESTROS PRODUCTOS */}

const ItemDetail = ({  id, category, image, title, price, itHadDues, isAnOffer, stock }) => {


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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>
            </footer>

     </article>
      
    )
}

export default ItemDetail;