import { useNavigate } from "react-router-dom";
export default function People(props) {
  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }

    if (!props.people) {
      return <h1>Loading people, please wait</h1>;
    } else {
      return (
        <div className="grid">
          {props.people.map((person, index) => (
            <div className="card" key={index} onClick={()=> showItem(index)}>
              <h1>{person.name}</h1>
            </div>
          ))}
        </div>
      );
    }
  }
