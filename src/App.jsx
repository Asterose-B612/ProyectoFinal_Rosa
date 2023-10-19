import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";




function App() {
  return (

    <div className='App'>
          
            <BrowserRouter>
                
               <NavBar/>

               <Routes>
                {/* / → muestra todos los productos
                category → por categoria e Item →el detalle por producto. En el caso de no coincidor las rutas * . Utilizo el mismo componente ItemListContainer */}
               <Route path= '/' element={<ItemListContainer/>}/>
               <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
               <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
               <Route path= '*' element={<h1> 404 NOT FOUND </h1>}/>
               </Routes>

            </BrowserRouter>

    </div>

  );
}


export default App;



