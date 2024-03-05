import { useNavigate } from "react-router-dom";
export default function Planets(props) {

  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }

    if (!props.planets) {
      return <h1>Loading planets, please wait</h1>;
    } else {
      return (
        <div className="grid">
          {props.planets.map((planet, index) => (
            <div className="card" key={index} onClick={()=> showItem(index)}>
              <h1>{planet.name}</h1>
            </div>
          ))}
        </div>
      );
    }
  }
