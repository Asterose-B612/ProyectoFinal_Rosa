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
        border: 'none', // Elimina el borde del botón
        backgroundColor: 'transparent', // Fondo transparente
        transition: 'transform 0.2s',

      };
      

    return (

        <AppBar>

            <Toolbar sx={{backgroundColor:'lightgrey', display: 'flex', justifyContent: 'space-between'}}>
              
               <Link to='/'>
                    <Typography sx={{fontSize: '35px', fontWeight: 'bold'}}>
                            Gerhard
                    </Typography>
                </Link>

                <div className='Categories'>
                    <Link to={`/category/Notebooks`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Notebooks</Link>
                    <Link to={`/category/Tablets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Tablets</Link>
                    <Link to={`/category/Smartphones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} sx={styleNavButton}>Smartphones</Link>
                </div>

{/*carrito de compras*/}
                <CartWidget/>

            </Toolbar>

        </AppBar>
        
    );

}

export default NavBar;