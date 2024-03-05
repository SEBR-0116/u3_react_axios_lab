import { Link } from "react-router-dom"

const Nav = () =>{
    return (
<>

<div className="NavBar">
<Link className='links'  to= '/Home'>Home</Link>
<Link className='links' to = './StarshipsList'>StarShip List</Link>
<Link className='links' to = './Films'>Films</Link>
<Link className='links' to = './Planets'>Planets</Link>
<Link className='links' to='./Characters'>Charaters</Link>
</div>
</>

        ) 

}

export default Nav