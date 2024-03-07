const People = (props) => {

  // console.log('whats props in People', props)

  return (
    <div className="card">
      <h3>Person Name: {props.person.name}</h3>
    </div>
  )
}

export default People