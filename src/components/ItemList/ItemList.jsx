{/**ESTE ES EL COMPONENTE DE PRESENTACION QUE SE NECARGA DE LISTAR LOS PRODUCTOS
Cada uno de estos productos os vamos a mostrar con el componente Item*/}

import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({ products }) => {
  
    return(
        <div className='ListGroup'>
          {products.map (prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )

}

export default ItemList;