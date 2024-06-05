import profile from './../../assets/profile.png'
import { IconArrowRight } from '@tabler/icons-react';
import './Navbar.css'

export default function Navbar ({handleNavbar, clas}){

    return(
        <div className={`container_nav ${clas}`} >
            <div className='circle' /> 
            <div className='icon_menu2' onClick={handleNavbar} >
                <svg className='icon_menu'
                     width="24" 
                     height="24" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path className='top' d="M4 6l16 0" />
                <path className='middle' d="M4 12l16 0" />
                <path className='bottom' d="M4 18l16 0" />
                </svg>
            </div>
            <div className='box_info' >
                <div className='info_nav' >
                    <div>
                        <h1>NUESTRAS RAZAS</h1>
                        <h2>Descubre algunas de las razas que ofrecemos:</h2>
                        <div className='box_pets' >
                            <img className='image_razas' src={profile} alt="" />
                            <IconArrowRight stroke={2} />
                        </div>
                    </div>
                    <div className='compromise' >
                        <h2>Compromiso con la Transparencia</h2>
                        <p>En Mascotas de Elite, valoramos la transparencia y la honestidad. Cada cliente recibe toda la documentación necesaria, incluyendo el pedigree y el historial médico de su nueva mascota. Además, estamos disponibles para resolver cualquier duda que puedas tener antes y después de la compra.</p>
                    </div>
                </div>  
                <div className='box_nav' >
                    <img className='image_profile' src={profile} alt="profile nobleza canina" />
                </div>
            </div>
        </div>
    )
}