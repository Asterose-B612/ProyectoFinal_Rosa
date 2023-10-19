{/* ESTE COMPONENTE SE ENCARGA DE MOSTRAR EL DETALLE DE UNO DE LOS PRODUCTOS*/}
import './ItemDetailContainer.css'
import {useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    {/*↓ useSTATE.*/}
const [product, setProduct] = useState (null)

{/*↓ voy a hacer el llamado a una funcion: getProductById la cual esta contenida dentro de el archivo asyncmOCK donde escribiamos las funciones que simulaba el llamado de nuestros productos. y le paso el id harcodeado de un producto a mod de prueba.
Una vez que la promesa se resuleve ese producto recibido se guarda en el ESTADO PRODUCT (del state ↑*/}
useEffect ( () => {
    getProductById('1')
    .then( response => {
        setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })

}, [] )

//ese estado que hablamos anteriormente va a ser pasado por props "products"en este caso, al componente ItemList.
    return (

        <div className='ItemDetailContainer'>
         <ItemDetail {...product} />
        </div>

        )
}

export default ItemDetailContainer;