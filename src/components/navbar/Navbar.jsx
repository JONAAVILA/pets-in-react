import './Navbar.css'
import profile from './../../assets/profile.png'
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

export default function Navbar (){

    const [ clas, setClas ] = useState('off')

    const handleNavbar = ()=>{
        if(clas === 'off'){
            setClas('on')
        }else{
            setClas('off')
        }
    }
    return(
        <div className={`container_nav ${clas}`} >
            <div className='icon_menu2' onClick={handleNavbar} >
                <IconMenu2 stroke={2}
                        width={20} 
                        color={'#525252'}
                        />
            </div>
            <div className='box_nav' >
                <img src={profile} alt="" />
            </div>
        </div>
    )
}   