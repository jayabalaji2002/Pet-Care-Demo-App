import React from 'react'
import ftr from "./Footer.module.css"
import Footer_logo from "../../Assets/img/logo/logo2_footer.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className={ftr.footer_section}>
            <div className={ftr.footer_container}>

                {/* Box 1 */}
                <div className={ftr.ftr_ctr__ctr__logo}>
                    <div className={ftr}>
                        <img src={Footer_logo} alt='footer logo' />
                    </div>
                    <p className={ftr.ftr_ctr__ctr__p}>
                        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor elit.
                    </p>
                    <div className={ftr.ftr_ctr__ctr__icon}>
                        <FaFacebookSquare className={ftr.ctr___icons} />
                        <FaLinkedin className={ftr.ctr___icons} />
                        <FaSquareTwitter className={ftr.ctr___icons} />
                        <FaPinterestSquare className={ftr.ctr___icons} />
                    </div>
                </div>

                {/* Box 2*/}
                <div className={ftr.ftr_ctr__ct__company}>
                    <div className={ftr.ftr_ctr__ctr__title}>
                        <h3 className={ftr.ctr__title_h3}>Company</h3>
                    </div>
                    <ul className={ftr.ftr_ctr__ctr__ul}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Box 3 */}
                <div className={ftr.ftr_ctr__ct__services}>
                    <div className={ftr.ftr_ctr__ctr__title}>
                        <h3 className={ftr.ctr__title_h3}>Services</h3>
                    </div>
                    <ul className={ftr.ftr_ctr__ctr__ul}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog safdfdffvsdgg</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>


                {/* Box 4 */}
                <div className={ftr.ftr_ctr__ct__gitouch}>
                    <div className={ftr.ftr_ctr__ctr__title}>
                        <h3 className={ftr.ctr__title_h3}>Get in Touch</h3>
                    </div>
                    <p className={ftr.ftr_ctr__ctr__mbnum}>+91 9846284343</p>
                    <p className={ftr.ftr_ctr__ctr__email}>Demomail@gmail.com`</p>
                    <p className={ftr.ftr_ctr__ctr__address}>Nagercoil, Tami Nadu</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
