import '../componentsStyles/planets.css'

export default function Planets (props) {
  console.log(props)

  if (!props.planets) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        <h4>* Hours are comparred to Earth hours</h4>
        <h4>** Days are comparred to Earth days</h4>
        {
          props.planets.map((planets, index) => (
            <div key={index}>
              <div className='planet-info'>
                <div className='planet-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{planets.name}</div>
                </div>
              </div>
              <div className='rotation'>Hours per day*: {planets.rotation_period}</div>
              <div className='days'>Days per Year**: {planets.orbital_period}</div>
              <div className='climate'>Climate: {planets.climate}</div>
              <div className='water'>Water surface: {planets.surface_water}</div>
              <div className='terrain'>Terrain: {planets.terrain}</div>
              <div className='population'>Population: {planets.population}</div>
              <div className='diameter'>Diameter: {planets.diameter}</div>
            </div>
          ))
        }
      </div>
    )
  }
}