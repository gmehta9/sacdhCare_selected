import React from "react";

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
}) {

    return (
        <>
            <div className="form-outline mb-3">
                <label
                    className="form-label"
                    htmlFor={id}>
                    {labelTitle} {requried && <sub>*</sub>}
                </label>
                <input
                    type={type}
                    onChange={onChange}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={'off'}
                    id={id}
                    className="form-control"
                />
                {error[name] &&
                    <span className="text-danger"> {error[name]}</span>}
            </div>
        </>
    );
}
export default Input;