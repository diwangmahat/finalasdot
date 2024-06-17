import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerlogo from "../assets/main-logo/white-logo.png"
import "./FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <a href="/">
            <img src={footerlogo} alt="Logo" className="footer-logo" />
          </a>
          <p>
            Enhance your online presence.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61560214475407"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/asdot.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/asdot-agency-1a6a8a313/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Quick Links</h3>
          <div className="footer-links">
            <div>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
            </div>
            <div>
              <a href="/blog">Blog</a>
              <a href="/project">Projects</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Get in Touch</h3>
          <p>
            Phone:
            <a href="tel:+" className="Contact-links">
              {" "}
              +61410592287
            </a>
          </p>
          <p>
            Email:
            <a href="mailto:" className="Contact-links">
              {" "}
              info@asdot.com.au
            </a>
          </p>
          <p>Address:  42 The avenue, Hurstville, Sydney, Australia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="legal-links">
          <p>
            <a href="/terms">Terms & Conditions</a>
          </p>
          <p>
            <a href="/policy">Privacy Policy</a>
          </p>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()} AsDot. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
