import breeds from './../../utils/breeds';
import { IconX } from '@tabler/icons-react';
import './Breeds.css';

export default function Breeds({ handleShowBreeds }){

    return(
        <div className='container_breeds' >
            {breeds.map(dog => {
                return(
                    <div key={dog.breed} className='box_breeds' >
                        <img src={dog.image} alt={dog.breed} />
                        <h1>{dog.breed}</h1>
                        <p>Pedigrí: {dog.description}</p>
                        <ul>
                        {dog.tips.map(tip => (
                            <>
                            <li>{tip}</li>
                            </>
                        ))}     
                        </ul>
                    </div>
                )
            })}
            <IconX className='IconX' onClick={()=> handleShowBreeds()} stroke={2} />
        </div>
    )
}