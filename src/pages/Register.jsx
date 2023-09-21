import React from 'react';
import Nav from '../components/Nav';
import '../styles/register.css';

function Register() {
  return (
    <div className='register_div'>
     <Nav />
     <div className="register_body">
      <div className="reg_body_img">
       <img src="../../imgs/3d-graphic-designer-showing-thumbs-up-png 1.png" alt="" />
      </div>
      <div className="register_form">
       <form action="" method="post">
        <h3 className='purple'>Register</h3>
        <p>Be part of this movement! 
         <span>
          <img src="../../imgs/emoji_girl.png" alt="" /> 
          <img src="../../imgs/emoji_girl.png" alt="" />
         </span>
        </p>

        <h2>create your account</h2>
        <div className="input_div">
         <div className="input_div_item">
          <label htmlFor="">Team's Name</label>
          <input type="text" placeholder='Enter the name of your group'/>
         </div>

         <div className="input_div_item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder='Enter your phone number'/>
         </div>
        </div>

        <div className="input_div">
         <div className="input_div_item">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter your email address'/>
         </div>

         <div className="input_div_item">
          <label htmlFor="">Project Topic</label>
          <input type="text" placeholder='What is your group project topic'/>
         </div>
        </div>

        <div className="input_div">
         <div className="input_div_item">
          <label htmlFor="">Category</label>
          <select name="" id="">
           <option value="one">one</option>
           <option value="two">two</option>
           <option value="two">three</option>
          </select>
         </div>

         <div className="input_div_item">
          <label htmlFor="">Group Size</label>
          <select name="" id="">
           <option value="one">one</option>
           <option value="two">two</option>
           <option value="two">three</option>
          </select>
         </div>
        </div>
        <small className="purple">
         Please review your registration details before submitting
        </small>
       <div className="reg_terms">
        <input type="checkbox" name="" id="" />I agreed with the event terms and conditions  and privacy policy
       </div>

       <button className="register_now">
        Register Now
       </button>
       </form>
      </div>
     </div>

    </div>
  )
}

export default Register