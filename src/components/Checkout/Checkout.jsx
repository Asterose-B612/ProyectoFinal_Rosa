import { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'



const Checkout =() => {

const [loading, setloading] = useState(false)
const[orderId, setOrderId] = useState ('')

const { cart, total, clearCart } = useContext(CartContext)

const createOrder = async ({ name, phone,email}) => {
setloading (true)

try {
    const objOrder = {
        buyer : {
            name, phone, email
        },
        item : cart,
        total: total,
        date: Timestamp.fromDate (new Date())
    }



}catch(error){
console.log(error)
}


}


if (loading) {
    return <h1>Se esta generando su orden...</h1>
}

if (orderId) {
    return <h1>El id de su orden es: {orderId} </h1>
}

return(
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm = {createOrder} />
    </div>
)

}


export default Checkout;