import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/abhishek-singh-9502as/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Abhishek-Singh02" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/_itz_me_abhishek/" target="_blank" rel="noreferrer">
        <SiInstagram />{" "}
      </a>
    </div>
  );
}

export default HeaderSocials;
