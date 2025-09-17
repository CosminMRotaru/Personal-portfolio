import React, { useState, useEffect } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import githubSvg from "../assets/images/github.svg";
import linkedinSvg from "../assets/images/linkedin.svg";

const slides = [slide1, slide2, slide3];

const Hero = ({ heroRef }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero" id="hero" ref={heroRef}>
      <div className="hero__bg">
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`hero__bg-img${i === current ? " active" : ""}`}
            alt=""
          />
        ))}
      </div>
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__hello">Hello!</h1>
        <h2 className="hero__title">
          <span className="im-white">I'm</span>
          <span className="name-gradient">Cosmin Rotaru</span>
        </h2>
        <div className="hero__subtitle">
          Full-Stack Developer focused on React, Node.js &amp; modern web apps
        </div>
      </div>
    </header>
  );
};

export default Hero;
