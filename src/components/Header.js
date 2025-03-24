import React, { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/img/skrnlogo.png";
import DarkModeToggle from "./DarkModeToggle";
import { FaMusic, FaPause } from "react-icons/fa";
import musicFile from "../assets/music/saikiranmusic.mp3";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

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
      audio.pause();
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
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
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
          {/* Music Button */}
          <button
            className={`music-toggle ${isPlaying ? "playing" : ""}`}
            onClick={toggleMusic}
            aria-label={
              isPlaying ? "Pause background music" : "Play background music"
            }
          >
            <div className="music-icon-container">
              {isPlaying ? <FaPause /> : <FaMusic />}
            </div>
            <span className="music-tooltip">
              {isPlaying ? "Pause Music" : "Play Music"}
            </span>
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
