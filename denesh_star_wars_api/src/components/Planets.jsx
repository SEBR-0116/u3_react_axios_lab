import '../style/StarshipList.css'

export default function Plants({planets}){
    // console.log(planets)
    if(!planets){
        return <div> Page loading please wait</div>
    }else{
    return(
        <div className='main-container'>
        <h1 className='page-title'>List of Planets</h1>

        {planets.map((planet,index) => (
            <div className='list-container' key={index}>
                <ul className='data-list-ul'>
                    <li><span className='list-style'>Name : </span>{planet.name}</li>
                    <li><span className='list-style'>Rotation Period : </span>{planet.rotation_period}</li>
                    <li><span className='list-style'>Orbital Period : </span>{planet.orbital_period}</li>
                    <li><span className='list-style'>Diameter : </span>{planet.diameter}</li>
                    <li><span className='list-style'>Climate : </span>{planet.climate}</li>
                    <li><span className='list-style'>Gravity : </span>{planet.gravity}</li>
                    <li><span className='list-style'>Terrain : </span>{planet.terrain}</li>
                    <li><span className='list-style'>Surface Water : </span>{planet.surface_water}</li>
                    <li><span className='list-style'>Population : </span>{planet.population}</li>
                    <li><span className='list-style'>Residents : </span>{planet.residents[0]}</li>
                    <li><span className='list-style'>Films : </span>{planet.films[0]}</li>
                </ul>

            </div>

        ))}
        </div>
    )
    }
}