import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import golden from '../../assets/golden.webp';
import Counter from '../../components/counter/Counter';
import Form from '../../components/form/Form';
import './Home.css'

export default function Home({clas}){

    const currentYear = new Date().getFullYear();

    return(
        <>
        <div className="container_info">
            <div className={`circle_home ${clas}_home`} >
                <img className={`golden ${clas}_golden`} src={golden} alt='golden retriever'/>
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
        <div className='box_contact' >
            <h2>Contactos</h2>
            <div>
                <p>
                    <IconMail className='icon_contact' 
                             stroke={1} 
                             width={20} 
                             />
                    furrycachorros@furrycachorros.com
                </p>
                <p>
                    <a href="https://wa.link/wo5fbg"
                       target='_blank' 
                       rel='noreferrer' >
                        <IconBrandWhatsapp className='icon_contact'
                                       stroke={1} 
                                       width={20}
                                       />
                        +54 911 5221-6139
                    </a>
                </p>
                <p>
                    <a href="https://wa.link/imsfli"
                       target='_blank'
                       rel='noreferrer'>
                        <IconBrandWhatsapp className='icon_contact'
                                           stroke={1} 
                                           width={20}
                                           />
                        +54 911 7145-2406
                    </a>
                </p>
                <p>
                    <IconMapPin className='icon_contact map'
                                stroke={1} 
                                width={22}
                                />
                    Buenos Aires, Argentina
                </p>
            </div>
        </div>
        <footer className='footer'>
            {`Todos los derechos recervados ©️ Furrys Cachorros ${currentYear} - powered by `}
            <a href='https://www.google.com/search?q=Jonatan+Avila+Desarrollador+Web+Full+Stack+-+Dise%C3%B1ador+Web&stick=H4sIAAAAAAAA_-NgU1I1qLA0TTQ2SktOSjFPNktLNDG3MqhISTE1NzA3tDA1MzdMszRIXcRq7ZWfl1iSmKfgWJaZk6jgklqcWFSUn5OTmJJfpBCemqTgVpqToxBckpicraCr4JJZnHp4I0wOALOQqlZnAAAA&hl=es-419&mat=CVgOLeHDGpajElcBezTaAcrisFWb4vYmoNvFKCjnUfwmllQE00eOHqFyUGvyW8QKj3LTJ4c6ZZ4feRc0ltuD2nOuIx_t-lS0cF7qBHctfjg_-Z-lnQJBiV4V5WhUeV7bqIk&authuser=0' >
                Jonatan Avila Diseño y Desarrollo Web
            </a>
        </footer>
        </>
    )
} 