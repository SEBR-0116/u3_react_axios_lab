import "../style/StarshipList.css"

export default function Species({species}){
    // console.log(species)
    if(!species){
        return <div> Page loading please wait</div>
    }else{
    return(
        <div className='main-container'>
        <h1 className='page-title'>List of Species</h1>

        {species.map((specie,index) => (
            <div className='list-container' key={index}>
                <ul className='data-list-ul'>
                    <li><span className='list-style'>Title : </span>{specie.name}</li>
                    <li><span className='list-style'>Language : </span>{specie.language}</li>
                    <li><span className='list-style'>Home World : </span>{specie.homeworld}</li>
                    <li><span className='list-style'>Hair Colors : </span>{specie.hair_colors}</li>
                    <li><span className='list-style'>Eye Colors : </span>{specie.eye_colors}</li>
                    <li><span className='list-style'>Designation : </span>{specie.designation}</li>
                    <li><span className='list-style'>Classification : </span>{specie.classification}</li>
                    <li><span className='list-style'>Average Lifespan : </span>{specie.average_lifespan}</li>
                    <li><span className='list-style'>Average Height : </span>{specie.average_height}</li>
                    <li><span className='list-style'>Skin Colors : </span>{specie.skin_colors}</li>
                    <li><span className='list-style'>People : </span>{specie.people[0]}</li>
                    <li><span className='list-style'>People : </span>{specie.people}</li>
                    <li><span className='list-style'>Films : </span>{specie.films[0]}</li>            
                </ul>

            </div>

        ))}
        </div>
    )
    }
}