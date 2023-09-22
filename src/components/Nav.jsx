import React, {useEffect} from 'react';
import '../styles/nav.css'

function Nav() {
   useEffect(()=>{
    const sidebar = document.querySelector('.sidebar')
    const menuBtn = document.querySelector('.menu')
    const closeBtn = document.querySelector('.sidebar_register_cancel')
    const body = document.querySelector('body')


    menuBtn.addEventListener('click', ()=>{
      sidebar.classList.add('show_toggle')
      body.classList.add('stop-scrolling')
    })

    closeBtn.addEventListener('click', ()=> {
      sidebar.classList.remove('show_toggle')
      body.classList.remove('stop-scrolling')
    })
  })
  return (
    <div className='nav_all'>
      <nav className="nav">
        <div className="nav_first">
          <h2>get<span className="purple">linked</span></h2>
        </div>

        <div className="mobile_toggle">
          <img className='menu' src="../../imgs/nav_toggle.svg" alt="" />
        </div>
        <div className="nav_second">
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>

          <button className="register">
            Register
          </button>
        </div>
      </nav>

      <aside className='sidebar'>
        <div className="sidebar_inner">
          <div className="sidebar_top">
            <button className="sidebar_register_cancel">
              X
            </button>
          </div>
          <ul>
          <a href=""><li>Timeine</li></a>
          <a href=""><li>Overview</li></a>
          <a href=""><li>FAQs</li></a>
          <a href=""><li>Contact</li></a>
          </ul>

          <button className="register">
            Register
          </button>
        </div>
      </aside>
     
    </div>
  )
}

export default Nav