import React from "react";
import githubSvg from "../assets/images/github.svg";
import linkedinSvg from "../assets/images/linkedin.svg";

const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="section-title">Contact</h2>
    <div className="contact__note">
      My mail is{" "}
      <a href="mailto:cosminmariusrotaru@gmail.com">
        cosminmariusrotaru@gmail.com
      </a>
    </div>
    <a
      href="mailto:cosminmariusrotaru@gmail.com"
      className="btn contact__mail-btn"
    >
      Contact Me
    </a>
    <div className="contact__socials">
      <a
        href="https://github.com/CosminMRotaru"
        target="_blank"
        rel="noopener"
        title="GitHub"
      >
        <img src={githubSvg} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/marius-cosmin-rotaru-a8a242262/"
        target="_blank"
        rel="noopener"
        title="LinkedIn"
      >
        <img src={linkedinSvg} alt="LinkedIn" />
      </a>
    </div>
  </section>
);

export default Contact;