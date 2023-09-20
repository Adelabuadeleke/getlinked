import React from 'react';
import '../styles/home.css'

// components
import Nav from '../components/Nav';

function Home() {
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
     <section className="faq">

     </section>
    
    </div>
  )
}

export default Home