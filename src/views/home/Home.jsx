import './Home.css'
import labrador from '../../assets/labrador.webp'
import Counter from '../../components/counter/Counter';
import Form from '../../components/form/Form';

export default function Home({clas}){

    const currentYear = new Date().getFullYear();

    return(
        <>
        <div className="container_info">
            <div className={`circle_home ${clas}_home`} >
                <img className={`labrador ${clas}_labrador`} src={labrador} alt='labrador chocolate'/>
            </div>
            <div className="box_left" >
                <h1>¿PORQUÉ ELEGIRNOS?</h1>
                <h2>Asesoramiento Profesional</h2>
                <p>Trabajamos exclusivamente con criadores certificados y reconocidos a nivel nacional e internacional. Cada una de nuestras mascotas cuenta con un pedigree oficial que respalda su pureza y linaje.</p>
                <div className='box_contador' >
                    <Counter targer='20' />
                    <p>Años dando felicidad</p>
                    <Counter targer='50' />
                    <p>Falimias que confieron en nosotro</p>
                    <Counter targer='110' />
                    <p>Cachorros entrgado a toda latinoamerica</p>
                </div>
            </div>
            <div className='box_rigth' >
                <div className='box_envios' >
                    <h2>Envios internaciones</h2>
                    <p>Hacemos envíos a toda la latinamérica, contamos con seguros para que tu mascota llegue segura y sin complicaciones</p>
                </div>
                    <h2>Calidad Garantizada</h2>
                    <p>Entendemos que adquirir una mascota es una decisión importante. Nuestro equipo de expertos está aquí para asesorarte en todo momento, desde la elección de la raza que mejor se adapte a tu estilo de vida, hasta el cuidado y entrenamiento de tu nueva mascota.</p>  
                    <h2>Salud y Bienestar</h2>
                    <p>Nos preocupamos por el bienestar de nuestras mascotas desde el primer momento. Todos nuestros animales pasan por rigurosos controles veterinarios y son entregados con sus vacunas al día, desparasitados y con un certificado de salud.</p>
                    <h2>Nuestras razas</h2>
                <Form/>
            </div>
        </div>
        <footer className='footer' >{`Todos los derechos recervados ©️ Nobleza Canina ${currentYear} - powered by Jonatan Avila Diseño y Desarrollo Web`}</footer>
        </>
    )
} 