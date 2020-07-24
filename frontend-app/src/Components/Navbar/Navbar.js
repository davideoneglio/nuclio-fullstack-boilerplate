import React from 'react'
import './Navbar.css'
import trellologo from '../../img/trellologo.png';

const Navbar = props => {

const {path} = props

return (

    <header className="header-container-navbar">
      <nav>
        <div className="header-container-navbar">
          <div className="left-container-navbar">

            <button className="button-container-1-navbar"> <i className="icon-list-bullet"/> </button>
            <button className="button-container-1-navbar"> <i className="icon-home" href="/"/> </button>
              <button className="button-container-1-navbar"> <i className="icon-trello" /> Tableros </button>
          </div>

          <div>
              <input  className="input-container-navbar" type="search" id="fname-search" name="icon-search"/>
              <div className="search-container-navbar">
              <i className="icon-search-navbar"/>
              </div>
          </div>
           <a href="/">
              <div className="trello-img-logo-navbar">
                  <img src={trellologo} alt="trello-logo-navbar"/>
              </div>
           </a>

            <div className="right-container">
                <button className="button-container-1"> <i className="icon-plus"/> </button>
                <button className="button-container-bell" href="/"> <i className="icon-bell"/> </button>
                <button className="button-container-1"> Tableros </button>
            </div>

        </div>

      </nav>
    </header>

);
};
export default Navbar;





