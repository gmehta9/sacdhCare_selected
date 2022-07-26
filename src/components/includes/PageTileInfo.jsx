import React from "react";
import { Link } from "react-router-dom";

function PageTitleInfo({ pageTitle }) {
    return (

        <React.Fragment>
            <section className="page-title text-center" style={{ backgroundImage: 'url(/sadhcare/background/3.jpg)' }}>
                <div className="container">
                    <div className="title-text">
                        <h1>{pageTitle}</h1>
                        <ul className="title-menu clearfix">
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            /&nbsp;&nbsp;
                            <li className="font-weight-bold">{pageTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default PageTitleInfo;