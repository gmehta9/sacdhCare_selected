import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function ForgotPassword() {
    const { setPageTitle, setSpinnerShow } = useContext(AppContext)

    const navigate = useNavigate()

    const { values, errors, bindField, isValid, setInitialValues } = useForm({
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
        setSpinnerShow(true)
        e.preventDefault()
        try {
            const response = await handleError(await post(`forgot-password`, values))
            console.log(response);
            setInitialValues({})
            setSpinnerShow(false)
            Swal.fire(
                'Success!',
                `Reset password link has been sent to your email (${values.email})!`,
                'success'
            )

        } catch (err) {
            console.error(err);
            setSpinnerShow(false)
        }
    }

    useEffect(() => {
        if (Auth.isUserAuthenticated()) {
            navigate('/user/loggedInPage')
        }
        setPageTitle('Forgot Password')
        document.title = 'Forgot Password | Swami Amar Dev Hospital | Sadh Care Hospital';

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <form onSubmit={forgotPasswordHandler}>
                <div className="row">
                    <div className="col-md-5 mx-auto col-12">
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
export default ForgotPassword;