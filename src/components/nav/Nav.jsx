import React from 'react'
import './Nav.css'
import rick from'../../assets/rick.png'


const Nav = () => {
  return (
    <header>
      <nav>
        <div className="logo-nav">
          <img src={rick} alt="rick and Morty" />

          <h1>
             <span className="punto-title">Rick</span>and<span className="punto-title">Morty</span>App.
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav
