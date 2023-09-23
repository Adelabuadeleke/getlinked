import React from 'react';
import Nav from '../components/Nav';
import '../styles/register.css';
import axios from '../axios';
import requests from '../requests';


function Register() {
 const [name, setName] = useState('')
 const [phone, setPhone] = useState('')
 const [email, setEmail] = useState('')
 const [topic, setTopic] = useState('')
 const [category, setCatergory] = useState('')
 const [size, setSize] = useState('')

 const sendRegistration = async ()=>{
 
  const details ={
   name:name,
   phone:name,
   email: email,
   topic: topic,
   category: category,
   size: size
  }

  const result = await axios.post(requests.fetchRegister, details)
  .then(result=>{
   console.log(result)
  })
  console.log('registration sucessful!')
}
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
        <div className="input_div mobile_flex">
         <div className="input_div_item">
          <label htmlFor="">Team's Name</label>
          <input 
          type="text" 
          placeholder='Enter the name of your group'
          value={name}  
          onChange={e => setName(e.target.value)}
          />
         </div>

         <div className="input_div_item">
          <label htmlFor="">Phone</label>
          <input 
          type="text" 
          placeholder='Enter your phone number'
          value={phone}  
          onChange={e => setPhone(e.target.value)}
          />
         </div>
        </div>

        <div className="input_div mobile_flex">
         <div className="input_div_item">
          <label htmlFor="">Email</label>
          <input 
          type="email" 
          placeholder='Enter your email address'
          value={email}  
          onChange={e => setEmail(e.target.value)}
          />
         </div>

         <div className="input_div_item">
          <label htmlFor="">Project Topic</label>
          <input 
          type="text" 
          placeholder='What is your group project topic'
          value={topic}  
          onChange={e => setTopic(e.target.value)}
          />
         </div>
        </div>

        <div className="input_div_flex">
         <div className="input_div_item">
          <label htmlFor="">Category</label>
          <select 
           value={category}  
           onChange={e => setCatergory(e.target.value)}
           className='category' 
           name="" 
           id="">
           <option value=""> select your category</option>
           <option value="one">one</option>
           <option value="two">two</option>
           <option value="two">three</option>
          </select>
         </div>

         <div className="input_div_item">
          <label htmlFor="">Group Size</label>
          <select 
            value={size}  
           onChange={e => setSize(e.target.value)}
           className='group' 
           name="" 
           id="">
           <option >select</option>
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

       <button className="register_now" onClick={sendRegistration}>
        Register Now
       </button>
       </form>
      </div>
     </div>

    </div>
  )
}

export default Register