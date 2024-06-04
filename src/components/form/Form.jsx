import { useState } from 'react'
import './Form.css'

export default function Form(){

    const [ prueba, setPrueba ] = useState('')
    const [ inputValue, setInputValue ] = useState({
        name: '',
        surname:'',
        email:'',
        country:'',
        message:''
    })

    const handleInputValue = (event)=>{
        const target = event.target
        if(target.id === 'name'){
            setInputValue(prevSetInputValue => ({
                ...prevSetInputValue,
                name:target.value
            }))
        }
        if(target.id === 'surname'){
            setInputValue(prevSetInputValue => ({
                ...prevSetInputValue,
                surname:target.value
            }))
        }
        if(target.id === 'email'){
            setInputValue(prevSetInputValue => ({
                ...prevSetInputValue,
                email:target.value
            }))
        }
        if(target.id === 'country'){
            setInputValue(prevSetInputValue => ({
                ...prevSetInputValue,
                country:target.value
            }))
        }
        if(target.id === 'message'){
            setInputValue(prevSetInputValue => ({
                ...prevSetInputValue,
                message:target.value
            }))
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(prueba) {
            setPrueba('')
            return
        }
        setInputValue({
            name: '',
            surname:'',
            email:'',
            country:'',
            message:''
        })
    }
    return(
            <form className='form' action="">
                <h2>Consultas</h2>
                <input type="text" 
                       onChange={()=>setPrueba('bot')}
                       value={prueba}
                       placeholder='prueba'
                       style={{display:'none'}} 
                       />
                <input id='name'
                       value={inputValue.name}
                       onChange={handleInputValue} 
                       type="text" 
                       placeholder='Nombre'
                       />
                <input id='surname'
                       value={inputValue.surname}
                       onChange={handleInputValue} 
                       type="text" 
                       placeholder='Apellido'
                       />
                <input id='email' 
                       value={inputValue.email}
                       onChange={handleInputValue} 
                       type="email" 
                       placeholder='E-mail'
                       />
                <input id='country' 
                       value={inputValue.country}
                       onChange={handleInputValue} 
                       type="text" 
                       placeholder='País'
                       />
                <textarea id='message'
                          value={inputValue.message}
                          onChange={handleInputValue}>
                </textarea>
                <div className='box_button' >
                    <button onClick={handleSubmit} >enviar</button>
                </div>
            </form>
    )
}   