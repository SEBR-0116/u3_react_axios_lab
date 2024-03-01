const Films = (props) => {

    if(!props.films){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            {
                props.films.map((film) =>
                    <div className="card" key={film.title}>
                        {film.title} {film.release_date}
    
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Films