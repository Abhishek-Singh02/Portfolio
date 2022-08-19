import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgresQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
