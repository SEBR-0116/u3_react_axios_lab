import movie from '../images/movie.png'

const Films = (props) => {

console.log(props.films)
    if(!props.films){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            <img src={movie} className='movie'></img>
            {
                props.films.map((film) =>
                    <div className="card" key={film.title}>
                        <h4> Title: {film.title} </h4> 
                        <p> Release Date: {new Date (film.release_date).toDateString()} </p>
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Films