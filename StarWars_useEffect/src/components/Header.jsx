import Nav from './Nav'
import planet_icon from '../images/planet_icon.png'

const Header = () => {
    return ( 
    <>
      <div className='header'>
        <img src = {planet_icon} className='planet_icon' width="100px;"></img>
        <h3 className='welcome'> Welcome to Planet DYB19-92 </h3>
      </div>
      <div className='navbar'>
        <Nav/>
      </div>
    </>
    )
}


export default Header