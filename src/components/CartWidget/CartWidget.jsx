{/**CartWidget: es un pequeño icono o widget que muestra la cantidad de elementos en el carrito de compras actual del usuario. Por lo general, se ubica en la barra de navegación. */}

import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext} from '../../context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {
  // Estilo del icono carrito
  const iconStyle = {
    fontSize: '4vh',
    color: 'white'

  };


  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de elementos en el carrito
  
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <Link to="/cart">
      <AddShoppingCartSharpIcon style={iconStyle} />
      <span className='counterStyle'>{totalQuantity}</span>
    </Link>
  );
}


export default CartWidget;
