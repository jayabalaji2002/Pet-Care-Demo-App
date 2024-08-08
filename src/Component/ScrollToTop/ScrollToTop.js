import React, { useState,useEffect } from 'react'
import { FaLevelUpAlt } from "react-icons/fa";
import stt from "./ScrollToTop.module.css"

function ScrollToTop() {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 100){
                    setBackToTopBtn(true)
                }else{
                    setBackToTopBtn(false)
                }
            })
    },[]);

    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <>
        {backToTopBtn && (
            <button className={stt.stt_btn} onClick={scrollUp}>
                <FaLevelUpAlt className={stt.btn__icon}/>
            </button>
        )} 
    </>
  )
}

export default ScrollToTop
