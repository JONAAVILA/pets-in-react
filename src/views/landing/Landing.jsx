import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandMeta } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import beagle from '../../assets/beagle.webp';
import Home from '../home/Home';
import './Landing.css';

export default function Landing (){

    const [ clas, setClas ] = useState('off')

    const handleNavbar = ()=>{
        if(clas === 'off'){
            setClas('on')
        }else{
            setClas('off')
        }
    }

    return(
        <div className='container_root' >
            <div className="box_navbar_landing" >
                <Navbar handleNavbar={handleNavbar} clas={clas} />
            </div>
            <div className={`box_root ${clas}_root`}>
                <div className="container_landing" >
                    <div className="box_landing" > 
                        <div className="box_heading" >
                            <h1>FURRYSCACHORROS</h1>
                        </div>
                        <div className='sub_heading' >
                            <div>
                                <h2>¿Buscás tu mascota soñada?</h2>
                                <p>
                                    En Furrys Cachorros, nos especializamos en la venta de mascotas de razas puras, asegurando que cada uno de nuestros animales provenga de las mejores líneas de sangre y cumpla con los más altos estándares de calidad y salud.
                                </p>
                            </div>
                        </div>
                        <div className='icons_landing' >
                            <IconBrandInstagram stroke={1} width={20} />
                            <IconBrandMeta stroke={1} width={20} />
                            <a href="https://wa.link/imsfli"
                               target='_blank'
                               rel='noreferrer'
                               aria-label="Contáctanos por WhatsApp">
                               <IconBrandWhatsapp stroke={1} width={20} />
                            </a>
                        </div>
                    </div>
                    <div className={`circle_langing ${clas}_landing`} >
                        <img className={`beagle ${clas}_beagle`} src={beagle} alt="cachorro beagle" />
                    </div>
                </div>
                <Home clas={clas} />
            </div>
        </div>
    )
}