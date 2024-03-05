import { useNavigate } from "react-router-dom";
export default function Species(props) {

  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }

    if (!props.species) {
      return <h1>Loading species, please wait</h1>;
    } else {
      return (
        <div className="grid">
          {props.species.map((specie, index) => (
            <div className="card" key={index} onClick={()=> showItem(index)}>
              <h1>{specie.name}</h1>
            </div>
          ))}
        </div>
      );
    }
  }
