import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>WeatherLens</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Abhishek-Singh02/weather-lens" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://try-weather-lens.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>DSA Visualizer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mr-Hypocrite/DSA_Visualizer" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://dsa-visualiser.herokuapp.com" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Expense Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Abhishek-Singh02/expense-tracker" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://try-expense-tracker.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
