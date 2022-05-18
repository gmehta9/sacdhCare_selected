import React from "react";
import { Slide } from 'react-slideshow-image';

import testimonials1 from "../../assets/images/testimonials/1.jpg";
import testimonials2 from "../../assets/images/testimonials/2.png";
import testimonials3 from "../../assets/images/testimonials/3.png";

function TestimonialsSlider() {
    const properties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        indicators: true,
    };

    return (
        <Slide {...properties}>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials1} alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials2} alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials3} alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials1} alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials2} alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials3} alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials1} alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials2} alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            {/* Slide Item */}
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img loading="lazy" src={testimonials3} alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
        </Slide>
    );
}
export default TestimonialsSlider;