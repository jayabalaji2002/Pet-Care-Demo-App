import React from 'react'
import svs from './Services.module.css'
import Service from "../Home/Service/Service"
import Contact from "../Home/Contact/Contact"

function Services() {
  return (
    <div className={svs.services_page}>
      <div className={svs.header_txt}>
        <div className={svs.htxt_background}>
           <h1 className={svs.text_h1_header}>Services</h1>     
        </div>
      </div>
      <Service/>
      <Contact/>
    </div>
  )
}

export default Services