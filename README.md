# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Librerías utilizadas:  -Material (https://mui.com/)


PROYECTO:  E-commerce
Desarrollo de una app de un e-commerce de venta de productos de tecnología: laptops, Notebooks y Smartphones.
Uso de Firebase para la carga de productos.

 Los usuarios podrán explorar los productos, ver sus detalles, agregar productos al carrito, realizar compras y recibir información sobre sus órdenes. A continuación, se detallan los aspectos clave del proyecto.

 User Stories / Brief:

 Un usuario debe poder ingresar a la aplicación, navegar por los productos y acceder a sus detalles.
Desde la vista de detalles, el usuario podrá ver la descripción, la foto y el precio del producto, así como agregarlo al carrito.
Una vez que el carrito tenga al menos un producto, se mostrará un resumen de la orden con el precio total.
Al ingresar su nombre, apellido, teléfono y correo electrónico (con verificación de correo), se activará el botón "Realizar Compra".
Al hacer clic en "Realizar Compra", se almacenará en la base de datos una orden que incluirá todos los productos, la fecha y se proporcionará un número de orden como feedback.

Piezas Componentes:

NavBar
CartWidget
ItemListContainer
ItemList
ItemDetailContainer
ItemDetail
Checkout
Brief (detalles de la compra)