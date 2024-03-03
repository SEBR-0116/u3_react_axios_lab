import '../style/StarshipList.css'
import { BASE_URL } from '../global'
import axios from 'axios'


export default function Characters({characters}){

        // console.log(characters)
        if (!characters) {
        
        return <div>Page Loading please wait...</div>

      }else{
        // let listArray =[]
        // async function loadAllName(dataArrays, resourse){
        //     const promises = dataArrays.map(async (element) =>  {
        //         let respons = await axios.get(element)
        //         listArray = []
        //         switch  (resourse) {
        //         case 'films':
        //            return respons.data.title
        //         break

        //         default:
        //             return null
        //         }

                
        //     })
        //          const results = await Promise.all(promises)
        //     return results
            
        // }

        return(
            <div className='main-container'>
                <h1 className='page-title'>List of Characters</h1>

            {characters.map((character,index) => (
                <div className='list-container' key={index}>
                    <ul className='data-list-ul'>
                        <li><span className='list-style'>Name : </span>{character.name}</li>
                        <li><span className='list-style'>Height : </span>{character.height}</li>
                        <li><span className='list-style'>Mass : </span>{character.mass}</li>
                        <li><span className='list-style'>Hair Color : </span>{character.hair_color}</li>
                        <li><span className='list-style'>Skin Color : </span>{character.skin_color}</li>
                        <li><span className='list-style'>Eye Color : </span>{character.eye_color}</li>
                        <li><span className='list-style'>Birth Year : </span>{character.birth_year}</li>
                        <li><span className='list-style'>Gender : </span>{character.gender}</li>
                        <li><span className='list-style'>Home world : </span>{character.homeworld}</li>
                        <li><span className='list-style'>Films : </span>{character.films}</li>
                        <li><span className='list-style'>Vehicles : </span>{character.vehicles[0]}</li>
                        <li><span className='list-style'>Species : </span>{character.species}</li>
                        <li><span className='list-style'>Starships : </span>{character.starships[0]}</li>
                    </ul>

                </div>

            ))}
            </div>
            )
    }
}