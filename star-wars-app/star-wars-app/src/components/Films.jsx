import { useNavigate } from "react-router-dom";
export default function Films(props) {
  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }

    if (!props.films) {
      return <h1>Loading Films, please wait</h1>;
    } else {
      return (
        <div className="grid">
          {props.films.map((film, index) => (
            <div className="card" key={index} onClick={()=> showItem(index)}>
              <h1>{film.title}</h1>
            </div>
          ))}
        </div>
      );
    }
  }
