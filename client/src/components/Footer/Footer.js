import React from "react";
import "./Footer.css";   // create this file also

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* left column empty */}
      </div>

      <div className="footer-middle">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      <div className="footer-right">
        {/* reserved for future widgets */}
      </div>
    </footer>
  );
}

export default Footer;
