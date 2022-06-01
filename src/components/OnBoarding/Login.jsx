import React from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function Login() {
    const auth = Auth.user()
    console.log(auth)
    const { values, errors, bindField, isValid } = useForm({
        validations: {
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
                        "Password should be minimum 6 characters long.",
                },
                required: true,
            },

        },
    });

    const loginHandler = async (e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await handleError(await post(`sign-in`, values))

            if (response.status === 200) {
                console.log('response', response.data)
                Auth.login(response.data)
            }

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="row justify-content-center">

            <div className="col-6">
                <form onSubmit={loginHandler}>
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

                    <Input
                        labelTitle="Password"
                        type="password"
                        name="password"
                        {...bindField("password")}
                        placeholder="Enter your password"
                        id="emailfill"
                        error={errors}
                    // requried={true}
                    />

                    <div className="row mb-4">
                        <div className="col">
                            <Link to="/user/forgot-password">Forgot password?</Link>
                        </div>
                    </div>

                    <button
                        disabled={!isValid()}
                        type="submit"
                        className="btn btn-primary btn-block mb-4">
                        Sign in
                    </button>

                </form>
                <div className="row mb-4">
                    <div className="col text-center">
                        <Link to="/user/sign-up">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;