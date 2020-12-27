import React from 'react';
import '../styles/pages/pt.css';
import logo from '../images/blacklogo.png';
import meImg from '../images/me.png';
import LinkedIn from '../images/linkedin.png';
import Behance from '../images/behance.png';
import Github from '../images/github.png';

function Pt() {
    return (
      <div id="page-eng">
        <div className="start">
          <img src={logo} alt="FlowsLabs"/>
            <br></br>
            <h1>Bem-vindo! Meu nome é Leonardo Nichele.<br></br>Desenvolvimento de design e soluções.</h1>
            <br></br>
            <a href="mailto:leonardonichelework@outlook.com">Let's start</a>
            <br></br>
            <br></br>
            <br></br>
            <p>Saiba mais sobre mim</p>
          <p>&darr;</p>
        </div>
        <div className="mid">
          <h1>Prazer em conhecer, aqui está um pouco sobre mim...</h1>
        <div className="box">
          <section id="content">
            <div className="item">
            <img src={meImg} alt="Leonardo Nichele"/>
              <p>
              Desenvolvedor de 17 anos com moradia no Rio Grande do Sul.
              <br></br>
              <br></br>
              Desde sempre gostei de coisas <br></br>relacionadas a tecnologia.
              </p>
            </div>
            <div className="item">
              <h1>Desenvolvedor</h1>
              <p>Codificação baseada a partir<br></br>do rascunho até sua criação.</p>
              <br></br>
              <h3>Linguagens</h3>
              <p>HTML, CSS e Javascript</p>
              <br></br>
              <h3>Ferramentas</h3>
              <p>ReactJS<br></br>Git / Github<br></br>Terminal</p>
            </div>
            <div className="item">
              <h1>Designer</h1>
              <p>Valorizo conteúdo de arquitetura<br></br>simples, tendo um design limpo.</p>
              <br></br>
              <h3>Tipos de Design</h3>
              <p>Web, mobile, UI/UX</p>
              <br></br>
              <h3>Ferramentas</h3>
              <p>Figma<br></br>Balsamiq Mockups<br></br>Adobe XD</p>
            </div>
          </section>
        </div>
      </div>
      <div className="end">
        <section id="content-end">
          <div className="endframe">
            <div className="btn-contact">
              <h1>Contate-me</h1>
              <br></br>
              <a href="mailto:leonardonichelework@outlook.com">Let's start</a>
            </div>
          </div>
          <div className="endframe">
            <h1>Redes Sociais</h1>
            <br></br>
            <a href="https://www.linkedin.com/in/leonardonichele/"><img src={LinkedIn} alt="linkedin"></img></a>
            <a href="https://www.behance.com/leonardonichele/"><img src={Behance} alt="behance"></img></a>
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

export default Pt;