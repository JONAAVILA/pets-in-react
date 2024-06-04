import breeds from '../../utils/breeds'

export default function Breeds(){
    console.log(breeds)
    return(
        <>
        {breeds.map(dog => {
            return(
                <h1>{dog.name}</h1>
            )
        })}
        </>
    )
}