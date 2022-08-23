import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function SignUp() {

    const { setPageTitle } = useContext(AppContext)

    const navigate = useNavigate()

    const { values, errors, bindField, isValid, setInitialValues, setErrors } = useForm({
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
            phone_number: {
                pattern: {
                    value: patterns.onlyNumber,
                    message: "Enter vaild Phone no.",
                },
                maxLength: {
                    value: 10,
                    messag1e: "Enter vaild Phone no.",
                },
                minLength: {
                    value: 10,
                    messag1e: "Enter vaild Phone no.",
                },
                required: true,
            },
            password: {
                minLength: {
                    value: 8,
                    message: "Password should be minimum 8 characters long.",
                },
                required: true,
            },
            password_confirmation: {
                minLength: {
                    value: 8,
                    message: "Password should be minimum 8 characters long.",
                },
                required: true,
            }
        },
    });

    const signUpHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await handleError(await post(
                `sign-up`,
                values
            ))

            if (response.status === 200) {
                setInitialValues({})

                navigate('/user/login')

                toast.success(response.message, {
                    autoClose: 5000,
                })
            }

        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        if (values.password_confirmation && (values.password !== values.password_confirmation)) {
            setErrors(pre => {
                return { ...pre, password_confirmation: `Confirm Password must be matched.` }
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values])

    useEffect(() => {
        if (Auth.isUserAuthenticated()) {
            navigate('/user/loggedInPage')
        }
        setPageTitle(Auth.isUserAuthenticated() ? 'My Account' : 'Sign Up')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
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
                    icons
                    requried={true}
                />
                <Input
                    labelTitle="Confirm Password"
                    type="password"
                    name="password_confirmation"
                    {...bindField("password_confirmation")}
                    placeholder="Enter your Confirm Password"
                    id="password_confirmation"
                    error={errors}
                    icons
                    requried={true}
                />
                <button
                    type="submit"
                    disabled={!isValid()}
                    className="btn btn-primary btn-block mt-5 mb-4">
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
export default SignUp;