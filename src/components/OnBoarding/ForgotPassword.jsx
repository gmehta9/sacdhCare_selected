import React from "react";
import { Link } from "react-router-dom";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function ForgotPassword() {
    const { values, errors, bindField, isValid } = useForm({
        validations: {
            email: {
                pattern: {
                    value: patterns.email,
                    message: "Invalid email address.",
                },
                required: true,
            },


        },
    });

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await handleError(await post(`forgot-password`, values))
            const data = response;
            console.log('forgotPasswordHandler', data)
        } catch (err) {
            console.error(err);
        }
    }
    console.log('vlaues', values)
    return (
        <div className="row justify-content-center">

            <div className="col-6">
                <form onSubmit={forgotPasswordHandler}>
                    <Input
                        labelTitle="Email"
                        type="email"
                        name="email"
                        {...bindField("email")}
                        placeholder="Enter your email"
                        id="emailfill"
                        error={errors}
                    // requried={true}
                    />
                    <button
                        disabled={!isValid()}
                        type="submit"
                        className="btn btn-primary btn-block mb-4">
                        Submit
                    </button>
                </form>
                <div className="row mb-4">
                    <div className="col text-center">
                        <Link to="/user/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;