import React from "react";
import { Slide } from 'react-slideshow-image';
import testimonials from "../jsonData/testimonial.json";

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
            {testimonials.map((elm, index) =>
                <div key={index} className="slide-item">
                    <div className="inner-box text-center">
                        <div className="image-box">
                            <figure>
                                <img loading="lazy" src={elm.image} alt="" />
                            </figure>
                        </div>
                        <h6>{elm.patientName}</h6>
                        <p className="mb-0">{elm.testimonial}</p>
                    </div>
                </div>
            )}
        </Slide>
    );
}
export default TestimonialsSlider;