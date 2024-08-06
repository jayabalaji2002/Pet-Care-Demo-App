import React from 'react'
import nav from "./Nav.css"
import Nbar_logo from "../../Assets/img/logo/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
        <div className='nav-section'>
            <div className='nav-logo'>
                <img src={Nbar_logo} alt='Navbar_logo' />
            </div>
            <div className='hamburger'>
                < CiMenuBurger className='ham'/>
            </div>
            <div className='nav-ctr'>

                <div className='nav'>
                    <ul>
                        <li className="ul__li">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="ul__li">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="ul__li">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="ul__li">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="ul__li">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="btn_container">
                    <p className="btn_container__p">+91 08364836</p>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Nav
