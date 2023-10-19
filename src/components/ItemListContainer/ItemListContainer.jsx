{/*ItemListContainer: Es un componente que podría mostrar una lista de productos disponibles en la tienda. Puede contener varios productos representados por el componente ItemList.*/}

//  ↓  funcion que recibe una prop greeting, se coloca entre llaves. Y lo muestro con el return→ en un h1 (valor devuelto)
const ItemListContainer = ({greeting}) => {

    return (

        <div>
            <h1>{greeting}</h1>
        </div>

        )
}

export default ItemListContainer;