import React from "react";
import foodImg from "../assets/images/food.png";
import claudeImg from "../assets/images/claude.png";
import devquizImg from "../assets/images/devquiz.png";
import hangdevImg from "../assets/images/hangdev.png";

const ProjectsTimeline = () => (
  <section className="projects-timeline" id="work">
    <h2 className="section-title">Projects</h2>
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-image">
          <img
            src={foodImg}
            alt="Food App Screenshot"
            className="timeline-img"
          />
        </div>
        <div className="timeline-info">
          <h3 className="project-title">Food.</h3>
          <p className="subtitle">Food Delivery Experience, Reimagined</p>
          <p className="timeline-desc">
            Food. is a slick, fully responsive food ordering app. Browse themed restaurants, explore detailed menus, manage your cart, and place demo orders—all with a seamless UX and persistent cart. Built with React, custom hooks and Tailwind CSS, this project shows off real-world flows in a modern frontend.
          </p>
          <ul className="project-stack">
              <li>React Router (client-side routing)</li>
              <li>Tailwind CSS (utility-first styling)</li>
              <li>Custom Hooks (state logic)</li>
              <li>LocalStorage (cart persistence)</li>
          </ul>
          <div className="project-links">
            <a href="https://foodrmc.netlify.app" target="_blank" rel="noopener">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/CosminMRotaru/Food." target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-image">
          <img
            src={claudeImg}
            alt="Chef Claude Screenshot"
            className="timeline-img"
          />
        </div>
        <div className="timeline-info">
          <h3 className="project-title">Chef Claude</h3>
          <p className="subtitle">Let AI Cook For You</p>
          <p className="timeline-desc">
            Chef Claude lets you create AI-generated recipes from any ingredients you have. Powered by Anthropic Claude and a secure serverless backend, it offers instant ingredient suggestions, real AI creativity, and a minimalist, mobile-friendly UX.
          </p>
          <ul className="project-stack">
            <li>React (modern UI)</li>
            <li>Anthropic Claude API (AI recipes)</li>
            <li>Netlify Functions (serverless backend)</li>
            <li>Secure API integration</li>
          </ul>
          <div className="project-links">
            <a href="https://chefclaudermc.netlify.app" target="_blank" rel="noopener">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/CosminMRotaru/Chef-Claude" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-image">
          <img
            src={devquizImg}
            alt="DevQuiz Screenshot"
            className="timeline-img"
          />
        </div>
        <div className="timeline-info">
          <h3 className="project-title">DevQuiz</h3>
          <p className="subtitle">Become a Frontend Pro, One Quiz at a Time</p>
          <p className="timeline-desc">
            DevQuiz is a lightning-fast quiz app for web developers. Challenge yourself with timed questions on HTML, CSS, JS, and React. Enjoy instant feedback, score tracking,correct/wrong sounds on click, and a vibrant, accessible UI—built from scratch in React.
          </p>
          <ul className="project-stack">
            <li>React (functional components & hooks)</li>
            <li>Custom CSS (responsive, accessible)</li>
            <li>JavaScript (quiz logic)</li>
          </ul>
          <div className="project-links">
            <a href="https://devquizrmc.netlify.app" target="_blank" rel="noopener">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/CosminMRotaru/DevQuiz" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-image">
          <img
            src={hangdevImg}
            alt="HangDev Screenshot"
            className="timeline-img"
          />
        </div>
        <div className="timeline-info">
          <h3 className="project-title">HangDev</h3>
          <p className="subtitle">Guess the word, save the languages!</p>
          <p className="timeline-desc">
            HangDev is a fun, developer-themed Hangman game: save programming languages, unlock confetti, and enjoy a modern, accessible interface with dark/light mode and keyboard support—perfect for frontend devs who love a challenge!
          </p>
          <ul className="project-stack">
            <li>React (interactive UI)</li>
            <li>JavaScript (game logic)</li>
            <li>React Confetti (visual effects)</li>
            <li>clsx (dynamic classnames)</li>
          </ul>
          <div className="project-links">
            <a href="https://hangdevrmc.netlify.app" target="_blank" rel="noopener">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/CosminMRotaru/HangDev" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsTimeline;