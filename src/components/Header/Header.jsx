import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../asset/me3x.png";
import HeaderSocials from "./HeaderSocials";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_text_button">
          <h5>Hello I'm</h5>
          <h1>Muhammad Ateeq</h1>
          <h5 className="text-light">React Js / Mern Stack Developer</h5>
          <CTA />
        </div>
       
       
        <HeaderSocials />
        <div className="me">
          <img  src={ME} alt="me" />
        </div>

        <a href="contact" className="scrool_down">
          Scrool Down
        </a>
      </div>
    </header>
  );
};

export default Header;
