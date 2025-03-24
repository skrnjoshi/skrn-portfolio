import React, { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/img/skrnlogo.png";
import DarkModeToggle from "./DarkModeToggle";
import { FaMusic, FaPause } from "react-icons/fa";
import musicFile from "../assets/music/saikiranmusic.mp3";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Start with true for auto-play
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // Set volume to 30%

    // Try to play automatically
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Auto-play was prevented:", err);
        setIsPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.pause(); // Clean up on unmount
    };
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);
  const hideMenu = () => setShowMenu(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Playback failed:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <header className="l-header">
      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <nav className="nav bd-grid">
        <div className="nav-container-logo">
          <Link to="#" className="nav__logo">
            <img
              src={logo}
              alt="Saikiran"
              className="nav__img"
              style={{ width: "50px", height: "auto" }}
            />
          </Link>
        </div>

        <div className="header-right">
          {/* Music toggle button */}
          <button
            className="music-toggle"
            onClick={toggleMusic}
            aria-label={
              isPlaying ? "Pause background music" : "Play background music"
            }
          >
            {isPlaying ? <FaPause /> : <FaMusic />}
          </button>

          {/* Dark mode toggle */}
          <div className="darkmode-container">
            <DarkModeToggle />
          </div>

          {/* Navigation menu */}
          <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to="#home"
                  className="nav__link active-link"
                  onClick={hideMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#about" className="nav__link" onClick={hideMenu}>
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#skills" className="nav__link" onClick={hideMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#projects" className="nav__link" onClick={hideMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#Experience" className="nav__link" onClick={hideMenu}>
                  Experience
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#contact" className="nav__link" onClick={hideMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu toggle button */}
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
