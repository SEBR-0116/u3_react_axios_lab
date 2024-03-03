

const Films = (props) => {
    console.log(props.films)

    if (!props.films) {
        return <h3>Loading puhleeze wait</h3>
    } else {

        return (
            <div className="film-list">
                {
                    props.films.map((film) => (
                        <div className="film" key={film.title}>
                            <h3>{film.title}</h3>
                            <h3>{film.release_date}</h3>
                            <button>View Films</button>
                        </div>
                    ))
                }
            </div>
    )
}

}

export default Films