import React from "react";
import './spinner.scss'
function Spinner() {

    return (
        <div className="main-loader">
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default Spinner;

