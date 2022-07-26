import React, { useState } from "react";

// import { eye_hide_show } from "../../assets/images/eye_hide_show.svg";
// import { eye_hide } from "../../assets/images/eye_hide.svg";

function Input({
    labelTitle,
    name,
    type,
    placeholder,
    id,
    error,
    value,
    requried,
    onChange,
    // icons
}) {
    const [showPassward] = useState(false);
    return (
        <>
            <div className="form-outline mb-3">
                {labelTitle &&
                    <label
                        className="form-label"
                        htmlFor={id}>
                        {labelTitle} {requried && <sup>*</sup>}
                    </label>
                }
                <input
                    type={showPassward ? 'text' : type}
                    onChange={onChange}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    autoComplete="off"
                    id={id}
                    className="form-control"
                />

                {/* {icons &&
                    <div onClick={() => setshowPassward(!showPassward)} className="input_icon">
                        <img
                            src={`${showPassward ? eye_hide_show : eye_hide}`}
                            alt="hide eye"
                            className="password-hide" />
                    </div>
                } */}
                {error[name] &&
                    <span className="text-danger"> {error[name]}</span>}
            </div>
        </>
    );
}
export default Input;