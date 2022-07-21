import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import programData from "../jsonData/programData.json";

function OurProgrammes() {

    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Our Programmes')
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="our-program accordion-section">
            <div className="accordion-holder">
                <div className="accordion" id="accordionGroup" role="tablist" aria-multiselectable="true">
                    {programData.map((prgm, index) =>
                        <div key={`programData${index}`} className="card">
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
                </div>
            </div>
        </div>
    );
}
export default OurProgrammes;