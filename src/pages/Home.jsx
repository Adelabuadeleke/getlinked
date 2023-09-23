import React, { useEffect, useState } from 'react';
import '../styles/home.css'
import Aos from 'aos';
import {split} from '../animations/text'
import scroll from "../animations/scroll";

// components
import Nav from '../components/Nav';

function Home() {
  useEffect(()=>{
    // scroll()
    // split()
    // Aos.init();
  })
 


  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

 useEffect(()=>{
  const faqToggle = () => {
   const faqs = document.querySelectorAll('.faq');
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

  
  const timmerFunc = () =>{
  const today = new Date().getTime();
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  const futureTime = futureDate.getTime();
  
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;


  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  setHours(hours)
  setMinutes(minutes) ;
  setSeconds(seconds) 
  }
 
  setInterval(timmerFunc, 1000);
  timmerFunc()
  faqToggle()

 })

  return (
    <div className='home'>
     <header>
      <Nav />
      <div className="header_ignition">
        <div className="ignition_inner">
          <p data-animation='text-animation_'>Igniting a Revolution in 
            HR Innovation
          </p>
          <img src="../../imgs/stroke.svg" alt="" />
        </div>
       

      </div>

      <main className='getlinked_main'>
       <article className='getlinked_tech_contents'>

        <h2 data-animation='text-animation_'>getlinked Tech</h2>
        <h2 data-animation='text-animation'>
         Hackathon <span className="purple">1.0</span> 
        <img src="../../imgs/chain-9365116-7621444.png" alt="" />
        <img src="../../imgs/1f4a5.png" alt="" />
        </h2>
        <p data-animation='text-animation'>
         Participate in getlinked tech Hackathon 2023 stand 
         a chance to win a Big prize
        </p>
        <a className="register" href='/register'>
         Register
        </a>
        <div className='count_down'>
         <p><span className="hr">{hours}</span>h</p>
         <p><span className="min">{minutes}</span>m</p>
         <p><span className="sec">{seconds}</span>s</p>
        </div>

       </article>
       <div className="getlinked_tech_imgs">
        <img className='vr' src="../../imgs/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="getlinked vr illustration" />
        <img className='chain' src="../../imgs/Image 1.png" alt="get linked illustration" />
       </div>
      </main>

     </header>

     <section className="introduction" id='overview'>
      <img src="../../imgs/the big idea 1.png" alt="" />
      <article>
       <h3 data-animation='text-animation'>Introduction to getlinked <br />
       <span className="purple" data-animation='text-animation'>tech Hackathon 1.0</span></h3>
       <p data-animation='text-animation'>
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
       <p data-animation='text-animation'>
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
       <h3 data-animation='text-animation'>Judging Criteria <br />
       <span className="purple" data-animation='text-animation'>Key attributes</span></h3>

       <article className="criteria_item">
        <p><span className="item_title purple" data-animation='text-animation'>Innovation and Creativity: </span> <span className="item_text" data-animation='text-animation'>
        Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple" data-animation='text-animation'>Functionality:</span> <span className="item_text" data-animation='text-animation'>
         Assess how well the solution works. Does it perform its 
         intended functions effectively and without major issues? Judges would
         consider the completeness and robustness of the solution.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple" data-animation='text-animation'>Impact and Relevance: </span> <span className="item_text" data-animation='text-animation'>
        Determine the potential impact of the solution   
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.
                </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple" data-animation='text-animation'>Technical Complexity: </span> <span className="item_text" data-animation='text-animation'>
         Evaluate the technical sophistication of the solution. 
         Judges would consider the complexity of the code, the use of advanced 
         technologies or algorithms, and the scalability of the solution.
        </span></p>
       </article>

       <article className="criteria_item">
        <p><span className="item_title purple" data-animation='text-animation'>Adherence to Hackathon Rules: </span> <span className="item_text" data-animation='text-animation'>
        Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.
        </span></p>
       </article>
      <div className="read_more_div">
        <button className="read_more">
          Read more
        </button>
      </div>
      
      </article>
     </section>

     <section className="faq_section" id='faq_'>
      <article className="faq_questions">
       <div className="faq_title">
        <h3>Frequently Ask<br />
       <span className="purple">Question</span></h3>

       <p data-animation='text-animation'>
        We got answers to the questions that you might
        want to ask about getlinked Hackathon 1.0
       </p>
       </div>
       <div className="all_faq">
        {/* single faq */}
        <div className="faq show" >
         <div className="faq_question">
          <div className="faq_que" >
           <p data-animation='text-animation'>Can I work on a project I started before the hackathon?</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}

        {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p data-animation='text-animation'>What happens if I need help during the hackathon?</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p data-animation='text-animation'>What happens if I don't have an idea for a project?</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p data-animation='text-animation'>Can I join a team or do I have to come with one?</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p data-animation='text-animation'>What happens after the hackathon ends</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}


          {/* single faq */}
        <div className="faq" >
         <div className="faq_question">
          <div className="faq_que">
           <p data-animation='text-animation'>Can I work on a project I started before the hackathon?</p>
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
          <p data-animation='text-animation'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?
          </p>
         </div>
        </div>
        {/* end of single faq */}
       </div> 

      </article>

      <img src="../../imgs/faq_group.png" alt="" />
     </section>

     <section className="timeline" id='timeline'>
      <div className="timeline_title">
       <h3 data-animation='text-animation'>Timeline</h3>
       <p data-animation='text-animation'>Here is the breakdown of the time we anticipate 
        using for the upcoming event.</p>
      </div>
      <div className="timeline_body">
        <div className="timeline_body_content">
          <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                1
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
          </div>

          {/*  */}

           <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                2
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>Teams Registration begins</h5>
              <p data-animation='text-animation'>
                Interested teams can now show their interest in the
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
              
            </div>
          </div>

          {/*  */}

           <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                3
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
          </div>
          {/*  */}

           <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                4
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
          </div>

          {/*  */}

           <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                5
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
          </div>

           <div className="timeline_body_content_item">
            <div className="content_item_first">
              <h5 data-animation='text-animation'>November 18, 2023</h5>
            </div>
            <div className="content_item_middle">
              <div className="timeline_line">

              </div>
              <div className="timeline_circle">
                6
              </div>
            </div>
            <div className="content_item_mobile">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
              <h5>November 18, 2023</h5>
            </div>
            <div className="content_item_second">
              <h5 data-animation='text-animation'>Hackathon Announcement</h5>
              <p data-animation='text-animation'>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </div>
          </div>

          {/*  */}

        </div>
      </div>
     </section>

     <section className="prizes">
      <img src="../../imgs/9486889 1.png" alt="" />
      <div className="prize_list">
        <div className="prize_list_heading">
          <h3>Prices and <br /> <span className="purple">Rewards</span></h3>
          <p data-animation='text-animation'>Highlight of the prizes or rewards for winners <br />and participants</p>
        </div>
        <div className="prize_list_content">

          <div className="side_prize">
            <img src="../../imgs/silver_medal 1.png" alt="" />
            <div className="side_prize_text">
              <h4 data-animation='text-animation'>2nd</h4>
              <p data-animation='text-animation'>Runner</p>
              <h1 className='purple' data-animation='text-animation'>N300,000</h1>
            </div>
           
          </div>

          <div className="side_prize first">
            <img src="../../imgs/gold_medal 1.png" alt="" />
            <div className="side_prize_text first">
              <h4 data-animation='text-animation'>1st</h4>
              <p> data-animation='text-animation'Runner</p>
              <h1 className='purple' data-animation='text-animation'>N400,000</h1>
            </div>
           
          </div>

          <div className="side_prize">
            <img src="../../imgs/bronze_medal 1.png" alt="" />
            <div className="side_prize_text">
              <h4 data-animation='text-animation'>3rd</h4>
              <p data-animation='text-animation'>Runner</p>
              <h1 className='purple' data-animation='text-animation'>N150,000</h1>
            </div>
           
          </div>
        </div>
      </div>
     </section>

     <section className="partners">
      <div className="partners_heading">
        <h3 data-animation='text-animation'>Partners and Sponsors</h3>
        <p data-animation='text-animation'>
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
          <h3 data-animation='text-animation'>Privacy Policy and <br /> <span className="purple">Terms</span></h3>
          <small data-animation='text-animation'>Last updated on September 12, 2023</small>
          <p data-animation='text-animation'>
            Below are our privacy & policy, which outline a lot of goodies. 
            it’s our aim to always take of our participant
          </p>
        </div>

        <article className="policy">
          <p data-animation='text-animation'>
            At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you participate in our tech 
            hackathon event. By participating in our event, you consent 
            to the practices described in this policy.
          </p>

          <article className="license">
            <h4 className='purple' data-animation='text-animation'>Licensing Policy</h4>
            <h5 data-animation='text-animation'>Here are terms of our Standard License:</h5>

            <ul>
              <li data-animation='text-animation'>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li data-animation='text-animation'>
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
        <img src="../../imgs/policy_group.png" alt="" />
      </div>
      
     </section>
     
     <footer>
      <div className="footer_content">
        <article className="getlinked_about">
          <h4>get<span className="purple">linked</span></h4>

          <p data-animation='text-animation'>
            Getlinked Tech Hackathon is a technology innovation program 
            established by a group of organizations with the aim of showcasing 
            young and talented individuals in the field of technology
          </p>

          <p className='terms'>Terms of Use  <span className="purple">|</span> Privacy Policy</p>
        </article>
        <article className="getlinked_items">
         <div className="getlinked_items_links">
          <h5 className="purple" data-animation='text-animation'>Useful Links</h5>
          <a href="" data-animation='text-animation'>Overview</a>
          <a href="" data-animation='text-animation'>Timeline</a>
          <a href="" data-animation='text-animation'>FAQs</a>
          <a href="" data-animation='text-animation'>Register</a>
          <div className="follow">
            <h6 className='purple' data-animation='text-animation'>Follow us</h6>
            <img src="../../imgs/mdi_instagram.svg" alt="" />
            <img src="../../imgs/Vector.svg" alt="" />
            <img src="../../imgs/Vector (1).svg" alt="" />
            <img src="../../imgs/ri_linkedin-fill.svg" alt="" />
          </div>
         </div>

         <div className="getlinked_contact">
          <h5 className="purple" data-animation='text-animation'>Contact Us</h5>
          <p><img src="" alt="" data-animation='text-animation' /> +234 679 81819</p>
          <p>
            <img src="" alt="" /> 
            <p data-animation='text-animation'>
              27,Alara Street
              Yaba 100012
              Lagos State
            </p>
          </p>
         </div>
        </article>
      </div>
      <div className="footer_rights">
        <p data-animation='text-animation'>All rights reserved. &copy; getlinked Ltd.</p>
      </div>
     </footer>
    
    </div>
  )
}

export default Home