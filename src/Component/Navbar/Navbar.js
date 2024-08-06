import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navbar from "./Navbar.module.css";
import Nbar_logo from "../../Assets/img/logo/logo.png";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${navbar.nb_section} ${isSticky ? navbar.sticky : ""}`}>
      <div className={navbar.nb_container}>
        <div className={navbar.nb_logo}>
          <img src={Nbar_logo} alt="Navbar logo" />
        </div>

        <div className={navbar.nav_text_ctr}>
          {/* Mobile Menu Toggle */}
          <div className={navbar.menu} onClick={toggleMenu}>
            <CiMenuBurger className={navbar.menu_class} />
          </div>

          {/* UL Container */}
          <div className={`${navbar.ul_container} ${isMenuOpen ? navbar.show_ul : ""}`}>
            <ul className={navbar.ul__container}>
              <li className={navbar.ul__li}>
                <Link to="/">Home</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/about">About</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/services">Services</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className={navbar.btn_container}>
            <p className={navbar.btn_container__p}>+91 08364836</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
