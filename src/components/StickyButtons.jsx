import React, { useRef, useEffect, useState } from "react";
import liverpoolPng from "../assets/images/liverpool.png";
import ynwaMp3 from "../assets/audio/ynwa.mp3";

const StickyButtons = ({ heroRef }) => {
  const audioRef = useRef(null);
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const handleLiverpoolClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href="#"
        className={`back-to-top${show ? " visible" : ""}`}
        id="backToTop"
        title="Back to Top"
        onClick={handleBackToTop}
        aria-label="Back to top"
      />
      <button
        className="liverpool-logo-sticky"
        id="liverpoolBtn"
        title="You'll Never Walk Alone"
        onClick={handleLiverpoolClick}
        aria-pressed={isPlaying}
      >
        <img src={liverpoolPng} alt="Liverpool" width="32" height="32" />
      </button>
      <audio id="ynwaAudio" ref={audioRef} preload="auto">
        <source src={ynwaMp3} type="audio/mp3" />
      </audio>
    </>
  );
};

export default StickyButtons;