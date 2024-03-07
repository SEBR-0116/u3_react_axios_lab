const Species = (props) => {
  // console.log('whats props in Species', props)

  return (
    <div className="card">
      <h3>Species Name: {props.specie.name}</h3>
    </div>
  )
}

export default Species