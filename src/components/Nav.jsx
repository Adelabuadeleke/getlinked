import React, {useEffect} from 'react';
import '../styles/nav.css'
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


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
        <a className="nav_first" href='/'>
          <h2>get<span className="purple">linked</span></h2>
        </a>

        <div className="mobile_toggle">
          <img className='menu' src="../../imgs/nav_toggle.svg" alt="" />
        </div>
        <div className="nav_second">
          <ul>
            <NavHashLink smooth to='/#timeline'>Timeline</NavHashLink>
            <NavHashLink smooth to='/#overview'>Overview</NavHashLink>
            <NavHashLink smooth to='/#faq_'>FAQs</NavHashLink>
            <NavLink to='/contact'>Contact</NavLink>
          </ul>

          <a className="register" href='/register'>
            Register
          </a>
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
           <NavHashLink smooth to='/#timeline'>Timeline</NavHashLink>
          <NavHashLink smooth to='/#overview'>Overview</NavHashLink>
          <NavHashLink smooth to='/#faq_'>FAQs</NavHashLink>
          <NavLink to='/contact'>Contact</NavLink>
          </ul>

          <a className="register" href='/register'>
            Register
          </a>
        </div>
      </aside>
     
    </div>
  )
}

export default Nav