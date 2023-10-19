{/*NavBar: Suele ser la barra de navegación en la parte superior de la página web, que contiene elementos como enlaces a diferentes secciones del sitio, el logo de la tienda, y otros elementos de navegación.*/}

import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

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

                <Typography sx={{fontSize: '35px', fontWeight: 'bold'}}>
                    Gerhard
                </Typography>

                <div>
                    <Button className='styleNavButton' sx={styleNavButton}>Notebooks</Button>
                    <Button className='styleNavButton' sx={styleNavButton}>Tablets</Button>
                    <Button className='styleNavButton' sx={styleNavButton}>Smartphones</Button>
                </div> 

{/*carrito de compras*/}
                <CartWidget/>

            </Toolbar>

        </AppBar>
        
    );

}

export default NavBar;