import React from "react";
import { Slide } from 'react-slideshow-image';
import Departments from "../jsonData/Departments.json";

function DepartmentsProvided() {
    const properties = {
        duration: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        indicators: true,
    };
    return (
        <Slide {...properties}>
            {Departments.map((dept, index) =>
                <div className="item" key={index}>
                    <div className="inner-box">
                        <div className="img_holder">
                            <a href="service.html">
                                <img loading="lazy" src={`${process.env.PUBLIC_URL}/${dept.image}`} alt="images" className="img-fluid" />
                            </a>
                        </div>
                        <div className="image-content text-center">
                            {/* <span>Better Service At Low Cost</span> */}
                            <a href="service.html">
                                <h6>{dept.title}</h6>
                            </a>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p> */}
                        </div>
                    </div>
                </div>
            )}

            {/* <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img loading="lazy" src={gallery2} alt="images" className="img-fluid" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Germs Protection</h6>
                        </a>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img loading="lazy" src={gallery3} alt="images" className="img-fluid" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Psycology</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p> 
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img loading="lazy" src={gallery1} alt="images" className="img-fluid" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Dormitory</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img loading="lazy" src={gallery2} alt="images" className="img-fluid" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Germs Protection</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img loading="lazy" src={gallery3} alt="images" className="img-fluid" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Psycology</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div> */}
        </Slide>
    );
}
export default DepartmentsProvided;