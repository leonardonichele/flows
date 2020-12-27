import React from 'react';
import '../styles/pages/language.css';
import logo from '../images/blacklogo.png';

function Language() {
  return (
    <div id="page-landing">
      <img src={logo} alt="FlowsLabs"/>
      <br></br>
      <h2>Choose your language</h2>
      <h1>Escolha seu idioma</h1>
      <br></br>
      <a href="/eng">ENGLISH</a>
      <a href="/pt">PORTUGUÊS</a>
      <br></br>
      <br></br>
      <p>Leonardo da Silva Nichele - 2021 - v1.0</p>
    </div>
  );
}

export default Language;