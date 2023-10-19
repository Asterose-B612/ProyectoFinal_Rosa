{/**CartWidget: es un pequeño icono o widget que muestra la cantidad de elementos en el carrito de compras actual del usuario. Por lo general, se ubica en la barra de navegación. */}

import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './CartWidget.css';

const CartWidget = () => {

    const iconStyle = {
        fontSize: '4vh',
        color:'#AB0C0C'
      };


    return (

        <div className='divCart'>

            <AddShoppingCartSharpIcon style={iconStyle}/>

            <span className='number'>
            0
            </span>

        </div>

    );
}

export default CartWidget;