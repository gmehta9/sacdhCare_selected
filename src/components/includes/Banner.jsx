import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

function Banner() {

    return (
        <>
            <AwesomeSlider bullets={false} cssModule={AwesomeSliderStyles}>
                <div className="slider-item slide1" style={{ backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item slide1" style={{ backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item slide1" style={{ backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AwesomeSlider>
        </>
    );
}
export default Banner;