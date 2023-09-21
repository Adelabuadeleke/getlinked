import React from 'react';
import Nav from '../components/Nav';
import '../styles/contact.css'

function Contact() {
  return (
   <div className='contact'>
    <Nav />
    <div className="contact_body">
     <div className="contact_body_text">
      <div className="text_inner">
       <h2>Get in touch</h2>
       <p>
        Contact <br />
        Information
       </p>
       <p>
        27,Alara Street <br />
        Yaba 100012 <br />
        Lagos State
       </p>
       <p> Call Us : 07067981819</p>
       <p>
        we are open from Monday-Friday <br />
        08:00am - 05:00pm
       </p>
       <h6>Share on</h6>
       <div className="follow">
        <img src="../../imgs/mdi_instagram.svg" alt="" />
        <img src="../../imgs/Vector.svg" alt="" />
        <img src="../../imgs/Vector (1).svg" alt="" />
        <img src="../../imgs/ri_linkedin-fill.svg" alt="" />
       </div>
      </div>
     </div>

     <div className="contact_body_form">
      <form action="" method="post">
       <h3>Questions or need assistance?</h3>
       <h3>Let us know  about it!</h3>

       <input type="text" name="" id="" placeholder='First Name' />
       <input type="email" name="" id="" placeholder='Mail' />
       <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
       <button className="submit">
        Submit
       </button>
      </form>
     </div>
    </div>
   </div>
  )
}

export default Contact