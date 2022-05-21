import React from "react";
import programData from "../jsonData/programData.json";

function ourProgrammes() {

    return (
        <div className="our-program">
            <div className="accordion-holder">
                <div className="accordion" id="accordionGroup" role="tablist" aria-multiselectable="true">
                    {programData.map((prgm, index) =>
                        <div key={index} className="card">
                            <div className="card-header" role="tab" id={`headingOne${index}`}>
                                <h6 className="card-title mb-0">
                                    <a role="button" data-toggle="collapse" href={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                        {prgm.title}
                                    </a>
                                </h6>
                            </div>
                            <div id={`collapse${index}`} className={`collapse ${prgm.id === 1 && 'show'}`} role="tabpanel" aria-labelledby={`headingOne${index}`} data-parent="#accordionGroup">
                                <div className="card-body">
                                    {prgm.content}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h4 className="card-title">
                                <a className="collapsed" role="button" data-toggle="collapse" href="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    What are the Centre’s visiting hours?
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionGroup">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                tempor,
                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h4 className="card-title">
                                <a className="collapsed" role="button" data-toggle="collapse" href="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    How many visitors are allowed?
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordionGroup">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                tempor,
                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default ourProgrammes;