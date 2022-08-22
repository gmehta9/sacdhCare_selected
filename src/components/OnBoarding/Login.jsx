import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function Login() {

    const { setPageTitle } = useContext(AppContext)

    const navigate = useNavigate()
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
        try {
            const response = await handleError(await post(`sign-in`, values))
            if (response.status === 200) {
                Auth.login(response.data)
                navigate('/user/logged')
            }

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {

        if (Auth.isUserAuthenticated()) {
            navigate('/user/logged')
        }
        setPageTitle(Auth.isUserAuthenticated() ? 'My Account' : 'Login')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
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
                    id="passwordfill"
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

            </form >
            <div className="row mb-4">
                <div className="col text-center">
                    <Link to="/user/sign-up">Sign Up</Link>
                </div>
            </div>

        </React.Fragment>
    );
}
export default Login;