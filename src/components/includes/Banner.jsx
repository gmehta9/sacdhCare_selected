import React from "react";

function Banner() {

    return (
        <>
            <div className="hero-slider">

                <div className="slider-item slide1" style={{ backgroundImage: "url(images/slider/slider-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content style text-center">
                                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br /> Quis quos officiis numquam!</p>
                                    <a href="about.html" className="btn btn-main btn-white" data-animation-in="slideInLeft" data-duration-in="1.2">explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="slider-item" style={{ backgroundImage: "url(images/slider/slider-bg-2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="content style text-center">
                                    <h2 className="text-white" data-animation-in="slideInRight">We Care About Your Health</h2>
                                    <p className="tag-text mb-4" data-animation-in="slideInRight" data-duration-in="0.6">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <a href="about.html" className="btn btn-main btn-white" data-animation-in="slideInRight" data-duration-in="1.2">about us</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="slider-item" style={{ backgroundImage: 'url(../assets/images/slider/slider-bg-3.jpg)' }}>
    <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="content text-center style">
                    <h2 className="text-white text-bold mb-2" data-animation-in="slideInRight">Best Medical Services</h2>
                    <p className="tag-text mb-4" data-animation-in="slideInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt, <br />eius pariatur minus itaque nostrum.</p>
                    <a href="about.html" className="btn btn-main btn-white" data-animation-in="slideInRight" data-duration-in="1.2">shop now</a>
                </div>

            </div>
        </div>
    </div>
</div> */}
            </div>
        </>
    );
}
export default Banner;