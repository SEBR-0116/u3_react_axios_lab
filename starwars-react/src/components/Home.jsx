import React, { useEffect, useRef } from "react"
import './home.css'

export default function Home () {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error)
      })
  }
  return (
  <div className='home-container'>
    <div className='video-player'>
    <ReactPlayer url={'https://www.youtube.com/watch?v=7jK-jZo6xjY'} autoPlay controls={true} />
    </div>
  </div>
  )
}