import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/starships">Starships</a></li>
        <li><a href="/films">Films</a></li> {/* Add link to films */}
      </ul>
    </nav>
  );
}

export default Nav;
