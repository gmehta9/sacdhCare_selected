import React from "react";
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from "../../assets/images/slider/slider1.jpg"
import slide2 from "../../assets/images/slider/slider2.jpg"
import slide3 from "../../assets/images/slider/slider3.jpg"

function Banner() {
    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }
    return (
        <>
            <Zoom easing="ease"  {...zoomInProperties}>
                <div className="slider-item slide1">
                    <img src={slide1} alt="" />
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="slider-content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="slider-item slide1" >
                    <img src={slide2} alt="" />
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="slider-item slide1">
                    <img src={slide3} alt="" />
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Zoom>
        </>
    );
}
export default Banner;