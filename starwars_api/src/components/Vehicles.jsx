const Vehicles = (props) => {
  // console.log('whats props in Vehicles', props)
  
  return (
    <div className="card">
      <h3> Vehicles Name: {props.vehicle.name}</h3>
    </div>
  )
}

export default Vehicles