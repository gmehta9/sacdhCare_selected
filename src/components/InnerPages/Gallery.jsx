import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
// import gallery from "../jsonData/gallery.json"
import Departments from "../jsonData/Departments.json";

function Gallery() {

    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Gallery')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <section className="gallery bg-gray ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h3>Collected Shots
                                    <span> of Our Hospital</span>
                                </h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overv-
                                    <br />iews. Iterative approaches to corporate strategy...</p>
                            </div>
                        </div>

                        {Departments.map((elm, index) =>
                            <div key={`gallery${index}`} className="col-lg-4 col-md-6">
                                <div className="gallery-item">
                                    <img loading="lazy" src={`${process.env.PUBLIC_URL}/${elm.image}`} className="img-fluid" alt="gallery" />
                                    <a data-fancybox="images" href={`${process.env.PUBLIC_URL}/${elm.image}`} >
                                        <h3>{elm.title}</h3>
                                        {/* <p>{elm.imageContent}</p> */}
                                    </a>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default Gallery;