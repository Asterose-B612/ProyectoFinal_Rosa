import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart'
import  {CartProvider}  from './context/CartContext';
import Checkout from './components/Checkout/Checkout'



function App() {
  return (

    <div className='App'>
          
            <BrowserRouter>
              <CartProvider>
               <NavBar/>
 {/* / → muestra todos los productos
                category → por categoria e Item →el detalle por producto. En el caso de no coincidor las rutas * . Utilizo el mismo componente ItemListContainer */}
               <Routes>
                  <Route path= '/' element={<ItemListContainer greeting={' Bienvenido, ¿Qué te gustaría elegir hoy?'}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/checkout' element={<Checkout/>} />
                  <Route path= '*' element={<h1> 404 NOT FOUND </h1>}/>
                  </Routes>

               </CartProvider>
            </BrowserRouter>

    </div>

  );
}

export default App;



