{/*ItemListContainer: Dentro de este componente contenedor vamos a escribir la logica de estado relacionada al listado de nuestros  productos. Ademas de este componente requerimos dos componentes de presentacion.
1° ItemList: Uno es el encargado de listar los productos.
2° Item: Se va a encargar de ser la card de cada uno de los productos .*/}
import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

//  ↓  funcion que recibe una prop greeting, se coloca entre llaves. Y lo muestro con el return→ en un h1 (valor devuelto)
const ItemListContainer = ({greeting}) => {
 
    {/*↓ dentro del ItemListContainer vamos a tener un useSTATE: se va a encargar de almacenar los productos */}
    const [products, setProducts] = useState ([])

{/**1° verifico que en los parametros de url tengamos una categoria, lo hacemos a traves de HOOKS,  (useParams)  */}  
    const { categoryId} = useParams()

//se ejecuta una lamada a productos filtrados por cateroira, sinollamar al listado de todos
    useEffect ( () => {
         
         const asyncFunc =  categoryId ? getProductsByCategory : getProducts

         asyncFunc(categoryId)
            .then( response => {
                setProducts(response)
    })
    .catch(error => {
        console.error(error)
    })

}, [categoryId] )

//ese estado que hablamos anteriormente va a ser pasado por props "products"en este caso, al componente ItemList.
    return (

        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>

        )
}

export default ItemListContainer;