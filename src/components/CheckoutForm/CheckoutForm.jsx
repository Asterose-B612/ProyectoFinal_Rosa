//import './Checkout.css'
import {useState} from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
        name, phone, email
    }
    onConfirm (userData)
}

return (
    <div className='containerForm'>
        <form onSubmit = {handleConfirm} className='form'>
            <label className='label'>
               
                <input className='Input'
                 type ='text'
                 placeholder='name'
                 value={name}
                 onChange={({target}) => setName(target.value)} />
            </label>


            <label className='label'>
                <input className='Input'
                 type ='text'
                 placeholder='teléfono'
                 value={phone}
                 onChange={({target}) => setPhone(target.value)  } />
            </label>


            <label className='label'>
                <input className='Input'
                 type ='email'
                 placeholder='email'
                 value={email}
                 onChange={({target}) => setEmail(target.value)  } />
            </label>

           <div>
            <button className='BotonSubmit' type='submit'>Crear Orden</button>
           </div>
        </form>
    </div>
)

}

export default CheckoutForm;