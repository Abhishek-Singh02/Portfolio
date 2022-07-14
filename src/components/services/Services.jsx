import React from "react";
import "./Services.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function Services() {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Social Media Graphics</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Product Package Designing</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Brand Designing</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Video Editing</p>
            </li>
          </ul>
        </article>

        {/* END OF GRAPHICS DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Web Hosting</p>
            </li>
            <li>
              <IoCheckmarkDoneOutline className="service__list-icon" />
              <p>Database Management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
