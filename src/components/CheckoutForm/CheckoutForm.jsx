//import './Checkout.css'
import {useState} from 'react'

const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
        name, phone, email
    }
    onConfirm (useData)
}

return (
    <div>
        <form onSubmit = {handleConfirm}>
            <label className='label'>
                Nombre
                <input className='Input'
                 type ='text'
                 value={name}
                 onChange={({target}) => setName(target.value)  } />
            </label>


            <label className='label'>
                Telefono
                <input className='Input'
                 type ='text'
                 value={phone}
                 onChange={({target}) => setName(target.value)  } />
            </label>


            <label className='label'>
                Email
                <input className='Input'
                 type ='email'
                 value={email}
                 onChange={({target}) => setName(target.value)  } />
            </label>

           <div>
            <button className='BotonSubmit' type='submit'>Crear Orden</button>
           </div>
        </form>
    </div>
)

}

export default CheckoutForm;