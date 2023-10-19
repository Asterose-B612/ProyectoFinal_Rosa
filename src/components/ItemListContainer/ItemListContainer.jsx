import {useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

{/*ItemListContainer: Dentro de este componente contenedor vamos a escribir la logica de estado relacionada al listado de nuestros  productos. Ademas de este componente requerimos dos componentes de presentacion.
1° ItemList: Uno es el encargado de listar los productos.
2° Item: Se va a encargar de ser la card de cada uno de los productos .*/}

//  ↓  funcion que recibe una prop greeting, se coloca entre llaves. Y lo muestro con el return→ en un h1 (valor devuelto)
const ItemListContainer = ({greeting}) => {

    {/*↓ dentro del ItemListContainer vamos a tener un useSTATE: se va a encargar de almacenar los productos */}
const [products, setProducts] = useState ([])

//para obtener un producto estamos lamando a la funcion getProducts la cual esta declaradadentro del archivo asyncMock. Luego de ese tiempo que tarda la promesa en resolverse guardamos la respuesta: en este caso es el array de productos. Y ese array de productos lo vamos a guardar en nuestro estado.
useEffect ( () => {
    getProducts()
    .then( response => {
        setProducts(response)
    })
    .catch(error => {
        console.error(error)
    })

}, [] )

//ese estado que hablamos anteriormente va a ser pasado por props "products"en este caso, al componente ItemList.
    return (

        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>

        )
}

export default ItemListContainer;