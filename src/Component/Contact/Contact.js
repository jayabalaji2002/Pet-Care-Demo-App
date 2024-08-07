import React from 'react'
import ctct from "./Contact.module.css"
import { AiOutlineHome } from "react-icons/ai";
import { LuSmartphone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <div className={ctct.contact_page}>
      <div className={ctct.header_txt}>
        <div className={ctct.htxt_background}>
          <h1 className={ctct.text_h1_header}>Contact</h1>
        </div>
      </div>

      {/* start */}
      <div className={ctct.contact_container}>
        <div className={ctct.contact_section}>
          <div className={ctct.contact_map_ctr}>
            <div className={ctct.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1396.2221303511556!2d77.39750181522767!3d8.191416575048079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f11bd813e981%3A0x17f9698ac8b005b3!2sALO%20Info-Tech!5e0!3m2!1sen!2sin!4v1723010987565!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='alo-infotech' className={ctct.map_data}></iframe>
            </div>
          </div>

          {/* Form Container */}
          <div className={ctct.contact_form_ctr}>

            {/* Form */}
            <div className={ctct.form_ctr_git}>

              <h1 className={ctct.git_h1}>Get in Touch</h1>

              <div className={ctct.git_inputs}>

                <textarea placeholder='Enter Message' className={ctct.git_inp_textarea} ></textarea>
                <div className={ctct.git_inp_ctr}>
                  <input type='text' placeholder='Enter Name' className={ctct.inp__inp1} />
                  <input type='email' placeholder='Enter Email' className={ctct.inp__inp2} />
                </div>
                <input type='text' placeholder='Enter Subject' className={ctct.git_inp_sub} />

              </div>

              <button className={ctct.git_inp_btn}>SEND</button>
            </div>


            {/* Address */}
            <div className={ctct.form_ctr_address}>

              {/* Box1 */}
              <div className={ctct.address}>
                <AiOutlineHome className={ctct.add_icon} />
                <div className={ctct.add_txt}>
                  <p className={ctct.txt_pa}>
                    Buttonwood, California.
                  </p>
                  <p className={ctct.txt_ch}>
                    Rosemead, CA 91770
                  </p>
                </div>
              </div>

              {/* Box2 */}
              <div className={ctct.address}>
                <LuSmartphone className={ctct.add_icon} />
                <div className={ctct.add_txt}>
                  <p className={ctct.txt_pa}>
                    +1 253 565 2365
                  </p>
                  <p className={ctct.txt_ch}>
                    Mon to Fri 9am to 6pm
                  </p>
                </div>
              </div>

              {/* Box3 */}
              <div className={ctct.address}>
                <TfiEmail className={ctct.add_icon} />
                <div className={ctct.add_txt}>
                  <p className={ctct.txt_pa}>
                    support@colorlib.com
                  </p>
                  <p className={ctct.txt_ch}>
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact