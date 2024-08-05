import TestImg1 from "../../../Assets/img/gallery/testi-logo.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./Testimonial.css"

function Testimonial() {

    return (
        <div className='testimonial_section'>
            <div className='testimonial_ctr'>
                <Swiper pagination={{clickable:true}} modules={[Pagination]} className="mySwiper" navigation
      autoplay={{
        delay: 2500, // Time delay between slides in ms
        disableOnInteraction: false,
      }} loop={true}>

                    <SwiperSlide>
                        <div className='ctr_box'>
                            <div className='box_img'>
                                <img src={TestImg1} alt='Test_image' className="img_ctr_img" />
                                <h2 className="img_ctr_h2">
                                    Jayabalaji
                                </h2>
                                <p className="img_ctr_proffes">Creative Designer</p>
                            </div>
                            <div className='box_about'>
                                <p className="about_ctr_p">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='ctr_box'>
                            <div className='box_img'>
                                <img src={TestImg1} alt='Test_image' className="img_ctr_img" />
                                <h2 className="img_ctr_h2">
                                    Jayabalaji
                                </h2>
                                <p className="img_ctr_proffes">Creative Designer</p>
                            </div>
                            <div className='box_about'>
                                <p className="about_ctr_p">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='ctr_box'>
                            <div className='box_img'>
                                <img src={TestImg1} alt='Test_image' className="img_ctr_img" />
                                <h2 className="img_ctr_h2">
                                    Jayabalaji
                                </h2>
                                <p className="img_ctr_proffes">Creative Designer</p>
                            </div>
                            <div className='box_about'>
                                <p className="about_ctr_p">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial
