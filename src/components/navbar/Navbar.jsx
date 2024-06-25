import { IconArrowRight } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconShield } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import logo from '../../../public/logo.webp';
import breeds from '../../utils/breeds';
import Breeds from '../../views/breeds/Breeds';
import cencosud from '../../assets/payments/cencosud.webp'
import mercadoPago from '../../assets/payments/mercado-pago.webp'
import naranja from '../../assets/payments/naranja.webp'
import pagoFacil from '../../assets/payments/pago-facil.webp'
import rapiPago from '../../assets/payments/rapipago.webp'
import visa from '../../assets/payments/visa.webp'
import mastercard from '../../assets/payments/mastercard.webp'
import american from '../../assets/payments/american.webp'
import './Navbar.css'

export default function Navbar ({handleNavbar, showBreeds, handleShowBreeds, clas}){

    return(
        <div className={`container_nav ${clas}`} >
            {showBreeds ? <Breeds handleShowBreeds={handleShowBreeds} /> : null}
            <div className='circle' /> 
            <div className='icon_menu2' onClick={handleNavbar} >
                <svg className='icon_menu'
                     width="20" 
                     height="23" 
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
            <div className='container_info_nav' >
                <div className='box_nav' >
                    <div className='box_info_nav' >
                        <div className='box_tittle_nav' >
                            <h1>NUESTRAS RAZAS</h1>
                            <h2>Descubre algunas de las razas que ofrecemos:</h2>
                            <div className='box_pets_nav' >
                                <div className='images_pets' >
                                    {breeds.map(dog => (
                                        <img key={dog.breed} src={dog.image} alt={dog.breed} />
                                    ))}
                                </div>
                                <div className='IconArrowRight_nav' onClick={()=> handleShowBreeds()} >
                                    <IconArrowRight  stroke={2} />
                                </div>
                            </div>  
                        </div>
                        <div className='compromise_nav' >
                            <h2><IconShield className='IconShield_nav' stroke={2} />Compromiso con la Transparencia</h2>
                            <p>En Mascotas de Elite, valoramos la transparencia y la honestidad. Cada cliente recibe toda la documentación necesaria, incluyendo el pedigree y el historial médico de su nueva mascota. Además, estamos disponibles para resolver cualquier duda que puedas tener antes y después de la compra.</p>
                        </div>
                    </div>
                    <div className='box_contact_nav' >
                        <div className='contact_nav' >
                            <h2>Contactos</h2>
                            <p><IconMail className='icon_contact_nav' stroke={1} width={20} />furrycachorros@furrycachorros.com</p>
                            <p>
                                <a href="https://wa.link/wo5fbg"><IconBrandWhatsapp className='icon_contact_nav' stroke={1} width={20}/>+54 911 5221-6139</a>
                            </p>
                            <p>
                                <a href="https://wa.link/imsfli"><IconBrandWhatsapp className='icon_contact_nav' stroke={1} width={20}/>+54 911 7145-2406</a>
                            </p>
                            <p><IconMapPin className='icon_contact_nav map_nav' stroke={1} width={22}/>Buenos Aires, Argentina</p>
                        </div>
                        <div className='box_payment_nav' >
                            <h2>Métodos de pago</h2>
                            <div className='icons_payment' >
                                <div>
                                    <img src={mercadoPago} alt="mercadoPago" />
                                    <img src={naranja} alt="naranja" />
                                    <img src={pagoFacil} alt="pagoFacil" />
                                    <img src={rapiPago} alt="rapiPago" />
                                </div>
                                <div>
                                    <img src={cencosud} alt="cencosud" />
                                    <img src={visa} alt="visa" />
                                    <img src={mastercard} alt="mastercar" />
                                    <img src={american} alt="american" />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='box_nav_image' >
                    <img className='image_profile' src={logo} alt="profile nobleza canina" />
                </div>
            </div>
        </div>
    )
}