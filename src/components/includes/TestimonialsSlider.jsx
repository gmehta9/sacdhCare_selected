import React from "react";
import { Slide } from 'react-slideshow-image';
import testimonials1 from "../../assets/images/testimonials/Patient1.jpg";
import testimonials2 from "../../assets/images/testimonials/Patient2.jpg";
import testimonials3 from "../../assets/images/testimonials/Patient3.jpg";

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
                    <h6>Patient</h6>
                    <p className="mb-0">Are you feeling any better? Yes, am feeling a lot better now. Great, you are doing good. Very nice! Thank you!</p>
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
                    <h6>Patient</h6>
                    <p className="mb-0">
                        My wife was not keeping well. I am a resident of Chatarpur Madhya Pradesh. I took her to many hospitals. Still, there was no respite. She was consistently having high fever. Due to this, I was quite worried. It was when my friend suggested to take her to Delhi. But, I dint know where to go so I told Nishyu sir, who told me to come to Delhi and show to his friend’s hospital in Pataudi.
                    </p>
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
                    <h6>Patient</h6>
                    <p className="mb-0">The treatment was good. I slept well. Medicine worked. I am so glad that I am perfectly fine now! Jai Ho Swami ji! Dr Jyoti, Dr Shashi and Dr Raj Mouli mam were the best!</p>
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
                    <h6>Patient</h6>
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
                    <h6>Patient</h6>
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