import React from 'react';
import '../styles/nav.css'

function Nav() {
  return (
    <div className='nav'>
     <div className="nav_first">
      <h2>get<span className="purple">linked</span></h2>
     </div>
     <div className="nav_second">
      <ul>
       <li>Timeine</li>
       <li>Overview</li>
       <li>FAQs</li>
       <li>Contact</li>
      </ul>

      <button className="register">
       Register
      </button>
     </div>
    </div>
  )
}

export default Nav