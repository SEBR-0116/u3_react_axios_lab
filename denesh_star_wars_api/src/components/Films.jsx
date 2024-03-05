import "../style/StarshipList.css"

export default function Films({films}){
    // console.log(films)
    if(!films){
        return <div> Page loading please wait</div>
    }else{
    return(
        <div className='main-container'>
        <h1 className='page-title'>List of Films</h1>

        {films.map((film,index) => (
            <div className='list-container' key={index}>
                <ul className='data-list-ul'>
                    <li><span className='list-style'>Title : </span>{film.title}</li>
                    <li><span className='list-style'>Director : </span>{film.director}</li>
                    <li><span className='list-style'>Producer : </span>{film.producer}</li>
                    <li><span className='list-style'>Episode ID : </span>{film.episode_id}</li>
                    <li><span className='list-style'>Characters : </span>{film.characters[0]}</li>
                    <li><span className='list-style'>Planets : </span>{film.planets[0]}</li>
                    <li><span className='list-style'>Starships : </span>{film.starships[0]}</li>
                    <li><span className='list-style'>Vehicles : </span>{film.vehicles[0]}</li>
                    <li><span className='list-style'>Species : </span>{film.species[0]}</li>
                    <li><span className='list-style'>Release Date : </span>{film.release_date}</li>
                    <li><span className='list-style'>Opening Crawl : </span>{film.opening_crawl}</li>

                   
                </ul>

            </div>

        ))}
        </div>
    )
    }
}