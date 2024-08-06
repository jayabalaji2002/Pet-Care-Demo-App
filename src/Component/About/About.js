import React from 'react'
import about from './About.module.css'
import { TbGridDots } from "react-icons/tb";

function About() {
  return (
    <div className={about.about_section}>
      <div className={about.about_container}>

        {/* Text container */}
        <div className={about.about_inner}>

          <div className={about.ai_mission}>

            <h1 className={about.mission_h1}>
              Our Mission
            </h1>
            <p className={about.mission_p}>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
            </p>
            <p className={about.mission_p}>
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
            </p>


          </div>

          <div className={about.ai_mission}>

            <h1 className={about.mission_h1}>
              Our Vision
            </h1>
            <p className={about.mission_p}>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
            </p>

          </div>
        </div>
        {/* Text content end */}
        {/* Better Services Start*/}

        <div className={about.ab_betterservices_ctr}>

          <div className={about.ab_ctr_img}>

            <div className={about.bs_ctr__box}>
              <div className={about.ctr_box__num}>
                <TbGridDots className={about.box_num__i} />
                <p className={about.box_num__num}>354</p>
              </div>
              <p className={about.ctr_box_success}>success</p>
              <p className={about.ctr_box_treatment}>Treatment</p>
            </div>

            <div className={about.bs_ctr__box}>
              <div className={about.ctr_box__num}>
                <TbGridDots className={about.box_num__i} />
                <p className={about.box_num__num}>354</p>
              </div>
              <p className={about.ctr_box_success}>success</p>
              <p className={about.ctr_box_treatment}>Treatment</p>
            </div>

          </div>


          <div className={about.ab_ctr_data}>

            <div className={about.ab_ctr__datas}>
              <h1 className={about.ctr_data_h1}>We are commited for
                better service</h1>
              <p className={about.ctr_data_p}>
                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu.
              </p>
              <p className={about.ctr_data_p_2}>
                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
              </p>
              <button className={about.ctr_data_btn}>
                Read More
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About