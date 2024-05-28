import './Navbar.css'
import profile from './../../assets/profile.png'
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

export default function Navbar (){

    const [ nav, setNav ] = useState('container_nav_off')

    const handleNavbar = ()=>{
        if(nav === 'container_nav_off'){
            setNav('container_nav_activate')
        }else{
            setNav('container_nav_off')
        }
    }
    return(
        <div className={`container_nav ${nav}`} >
            <img className="image_nav" src={profile} alt="" />
            <div className='icon_menu2' onClick={handleNavbar} >
                <IconMenu2 stroke={2}
                           width={20} 
                           color={'#525252'}
                           />
            </div>
        </div>
    )
}   