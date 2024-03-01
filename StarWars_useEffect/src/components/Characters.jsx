const Characters = (props) => {
console.log(props)
    if(!props.characters){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            {
                props.characters.map((character) =>
                    <div className="card" key={character.name}>
                        {character.name} {character.birth_year} {character.gender} 
    
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Characters