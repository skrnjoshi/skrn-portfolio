// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import "./assets/css/styles.css";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
    sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
      delay: 400,
    });
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        );

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionsClass?.classList.add("active-link");
        } else {
          sectionsClass?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="l-main">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
