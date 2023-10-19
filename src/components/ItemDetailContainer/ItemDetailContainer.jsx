{/* ESTE COMPONENTE SE ENCARGA DE MOSTRAR EL DETALLE DE UNO DE LOS PRODUCTOS*/}
import './ItemDetailContainer.css'
import {useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    {/*↓ useSTATE.*/}
       const [product, setProduct] = useState (null)
//obtenemos el id del producto y se lo pasamos a la funcion de getProductBy Id
       const { itemId } = useParams()

       useEffect ( () => {
          getProductById(itemId)
             .then( response => {
                 setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })

}, [itemId] )

//ese estado que hablamos anteriormente va a ser pasado por props "products"en este caso, al componente ItemList.
    return (

        <div className='ItemDetailContainer'>
         <ItemDetail {...product} />
        </div>

        )
}

export default ItemDetailContainer;