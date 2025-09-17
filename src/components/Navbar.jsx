import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ heroRef }) => {
  const badgeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      setShow(heroRect.bottom <= 0); 
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  return (
    <nav className="sticky-nav">
      <div className="row">
        <div className="nav__brand-badge">
          <span className="nav__logo">Cosmin Rotaru – Full-Stack Developer</span>
          <a
            className={`badge-content${show ? " show" : ""}`}
            id="nav-badge"
            href="https://www.linkedin.com/in/marius-cosmin-rotaru-a8a242262/"
            target="_blank"
            rel="noopener"
            ref={badgeRef}
          >
            Available for hire
          </a>
        </div>
        <ul className="nav__items">
          <li><a className="nav__link" href="#work">Projects</a></li>
          <li><a className="nav__link" href="#about">About</a></li>
          <li><a className="nav__link" href="#skills">Skills</a></li>
          <li><a className="nav__link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
