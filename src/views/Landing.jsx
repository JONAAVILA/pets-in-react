import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandMeta } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import Navbar from "../components/navbar/Navbar";
import './Landing.css';

export default function Landing (){
    return(
        <div className="container_landing" >
            <div className="box_navbar" >
                <Navbar/>
            </div>
            <div className="box_landing" > 
                <div className="box_heading" >
                    <h1>NOBLEZA CANINA</h1>
                </div>
                <div className='sub_heading' >
                    <div>
                        <h2>¿Buscás tu mascota soñada?</h2>
                        <p>
                        Podemos ayudarte a conseguirla, en unos simples pasos podes tener tu mascota soñada
                        </p>
                    </div>
                </div>
                <div className='icons_landing' >
                    <IconBrandInstagram stroke={1} width={20} />
                    <IconBrandMeta stroke={1} width={20} />
                    <IconBrandWhatsapp stroke={1} width={20} />
                </div>
            </div>
        </div>
    )
}