import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function ForgotPassword() {
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

    useEffect(() => {
        if (Auth.isUserAuthenticated()) {
            navigate('/user/loggedInPage')
        }
        setPageTitle(Auth.isUserAuthenticated() ? 'My Account' : 'Login')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
export default ForgotPassword;