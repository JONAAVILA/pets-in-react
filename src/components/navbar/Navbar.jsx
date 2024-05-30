import profile from './../../assets/profile.png'
import { IconMenu2 } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';
import './Navbar.css'

export default function Navbar ({handleNavbar, clas}){

    return(
        <div className={`container_nav ${clas}`} >
            <div className='circle' /> 
            <div className='icon_menu2' onClick={handleNavbar} >
                <IconMenu2 stroke={2}
                        width={20} 
                        color={'#525252'}
                        />
            </div>
            <div className='box_info' >
                <div className='info' >
                    <h1>NUESTRAS RAZAS</h1>
                    <div className='box_pets' >
                        <img className='image_razas' src={profile} alt="" />
                        <IconArrowRight stroke={2} />
                    </div>
                </div>
                <div className='box_nav' >
                    <img className='image_profile' src={profile} alt="" />
                </div>
            </div>
        </div>
    )
}   