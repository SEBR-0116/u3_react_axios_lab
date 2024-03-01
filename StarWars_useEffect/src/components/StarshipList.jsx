import StarshipItems from './StarshipItems'

const StarshipList = (props) => {
console.log(props)


if(!props.starships){
     return <h1>Loading please wait</h1>
} else {

    return (
    <>
    <div className="grid">
        {
            props.starships.map((starship)=>
                <div className="card" key={starship.name}>
                   <button onClick={()=> <Link to="/starship/starshipItems"/> }> {starship.name} </button>
                    {starship.passengers}
                </div>
            )
        }
    </div>
    </>
)}
}

export default StarshipList