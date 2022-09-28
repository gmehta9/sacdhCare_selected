import React from "react";
import { Slide } from 'react-slideshow-image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import testimonials from "../jsonData/testimonial.json";

function TestimonialsSlider() {
    const properties = {
        duration: 3000,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <Slide {...properties}>
            {testimonials.map((elm, index) =>
                <div key={`testimonials${index}`} className="slide-item">
                    <div className="inner-box text-center">
                        <div className="image-box">
                            <figure>
                                <LazyLoadImage
                                    alt={""}
                                    height="90px"
                                    src={`${process.env.PUBLIC_URL}/${elm.image}`}
                                    width="90px"
                                />
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