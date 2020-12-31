import React from 'react';
import '../styles/pages/eng.css';
import logo from '../images/blacklogo.png';
import meImg from '../images/me.png';
import LinkedIn from '../images/linkedin.png';
import Behance from '../images/behance.png';
import Github from '../images/github.png';

function Eng() {
  return (
    <div id="page-eng">
      <div className="start">
        <img src={logo} alt="FlowsLabs"/>
          <br></br>
          <h1>Welcome! I’m Leonardo Nichele. <br></br>I design and build user interfaces.</h1>
          <br></br>
          <a href="mailto:leonardonichelework@outlook.com">Let's start</a>
          <br></br>
          <br></br>
          <br></br>
          <p>Learn more about what I do</p>
        <p>&darr;</p>
      </div>
      <div className="mid">
        <h1>Nice to meet you, a little bit about me and what I do...</h1>
      <div className="box">
        <section id="content">
          <div className="item">
          <img src={meImg} alt="Leonardo Nichele"/>
            <p>
            I’m a 17 years old front-end coder from Rio Grande do Sul - Brasil.
            <br></br>
            <br></br>
            Since from the beggining <br></br>I love all about technology.
            </p>
          </div>
          <div className="item">
            <h1>Developer</h1>
            <p>I like to code things from<br></br>scratch and bring to the life.</p>
            <br></br>
            <h3>Languages I speak</h3>
            <p>HTML, CSS and Javascript</p>
            <br></br>
            <h3>Dev Tools</h3>
            <p>ReactJS<br></br>Git / Github<br></br>Terminal</p>
          </div>
          <div className="item">
            <h1>Designer</h1>
            <p>I value simple content<br></br>structures, a clean design.</p>
            <br></br>
            <h3>Things that I like to design</h3>
            <p>Web, mobile, UI/UX</p>
            <br></br>
            <h3>Design Tools</h3>
            <p>Figma<br></br>Balsamiq Mockups<br></br>Adobe XD</p>
          </div>
        </section>
      </div>
      </div>
      <div className="end">
        <section id="content-end">
          <div className="endframe">
            <div className="btn-contact">
              <h1>Contact Me</h1>
              <br></br>
              <a href="mailto:leonardonichelework@outlook.com">Let's start</a>
            </div>
          </div>
          <div className="endframe">
            <h1>Social Networks</h1>
            <br></br>
            <a href="https://www.linkedin.com/in/leonardonichele/"><img src={LinkedIn} alt="linkedin"></img></a>
            <a href="https://www.behance.net/leonardonichele/"><img src={Behance} alt="behance"></img></a>
            <a href="https://www.github.com/leonardonichele/"><img src={Github} alt="github"></img></a>
          </div>
        </section>
        <br></br>
      </div>
      <div className="markdown">
        <h1>Leonardo da Silva Nichele - FlowsLabs © 2021</h1>
      </div>
    </div>
  );
}

export default Eng;