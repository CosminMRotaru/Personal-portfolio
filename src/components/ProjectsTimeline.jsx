import React from "react";
import pitchcraftImg from "../assets/images/pitchcraft.png";
import foodImg from "../assets/images/food.png";
import claudeImg from "../assets/images/claude.png";
import devquizImg from "../assets/images/devquiz.png";
import hangdevImg from "../assets/images/hangdev.png";

const ProjectsTimeline = () => (
  <section className="projects-timeline" id="work">
    <h2 className="section-title">Projects</h2>
    <div className="timeline">

      {/* PITCHCRAFT */}
      <div className="timeline-item right">
        <div className="timeline-image">
          <img
            src={pitchcraftImg}
            alt="PitchCraft Screenshot"
            className="timeline-img"
          />
        </div>
        <div className="timeline-info">
          <h3 className="project-title">PitchCraft</h3>
          <p className="subtitle">When AI Is Your COO</p>
          <p className="timeline-desc">
            PitchCraft creates complete startup pitches with real AI in seconds. Enter your idea, pick a target, and export to PDF—all in a slick React interface.
          </p>
          <ul className="project-stack">
            <li>React (with Hooks)</li>
            <li>Tailwind CSS (utility-first styling)</li>
            <li>Anthropic Claude API (AI-powered pitch generation)</li>
            <li>jsPDF (PDF export)</li>
          </ul>
          <div className="project-links">
            <a href="https://pitchcraftrmc.netlify.app" target="_blank" rel="noopener">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/CosminMRotaru/PitchCraft" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* FOOD. */}
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

      {/* CHEF CLAUDE */}
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

      {/* DEVQUIZ */}
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
            DevQuiz is a dynamic quiz platform for aspiring frontend developers. Choose your difficulty, get instant feedback, and learn interactively. Features custom question logic, score tracking, and a playful UI. Built with React and custom hooks.
          </p>
          <ul className="project-stack">
            <li>React (interactive UI)</li>
            <li>Custom Hooks (question logic)</li>
            <li>Score Tracking</li>
            <li>Responsive Design</li>
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

      {/* HANGDEV */}
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
          <p className="subtitle">The Classic Game, Rebooted for Devs</p>
          <p className="timeline-desc">
            HangDev is a playful twist on Hangman, designed for developers. Guess dev-related words, track your wins, and enjoy the retro vibes. Built with React, custom game logic, and pixel-perfect design.
          </p>
          <ul className="project-stack">
            <li>React (game logic)</li>
            <li>Custom Hooks</li>
            <li>Persistent Score</li>
            <li>Pixel Art UI</li>
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
