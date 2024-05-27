import './Navbar.css'
import profile from './../../assets/profile.png'
import { IconMenu2 } from '@tabler/icons-react';

export default function Navbar (){
    return(
        <div className="container_nav" >
            <img className="image_nav" src={profile} alt="" />
            <div className='icon_menu2'>
                <IconMenu2 stroke={2} width={15}/>
            </div>
        </div>
    )
}   