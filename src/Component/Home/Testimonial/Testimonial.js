import React from 'react'
import testimonial from "./Testimonial.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestImg from "../../../Assets/img/gallery/testi-logo.png"

function Testimonial() {
    return (

        <div className={testimonial.testimonial_section}>
            <div className={testimonial.testimonial_container}>
                <Carousel infiniteLoop interval={10000} transitionTime={500}  autoPlay showStatus={false} showArrows={false}  swipeable={true} bemulateTouch={true} >

                    {/* box1 */}
                    <div className={testimonial.testm_container}>

                        <div  className={testimonial.testmc_d}>
                            <img src={TestImg} alt='logo_img' className={testimonial.testmc_img}/>
                        </div>

                        <p className={testimonial.testmc_name}>Jayabalaji</p>

                        <p className={testimonial.testmc_profess}>Creative Designer</p>

                        <p className={testimonial.testmc_discrip}>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                    </div>

                    <div className={testimonial.testm_container}>

                        <div  className={testimonial.testmc_d}>
                            <img src={TestImg} alt='logo_img' className={testimonial.testmc_img}/>
                        </div>

                        <p>Jayabalaji</p>

                        <p>Creative Designer</p>

                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                    </div>
                </Carousel>
            </div>
        </div>

    )
}

export default Testimonial
