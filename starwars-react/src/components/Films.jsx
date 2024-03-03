import './films.css'

export default function Films (props) {
  console.log(props)

  if (!props.films) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        {
          props.films.map((films, index) => (
            <div key={index}>
              <div className='film-info'>
                <div className='film-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{films.title}</div>
                </div>
                <div className='director'> Director: {films.director}</div>
                <div className='producer'> Producer: {films.director}</div>
                <div className='date'> Release Date: {films.director}</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}