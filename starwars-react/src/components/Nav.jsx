import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './nav.css';
import { IconContext } from 'react-icons';

export default function Nav () {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
  <div className='navbar'>
    <Link to='#' className='menu-bars'>
      <FaIcons.FaBars onClick={showSidebar}/>
    </Link>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
    <Link to='#' className='menu-bars'><AiIcons.AiOutlineClose /></Link>
    </li>
    <Link to='/' className='nav-text'> Home </Link>
    <Link to='/starships' className='nav-text'> Starships </Link>
    <Link to='/films' className='nav-text'> Films </Link>
    <Link to='/planets' className='nav-text'> Planets </Link>
    <Link to='/characters' className='nav-text'> Characters </Link>
    </ul>
    </nav>
  </div>
  )
}