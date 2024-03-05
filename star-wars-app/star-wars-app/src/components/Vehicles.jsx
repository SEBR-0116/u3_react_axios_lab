import { useNavigate } from "react-router-dom";
export default function Vehicles(props) {
  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }

    if (!props.vehicles) {
      return <h1>Loading vehicles, please wait</h1>;
    } else {
      return (
        <div className="grid">
          {props.vehicles.map((vehicle, index) => (
            <div className="card" key={index} onClick={()=> showItem(index)}>
              <h1>{vehicle.name}</h1>
            </div>
          ))}
        </div>
      );
    }
  }
