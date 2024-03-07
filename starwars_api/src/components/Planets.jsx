const Planets = (props) => {

  // console.log('whats props in Planets', props)
  // console.log('in Planets', props)
  return (
    <div className="card">
      <h3>Planets Name: {props.planet.name}</h3>
    </div>
  )
}

export default Planets