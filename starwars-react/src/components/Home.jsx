import ReactPlayer from 'react-player'
import '../componentsStyles/home.css'

export default function Home () {

  return (
  <div className='home-container'>
    <h1 className='title'> Let the Force be with you </h1>
    <div className=''>
    <ReactPlayer url={'https://vimeo.com/414748279'} className='video-player' controls autoPlay muted/>
    </div>
  </div>
  )
}