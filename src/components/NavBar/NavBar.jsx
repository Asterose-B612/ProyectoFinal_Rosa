{/*NavBar: Suele ser la barra de navegación en la parte superior de la página web, que contiene elementos como enlaces a diferentes secciones del sitio, el logo de la tienda, y otros elementos de navegación.*/}

import { AppBar, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

    const styleNavButton = {
        textTransform: 'none',
        fontSize: '1.8vh',
        color: '#333',
        border: 'none',
        backgroundColor: 'transparent',
        transition: 'transform 0.2s',
        margin: '2vh',

      '&:hover': { 
      transform: 'scale(1.1)', // Cambiar el tamaño del botón al hacer hover
          color: 'blue', // Cambiar el color de texto al hacer hover
        },
      };


    return (

        <AppBar>

            <Toolbar sx={{backgroundColor:'lightgrey', display: 'flex', justifyContent: 'space-between'}}>
              
               <Link to='/'>
                    <h1 className='Gerhard'>
                            Gerhard
                    </h1>
                </Link>

                <div className='Categories'>
                    <NavLink to={`/category/Notebooks`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } style={styleNavButton}>Notebooks</NavLink>
                    <NavLink to={`/category/Tablets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } style={styleNavButton}>Tablets</NavLink>
                    <NavLink to={`/category/Smartphones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={styleNavButton}>Smartphones</NavLink>
                </div>

{/*carrito de compras*/}
                <CartWidget/>

            </Toolbar>

        </AppBar>
        
    );

}

export default NavBar;