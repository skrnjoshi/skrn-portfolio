// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Saikiran Donkana</p>
      <div className="footer__social">
        <a
          href="https://www.facebook.com/share/1D4nwZaDqg/"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/skrnjoshi?igsh=MW55a2hjdWprdjExNA=="
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://x.com/skrnjoshi02?t=O87zcabdDUW6EVPgled0VA&s=08"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <p className="footer__copy">&#169; Bedimcode. All rigths reserved</p>
    </footer>
  );
};

export default Footer;
