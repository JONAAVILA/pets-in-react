import breeds from './../../utils/breeds';
import './Breeds.css';

export default function Breeds(){
    console.log(breeds)
    return(
        <div className='container_breeds' >
        {breeds.map(dog => {
            return(
                <div className='box_breeds' >
                    <div>
                        <img src={dog.image}/>
                        <h1>{dog.breed}</h1>
                        <p>Edad: {dog.years}</p>
                        <p>Pedigrí: {dog.pedigree}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}