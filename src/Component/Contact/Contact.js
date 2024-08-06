import React from 'react'
import ctct from "./Contact.module.css"

function Contact() {
  return (
    <div className={ctct.contact_page}>
      <div className={ctct.header_txt}>
        <div className={ctct.htxt_background}>
          <h1 className={ctct.text_h1_header}>Contact</h1>
        </div>
      </div>


      <div className={ctct.contact_container}>
        <div className={ctct.contact_section}>
        </div>
      </div>
      
    </div>
  )
}

export default Contact