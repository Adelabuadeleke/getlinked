import React, {useState} from 'react';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
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
 const [policy, setPolicy] = useState(false)

 const [catOptions, setCatOptions] = useState([]) 
  const openModal = () =>{
   const modal = document.querySelector(".modal-overlay");
   modal.classList.add("open-modal");
  }

 const sendRegistration = async (e)=>{
  e.preventDefault()
 
  const details ={
   team_name:name,
   phone_number:name,
   email: email,
   project_topic: topic,
   category: category,
   group_size: size,
   privacy_policy_accepted:policy
  }

  const result = await axios.post(requests.fetchRegister, details)
  .then(result=>{
   console.log(result)
   if(result.data){
    openModal()
   }
  })
  console.log('registration sucessful!')

}

const getOptions = async ()=>{
 const result = await axios.get(requests.fetchCategoriesList)
 setCatOptions(result.data)
}
getOptions()
  return (
    <div className='register_div'>
     <Modal 
     heading='Congratulations you have successfully Registered!'
     message='Yes, it was easy and you did it! check your mail box for next step'
     />
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
          name='team_name'
          type="text" 
          placeholder='Enter the name of your group'
          value={name}  
          onChange={e => setName(e.target.value)}
          />
         </div>

         <div className="input_div_item">
          <label htmlFor="">Phone</label>
          <input 
          name='phone_number'
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
          name='email'
          type="email" 
          placeholder='Enter your email address'
          value={email}  
          onChange={e => setEmail(e.target.value)}
          />
         </div>

         <div className="input_div_item">
          <label htmlFor="">Project Topic</label>
          <input 
          name='project_topic'
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
           name='category'
           value={category}  
           onChange={e => setCatergory(e.target.value)}
           className='category' 
           id="">
            <option value=""> select your category</option>
            {catOptions?.map(({id, name})=>(
             <option value={id}>{name}</option>
            ))
            }
          </select>
         </div>

         <div className="input_div_item">
          <label htmlFor="">Group Size</label>
          <select 
            value={size}  
           onChange={e => setSize(e.target.value)}
           className='group' 
           name="group_size" 
           id="">
           <option >select</option>
           <option value={3}>three</option>
           <option value={5}>five</option>
           <option value={10}>ten</option>
          </select>
         </div>
        </div>
        <small className="purple">
         Please review your registration details before submitting
        </small>
       <div className="reg_terms">
        <input 
        type="checkbox" 
        name="privacy_policy_accepted" 
        id="" 
        value={policy}  
        onChange={e => setPolicy(e.target.value)}
        />I agreed with the event terms and conditions  and privacy policy
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