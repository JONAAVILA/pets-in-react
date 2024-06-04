import './Form.css'

export default function Form(){
    return(
            <form className='form' action="">
                <h2>Consultas</h2>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Apellido'/>
                <input type="email" placeholder='E-mail'/>
                <input type="text" placeholder='País'/>
                <textarea name="" id=""></textarea>
                <div className='box_button' >
                    <button>Enviar</button>
                </div>
            </form>
    )
}