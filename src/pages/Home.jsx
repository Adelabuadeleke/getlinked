import React, { useEffect } from 'react';
import '../styles/home.css'

// components
import Nav from '../components/Nav';

function Home() {
 useEffect(()=>{
  const faqToggle = () => {
   const faqs = document.querySelectorAll('.faq');
   console.log(faqs)
   const faqsReply = document.querySelector('.faq_reply');

   faqs.forEach(function (faq) {
    const btn = faq.querySelector('.question_btn');
    // console.log(btn)
    btn.addEventListener('click', function(){
      // console.log('click')
      faqs.forEach(function(button) {
       console.log(button)
        if(button !== faq){
         console.log('not-equal')
          button.classList.remove('show')
          // faqsReply.classList.toggle('hide')
        }
      })
      console.log('equal')
      // faqsReply.classList.remove('hide')
      faq.classList.add('show')
    })
   });
  }
  faqToggle()
 })

  return (
    <div className='home'>
     <header>
      <Nav />
      <div className="header_ignition">
       <p>Igniting a Revolution in HR Innovation</p>
      </div>

      <main className='getlinked_main'>
       <article className='getlinked_tech_contents'>

        <h2>getlinked Tech</h2>
        <h2>
         Hackathon <span className="purple">1.0</span> 
        <img src="../../imgs/chain-9365116-7621444.png" alt="" />
        <img src="../../imgs/1f4a5.png" alt="" />
        </h2>
        <p>
         Participate in getlinked tech Hackathon 2023 stand 
         a chance to win a Big prize
        </p>
        <button className="register">
         Register
        </button>
        <div className='count_down'>
         <p><span className="hr">00</span>h</p>
         <p><span className="min">00</span>m</p>
         <p><span className="sec">00</span>s</p>
        </div>

       </article>
       <div className="getlinked_tech_imgs">
        <img className='vr' src="../../imgs/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="getlinked vr illustration" />
        <img className='chain' src="../../imgs/Image 1.png" alt="get linked illustration" />
       </div>
      </main>

     </header>

     <section className="introduction">
      <img src="../../imgs/the big idea 1.png" alt="" />
      <article>
       <h3>Introduction to getlinked <br />
       <span className="purple">tech Hackathon 1.0</span></h3>
       <p>
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!
       </p>
      </article>
     </section>

     <section className="rules">
      <article>
       <h3>Rules and <br /><span className='purple'>Guidelines</span></h3>
       <p>
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!
       </p>
      </article>
      <img src="../../imgs/7450159 1.png" alt="" />
     </section>

     <section className="criteria">
      <img src="../../imgs/8046554 1.png" alt="" />
      <article>
       <h3>Judging Criteria <br />
       <span className="purple">Key attributes</span></h3>

       <article className="criteria_item">
        <p><span className="item_title purple">Innovation and Creativity: </span> <span className="item_text">
        Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple">Functionality:</span> <span className="item_text">
         Assess how well the solution works. Does it perform its 
         intended functions effectively and without major issues? Judges would
         consider the completeness and robustness of the solution.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple">Impact and Relevance: </span> <span className="item_text">
        Determine the potential impact of the solution   
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.
                </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple">Technical Complexity: </span> <span className="item_text">
         Evaluate the technical sophistication of the solution. 
         Judges would consider the complexity of the code, the use of advanced 
         technologies or algorithms, and the scalability of the solution.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple">Adherence to Hackathon Rules: </span> <span className="item_text">
        Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.
        </span></p>
       </article>

       <button className="read_more">
        Read more
       </button>
      </article>
     </section>

     <section className="faq_section">
      <article className="faq_questions">
       <div className="faq_title">
        <h3>Frequently Ask<br />
       <span className="purple">Question</span></h3>

       <p>
        We got answers to the questions that you might
        want to ask about getlinked Hackathon 1.0
       </p>
       </div>
       <div className="all_faq">
        {/* single faq */}
        <div className="faq show" >
         <div className="faq_question">
          <div className="faq_que">
           <p>Can I work on a project I started before the hackathon?</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}

        {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p>What happens if I need help during the hackathon?</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p>What happens if I don't have an idea for a project?</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p>Can I join a team or do I have to come with one?</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p>What happens after the hackathon ends</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p>Can I work on a project I started before the hackathon?</p>
          </div>
          <button className="question_btn">
           <span className="plus-icon purple">
            +
           </span>
           <span className="minus-icon purple">
           +
           </span>
          </button>
         </div>
         <div className="faq_reply">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}
       </div> 

      </article>

      <img src="../../imgs/cwok_casual_21 1.png" alt="" />
     </section>

     <section className="timeline">
      <div className="timeline_title">
       <h3>Timeline</h3>
       <p>Here is the breakdown of the time we anticipate 
        using for the upcoming event.</p>
      </div>
     </section>

     <section className="prizes">
      <img src="../../imgs/9486889 1.png" alt="" />
      <div className="prize_list">
        <div className="prize_list_heading">
          <h3>Prices and <br /> <span className="purple">Rewards</span></h3>
          <p>Highlight of the prizes or rewards for winners <br />and participants</p>
        </div>
        <div className="prize_list_content">

          <div className="side_prize">
            <img src="../../imgs/silver_medal 1.png" alt="" />
            <div className="side_prize_text">
              <h4>2nd</h4>
              <p>Runner</p>
              <h1 className='purple'>N300,000</h1>
            </div>
           
          </div>

          <div className="side_prize first">
            <img src="../../imgs/gold_medal 1.png" alt="" />
            <div className="side_prize_text first">
              <h4>1st</h4>
              <p>Runner</p>
              <h1 className='purple'>N400,000</h1>
            </div>
           
          </div>

          <div className="side_prize">
            <img src="../../imgs/bronze_medal 1.png" alt="" />
            <div className="side_prize_text">
              <h4>3rd</h4>
              <p>Runner</p>
              <h1 className='purple'>N150,000</h1>
            </div>
           
          </div>
        </div>
      </div>
     </section>

     <section className="partners">
      <div className="partners_heading">
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major 
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partners_content">
        <div className="partners_content_inner">
          <div className="partners_content_inner_item">
            <img src="../../imgs/Liberty company logo white colour.png" alt="" />
            
          </div>

          <div className="partners_content_inner_item">
            <img src="public\imgs\Liberty company logo white.png" alt="" />
          </div>

          <div className="partners_content_inner_item">
            <img src="../../imgs/Winwise logo White colour 1.png" alt="" />
          </div>

          <div className="partners_content_inner_item">
            <img src="../../imgs/wisper logo white.png" alt="" />
          </div>

          <div className="partners_content_inner_item">
            <img src="../../imgs/Paybox.png" alt="" />
          </div>

          <div className="partners_content_inner_item">
            <img src="../../imgs/Vizual Plus.png" alt="" />
          </div>
        </div>
      </div>
     </section>

     <section className="privacy">
      <article className="privacy">
        <div className="privacy_heading">
          <h3>Privacy Policy and <br /> <span className="purple">Terms</span></h3>
          <small>Last updated on September 12, 2023</small>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. 
            it’s our aim to always take of our participant
          </p>
        </div>

        <article className="policy">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you participate in our tech 
            hackathon event. By participating in our event, you consent 
            to the practices described in this policy.
          </p>

          <article className="license">
            <h4 className='purple'>Licensing Policy</h4>
            <h5>Here are terms of our Standard License:</h5>

            <ul>
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites, for your project development
              </li>
            </ul>

            <div className="license_btn">
              <button className="read_more">Read more</button>
            </div>
          </article>
        </article>
      </article>

      <div className="policy_img">
        <img src="../../imgs/08 1.png" alt="" />
      </div>
      
     </section>
     
     <footer>
      <div className="footer_content">
        <article className="getlinked_about">
          <h4>get<span className="purple">linked</span></h4>

          <p>
            Getlinked Tech Hackathon is a technology innovation program 
            established by a group of organizations with the aim of showcasing 
            young and talented individuals in the field of technology
          </p>

          <p className='terms'>Terms of Use  <span className="purple">|</span> Privacy Policy</p>
        </article>
        <article className="getlinked_items">
         <div className="getlinked_items_links">
          <h5 className="purple">Useful Links</h5>
          <a href="">Overview</a>
          <a href="">Timeline</a>
          <a href="">FAQs</a>
          <a href="">Register</a>
          <div className="follow">
            <h6 className='purple'>Follow us</h6>
            <img src="../../imgs/mdi_instagram.svg" alt="" />
            <img src="../../imgs/Vector.svg" alt="" />
            <img src="../../imgs/Vector (1).svg" alt="" />
            <img src="../../imgs/ri_linkedin-fill.svg" alt="" />
          </div>
         </div>

         <div className="getlinked_contact">
          <h5 className="purple">Contact Us</h5>
          <p><img src="" alt="" /> +234 679 81819</p>
          <p>
            <img src="" alt="" /> 
            27,Alara Street
            Yaba 100012
            Lagos State
          </p>
         </div>
        </article>
      </div>
      <div className="footer_rights">
        <p>All rights reserved. &copy; getlinked Ltd.</p>
      </div>
     </footer>
    
    </div>
  )
}

export default Home