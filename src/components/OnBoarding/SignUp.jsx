import React from "react";
import { Link } from "react-router-dom";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function SignUp() {
    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            name: {
                required: true,
            },
            email: {
                pattern: {
                    value: patterns.email,
                    message: "Invalid email address.",
                },
                required: true,
            },
            password: {
                minLength: {
                    value: 6,
                    message:
                        "Password should be minimum 8 characters long.",
                },
                required: true,
            },
        },
    });

    const signUpHandler = async () => {
        try {
            const response = await handleError(await post(
                `sign-up`,
                values
            ))
            const data = response;
            console.log('signUpHandler', data)
            setInitialValues()
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="row justify-content-center">

            <div className="col-6">
                <form onSubmit={signUpHandler}>
                    <Input
                        labelTitle="Name"
                        type="text"
                        name="name"
                        {...bindField("name")}
                        placeholder="Enter your name"
                        id="namefill"
                        error={errors}
                    // requried={true}
                    />
                    <Input
                        labelTitle="phone_number"
                        type="text"
                        name="phone_number"
                        {...bindField("phone_number")}
                        placeholder="Enter your phone no"
                        id="phone_number"
                        error={errors}
                        requried={true}
                    />
                    <Input
                        labelTitle="Email"
                        type="email"
                        name="email"
                        {...bindField("email")}
                        placeholder="Enter your email"
                        id="emailfill"
                        error={errors}
                        requried={true}
                    />
                    <Input
                        labelTitle="Password"
                        type="password"
                        name="password"
                        {...bindField("password")}
                        placeholder="Enter your password"
                        id="password"
                        error={errors}
                    // requried={true}
                    />
                    <Input
                        labelTitle="Confirm Password"
                        type="password"
                        name="password_confirmation"
                        {...bindField("password_confirmation")}
                        placeholder="Enter your Confirm Password"
                        id="password_confirmation"
                        error={errors}
                    // requried={true}
                    />
                    <button
                        type="submit"
                        disabled={!isValid()}
                        className="btn btn-primary btn-block mb-4">
                        Sign in
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
export default SignUp;