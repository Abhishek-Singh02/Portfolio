import React from "react";
import "./About.css";
import ME from "../../assets/about-me.webp";
import { FaAward } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";

function About() {
  return (
    <section id="About">
      <h5>Get to Know </h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Qualification</h5>
              <small>{`B.Sc (CS)`}</small>
            </article>

            <article className="about__card">
              <CgWorkAlt className="about__icon" />
              <h5>Experience</h5>
              <small>1.4 Years</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects </h5>
              <small>3 </small>
            </article>
          </div>
          <p>
            Hi !<br /> I am Abhishek Singh, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself in love with web design / development. I enjoy creating beautifully designed, intuitive and functional websites.
          </p>
          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
