import character from '../images/character.png'

const Characters = (props) => {
console.log(props)
    if(!props.characters){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            <img src={character} width="150px"></img>
            {
                props.characters.map((character) =>
                    <div className="card" key={character.name}>
                        <h4>{character.name}</h4>
                        <p>Birth Year: {character.birth_year}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Height: {character.height}cm</p>
                        <p>Skin Color: {character.skin_color}</p>
                        <p>Eye Color: {character.eye_color}</p>
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Characters