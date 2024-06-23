import React from "react";
import Logo from "../assets/Copy_of_FPCI_Logo_(1)_(1)-transformed.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="row">
          <Link to="/" className="nav__logo">
            <img src={Logo} alt="Navbar Logo" />
          </Link>
          <div className="col">
            <div className="footer__location">
              <p className="p__border">Our Location</p>
              <p>Universitas Islam Negeri Jakarta, Ciputat.</p>
            </div>
            <div className="footer__contact">
              <p className="p__border">Contact Us</p>
              <p>fpciuinjakarta@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <small>All Rights Reserved &copy; Copyright, FPCI UIN Jakarta</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
