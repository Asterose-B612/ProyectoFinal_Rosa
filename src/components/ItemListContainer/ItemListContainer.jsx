{/*ItemListContainer: Dentro de este componente contenedor vamos a escribir la logica de estado relacionada al listado de nuestros  productos. Ademas de este componente requerimos dos componentes de presentacion.
1° ItemList: Uno es el encargado de listar los productos.
2° Item: Se va a encargar de ser la card de cada uno de los productos .*/}

import {useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../Services/firebase/FirebaseConfig'

//  ↓  funcion que recibe una prop greeting, se coloca entre llaves. Y lo muestro con el return→ en un h1 (valor devuelto)
const ItemListContainer = ({greeting}) => {
 
    {/*↓ STATE: se encargar de almacenar los productos */}
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

{/**1° verifico que en los parametros de url tengamos una categoria, lo hacemos a traves de HOOKS,  (useParams)  */}  
    const { categoryId} = useParams()

       
    //useEffect ( () => {
    //   const asyncFunc =  categoryId ? getProductsByCategory : getProducts
    //     asyncFunc(categoryId)
   //         .then( response => {
    //            setProducts(response)
    //})
   // .catch(error => {
   //     console.error(error)
   // })
// }, [categoryId] )

useEffect (()=> {
    setLoading(true)
    const coleccionRef = categoryId
    ? query(collection(db, 'products'), where ('category', '==', categoryId))
    : collection (db, 'products')
    getDocs(coleccionRef)
   
    .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
            const data = doc.data()
            return { id: doc.id, ...data}
        })

        setProducts(productsAdapted);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
}, [categoryId]);

return (
  <div>
    {loading ? (
      <p> Cargando...</p>
    ) : (
      <div>
        <h1>{greeting}</h1>
        <ItemList products={products} />
      </div>
    )}
  </div>
);
};

export default ItemListContainer;