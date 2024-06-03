import './Home.css'
import labrador from '../../assets/labrador.webp'

export default function Home(){
    return(
        <div className="container_info">
            <div className="box_left" >
                <h1>¿PORQUÉ ELEGIRNOS?</h1>
                <h2>Asesoramiento Profesional</h2>
                <p>Trabajamos exclusivamente con criadores certificados y reconocidos a nivel nacional e internacional. Cada una de nuestras mascotas cuenta con un pedigree oficial que respalda su pureza y linaje.</p>
                <img src={labrador} alt="" />
            </div>
            <div className='box_rigth' >
                <div className='box_envios' >
                    <h2>Envios internaciones</h2>
                    <p>Hacemos envíos a toda la latinamérica, contamos con seguros para que tu mascota llegue segura y sin complicaciones</p>
                </div>
                    <h2>Calidad Garantizada</h2>
                    <p>Nos preocupamos por el bienestar de nuestras mascotas desde el primer momento. Todos nuestros animales pasan por rigurosos controles veterinarios y son entregados con sus vacunas al día, desparasitados y con un certificado de salud.</p>  
            </div>
        </div>
    )
} 