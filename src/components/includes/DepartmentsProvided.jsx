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
                <div className="item" key={`Departments${index}`}>
                    <div className="inner-box">
                        <div className="img_holder">
                            <a href="/">
                                <img
                                    loading="auto"
                                    src={`${process.env.PUBLIC_URL}/${dept.image}`}
                                    alt="images"
                                    className="img-fluid" />
                            </a>
                        </div>
                        <div className="image-content text-center">
                            {/* <span>Better Service At Low Cost</span> */}
                            <h6>{dept.title}</h6>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p> */}
                        </div>
                    </div>
                </div>
            )}

        </Slide>
    );
}
export default DepartmentsProvided;