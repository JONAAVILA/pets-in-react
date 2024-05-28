import Navbar from "../components/navbar/Navbar";
import './Landing.css';

export default function Landing (){
    return(
        <div className="container_landing" >
            <div className="box_navbar" >
                <Navbar/>
            </div>
            <div className="box_landing" > 
                <h1>NOBLEZA CANINA</h1>
                <h3>¿Buscás tu mascota soñada?</h3>
                <p>
                Podemos ayudarte a conseguirla, en unos simples pasos podes tener tu mascota soñada
                </p>
            </div>
        </div>
    )
}