

const Characters = (props) => {
    console.log(props.characters)

    if (!props.characters) {
        return <h3>Loading puhleeze wait</h3>
    } else {

        return (
            <div className="film-list">
                {
                    props.characters.map((character) => (
                        <div className="character" key={character.name}>
                            <h3>{character.name}</h3>
                            <h3>{character.birth_year}</h3>
                            <h3>{character.gender}</h3>
                            <button>View Characters</button>
                        </div>
                    ))
                }
            </div>
    )
}

}

export default Characters