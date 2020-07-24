import React from 'react'
import './Navbar.css'
import trellologo from '../../img/trellologo.png';

const Navbar = props => {

const {path} = props

return (

    <header className="header-container">
      <nav>
        <div className="header-container">
          <div className="left-container">

            <button className="button-container-1"> <i className="icon-list-bullet"/> </button>
            <button className="button-container-1"> <i className="icon-home" href="/"/> </button>
              <button className="button-container-1"> <i className="icon-trello" /> Tableros </button>
          </div>

          <div>
              <input  className="input-container" type="search" id="fname-search" name="icon-search"/>
              <div className="search-container">
              <i className="icon-search"/>
              </div>
          </div>
           <a href="/">
              <div className="trello-img-logo">
                  <img src={trellologo} alt="trello-logo"/>
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





