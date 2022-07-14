import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import {TbWebhook} from "react-icons/tb"

function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo">
        <TbWebhook />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Abhishek-Singh02" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-singh-9502as/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/_itz_me_abhishek/" target="_blank" rel="noreferrer">
          <SiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhishek Singh. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
