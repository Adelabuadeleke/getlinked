import React, {useState} from 'react';
import axios from '../axios';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import '../styles/contact.css'
import requests from '../requests';

function Contact() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('')

  const openModal = () =>{
   const modal = document.querySelector(".modal-overlay");
   modal.classList.add("open-modal");
  }

 const sendContact = async (e)=>{
  e.preventDefault()
  const details ={
   first_name:name,
   email: email,
   message:message
  }

  const result = await axios.post(requests.fetchContact, details)
  .then(result=>{
   console.log(result)
   if(result.data){
    openModal()
   }

  })
  console.log('message sent!')
}

  return (
   <div className='contact'>
     <Modal 
     heading='Your message has been received!'
     message='Thanks for reaching out to us...'
     />
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

       <input 
       type="text" 
       name="" 
       id="" 
       placeholder='First Name' 
       value={name}  
       onChange={e => setName(e.target.value)}
       />
       <input 
       type="email" 
       name="" 
       id="" 
       placeholder='Mail' 
       value={email}  
       onChange={e => setEmail(e.target.value)}
       />
       <textarea 
       name="" 
       id="" cols="30" 
       rows="10" 
       value={message}  
       onChange={e => setMessage(e.target.value)}
       placeholder='Message'></textarea>
       <div className="submit_div">
        <button className="submit" onClick={sendContact}>
         Submit
        </button>
       </div>

       <div className="share_mobile">
        <h6 className='purple'>Share on</h6>
        <div className="follow">
         <img src="../../imgs/mdi_instagram.svg" alt="" />
         <img src="../../imgs/Vector.svg" alt="" />
         <img src="../../imgs/Vector (1).svg" alt="" />
         <img src="../../imgs/ri_linkedin-fill.svg" alt="" />
        </div>
       </div>
       
      </form>
     </div>
    </div>
   </div>
  )
}

export default Contact