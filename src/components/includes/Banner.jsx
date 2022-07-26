import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from "../../assets/images/slider/slider1.jpg"
import slide2 from "../../assets/images/slider/slider2.jpg"
// import slide3 from "../../assets/images/slider/slider3.jpg"

function Banner() {
    const zoomInProperties = {
        indicators: true,
        scale: 1,
        autoplay: true
    }
    return (
        <>
            <Zoom easing="ease" className="hero-slider"  {...zoomInProperties}>
                <div className="slider-item slide1">
                    <img src={slide1} alt="" />
                    <div className="slider-content">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className=" style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">NABH Certified</h2>
                                    {/* <p className="tag-text mb-4" data-animation-in="slideInRight">NABH certified hospital in Pataudi.</p> */}
                                    {/* <p className="tag-text mb-4" data-animation-in="slideInRight">NABH Certified</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item slide1">
                    <img src={slide2} alt="" />
                    <div className="slider-content">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className=" style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Ayushman Empaneled </h2>
                                    {/* <p className="tag-text mb-4" data-animation-in="slideInRight">Ayushman Bharat Empanelled.</p> */}
                                    {/* <p className="tag-text mb-4" data-animation-in="slideInRight">Ayushman Empaneled.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="slider-item slide1">
                    <img src={slide3} alt="" />
                    <div className="slider-content">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className=" style text-center">
                                    <p className="tag-text mb-2" data-animation-in="slideInRight"> Entrust your health our doctors </p>
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Medical services that you can trust.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item slide1" >
                    <img src={slide2} alt="" />
                    <div className="slider-content">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className=" style text-center">
                                    <p className="tag-text mb-2" data-animation-in="slideInRight"> Entrust your health our doctors </p>
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Exceptional people. Exceptional care.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slide1">
                    <img src={slide1} alt="" />
                    <div className="slider-content">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className=" style text-center">
                                    <p className="tag-text mb-2" data-animation-in="slideInRight"> Entrust your health our doctors </p>
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">The Hospital of the Future, Today.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </Zoom>
        </>
    );
}
export default Banner;