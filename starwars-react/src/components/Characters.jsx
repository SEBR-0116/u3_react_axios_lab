import './characters.css'

export default function Characters (props) {
  console.log(props)

  if (!props.characters) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        {
          props.characters.map((characters, index) => (
            <div key={index}>
              <div className='character-info'>  
                <div className='character-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{characters.name}</div>
                </div>
                <div className='height'> Height: {characters.height}</div>
                <div className='weight'> Weight: {characters.mass}</div>
                <div className='hair-color'> Hair Color: {characters.hair_color}</div>
                <div className='eye-color'> Eye Color: {characters.eye_color}</div>
                <div className='birth-year'> Birth Year: {characters.birth_year}</div>
                <div className='gender'> Gender: {characters.gender}</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}