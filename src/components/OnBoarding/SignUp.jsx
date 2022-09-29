import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function SignUp() {

    const { setPageTitle, setSpinnerShow } = useContext(AppContext)

    const navigate = useNavigate()

    const { values, errors, bindField, isValid, setInitialValues, setErrors } = useForm({
        validations: {
            first_name: {
                required: true,
            },
            last_name: {
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
            address: {
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
        setSpinnerShow(true)
        try {
            const response = await handleError(await post(`sign-up`, values))

            if (response.status === 200) {
                setInitialValues({})
                setSpinnerShow(false)
                navigate('/user/login')

                toast.success(response.message, {
                    autoClose: 5000,
                })
            }

        } catch (err) {
            setSpinnerShow(false)
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
        document.title = 'Sign-Up | Swami Amar Dev Hospital | Sadh Care Hospital';

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <form onSubmit={signUpHandler}>
                <div className="row">
                    <div className="col-md-4 col-6">
                        <Input
                            labelTitle="First Name"
                            type="text"
                            name="first_name"
                            {...bindField("first_name")}
                            placeholder="Enter your First name"
                            id="namefill"
                            error={errors}
                            requried={true}
                        />
                    </div>
                    <div className="col-md-4 col-6">
                        <Input
                            labelTitle="Last Name"
                            type="text"
                            name="last_name"
                            {...bindField("last_name")}
                            placeholder="Enter your last name"
                            id="namefill"
                            error={errors}
                            requried={true}
                        />
                    </div>
                    <div className="col-md-4 col-6">
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
                    </div>
                    <div className="col-md-4 col-6">
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
                    </div>
                    <div className="col-md-4 col-6">
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
                    </div>
                    <div className="col-md-4 col-6">
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
                    </div>
                    <div className="col-12">
                        <Input
                            labelTitle="Address"
                            type="text"
                            name="address"
                            {...bindField("address")}
                            placeholder="Enter your address"
                            id="namefill"
                            error={errors}
                            requried={true}
                        />
                    </div>
                    <div className="col-md-3 col-6">
                        <Input
                            labelTitle="City"
                            type="text"
                            name="city"
                            {...bindField("city")}
                            placeholder="Enter your city"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>
                    <div className="col-md-3 col-6">
                        <Input
                            labelTitle="State"
                            type="text"
                            name="state"
                            {...bindField("state")}
                            placeholder="Enter your name"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>
                    <div className="col-md-3 col-6">
                        <Input
                            labelTitle="Date of birth"
                            type="date"
                            name="dob"
                            {...bindField("dob")}
                            placeholder="Enter Date of birth"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>
                    <div className="col-md-3 col-6">
                        <Input
                            labelTitle="Company Name"
                            type="text"
                            name="company"
                            {...bindField("company")}
                            placeholder="Enter your name"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>
                    <div className="col-md-2 mx-auto col-6">
                        <button
                            type="submit"
                            disabled={!isValid()}
                            className="btn btn-primary btn-block mt-5 mb-4">
                            Submit
                        </button>
                    </div>

                </div>
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