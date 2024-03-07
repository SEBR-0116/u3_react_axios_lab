const Films = (props) => {

  console.log('whats props in Films', props)

  return (
    <div className="card">
      <h3>Films title: {props.film.title}</h3>
    </div>
  )
}

export default Films