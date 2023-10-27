//import './Checkout.css'
import {useState} from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')
    const [emailRepetir, setEmailRepetir] = useState ('')

const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
        name, phone, email,  
    }
    onConfirm (userData)
}

return (
    <div className='containerForm'>
<h2>Terminar compra</h2>
<h3 className='porFavor'>Por favor, complete los campos con sus datos.</h3>

        <form onSubmit = {handleConfirm} className='form'>
            <label className='label'>
               
                <input className='Input'
                 type ='text'
                 placeholder='nombre y apellido'
                 name='name'
                 value={name}
                 onChange={({target}) => setName(target.value)} />
            </label>


            <label className='label'>
                <input className='Input'
                 type ='text'
                 placeholder='teléfono '
                 name='phone'
                 value={phone}
                 onChange={({target}) => setPhone(target.value)  } />
            </label>


            <label className='label'>
                <input className='Input'
                 type ='email'
                 placeholder='email'
                 name='email'
                 value={email}
                 onChange={({target}) => setEmail(target.value)  } />
            </label>

       {/**     <label className='label'>
                <input className='Input'
                 type ='email'
                 placeholder='Repita su email'
                 name='email Repetir'
                 value={emailRepetir}
                 onChange={({target}) => setEmailRepetir(target.value)  } />
            </label>
*/} 


           <div>
            <button className='BotonSubmit' type='submit'>Generar Orden</button>
           </div>
        </form>
    </div>
)

}

export default CheckoutForm;