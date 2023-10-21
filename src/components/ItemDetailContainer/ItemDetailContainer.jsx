{/* ESTE COMPONENTE SE ENCARGA DE MOSTRAR EL DETALLE DE UNO DE LOS PRODUCTOS*/}
import './ItemDetailContainer.css'
import {useState, useEffect } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import {getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/firebase/FirebaseConfig';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect ( () => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)
//refrencia solo a un documento de la coleccion
getDoc(docRef)
.then((response) => {
  const data = response.data()
  const productAdapted = { id: response.id, ...data }
  setProduct(productAdapted)
})
.catch((error) => {
  console.log(error)
})
.finally(() => {
  setLoading(false)
})
}, [itemId])

//ese estado que hablamos anteriormente va a ser pasado por props "products"en este caso, al componente ItemList.
return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer;