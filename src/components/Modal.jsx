import React from 'react'
import '../styles/modal.css'

function Modal({message, heading}) {
 const toggle = () =>{
  // const modalBtn = document.querySelector(".modal-btn");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-btn");

   // modalBtn.addEventListener("click", function () {
   //   modal.classList.add("open-modal");
   // });
   closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
   });
   window.location.reload()
 }
  return (
    <div className="modal-overlay">
      <div className="modal-container">
       <img src="../../imgs/congrats.png" alt="" />
        <h3>{heading}</h3>
        <p>
         {message}
        </p>
        <button onClick={toggle} className="close-btn">Back</button>
      </div>
    </div>
  )
}

export default Modal