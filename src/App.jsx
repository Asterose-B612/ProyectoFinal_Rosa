import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'


function App() {

 return (

    <div className='App'>
      <NavBar/>

      <ItemListContainer greeting={'Bienvenido, ¿Qué te gustaría elegir hoy?'}/>
{/**3 props tengo: valor iniial del contador, otra para el stock y otra con una funcion declarada que se va a ejecutar cuando haga click en el carrito */}
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>
    </div>

  );
}

export default App
