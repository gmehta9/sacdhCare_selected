import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import "./loggedIn.scss";
import { handleError, put } from "../httpService/http";
import Input from "../widgets/Input";
import { patterns, useForm } from "../helper/useForm";
import { toast } from "react-toastify";

function LoggedUserProfile() {

    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate();
    const user = Auth.user()
    const { setPageTitle } = useContext(AppContext);

    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            first_name: {
                required: true,
            },
            last_name: {
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
        },
    });

    const updateProfileHandler = async () => {
        try {
            const response = await handleError(await put(`update-profile`, values))
            if (response.status === 200) {
                toast.success('User update successfully!', {
                    autoClose: 5000,
                })
                Auth.login({ ...response.data, email: user.email, token: Auth.token() })
            }

        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        if (!Auth.isUserAuthenticated()) {
            navigate('/user/login')
        }
        setPageTitle('My Account')
        setInitialValues(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <React.Fragment>
            <h4 className="font-italic d-flex mb-4">Personal information

                {!isEdit && <button
                    type="button"
                    className="btn ml-auto btn-sm btn-dark"
                    onClick={() => setIsEdit(true)} >Edit</button>
                }
            </h4>

            <div className="row">
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">First Name </label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="first_name"
                            {...bindField("first_name")}
                            placeholder="Enter first name"
                            id="fisrtNameFill"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values.first_name || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Last Name </label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="last_name"
                            {...bindField("last_name")}
                            placeholder="Enter Last Name"
                            id="lastNameFill"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values.last_name || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Email </label>
                    <div className="">
                        {values.email || '-'}
                    </div>
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Phone No </label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="phone_number"
                            {...bindField("phone_number")}
                            placeholder="Enter your Phone"
                            id="phone_number"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values.phone_number || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Date of Birth</label>
                    {isEdit ?
                        <Input
                            type="date"
                            name="dob"
                            {...bindField("dob")}
                            placeholder="Enter your DOB"
                            id="dob"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values?.dob || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Company</label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="company"
                            {...bindField("company")}
                            placeholder="Enter your company"
                            id="company"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values?.company || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-12 col-12 mb-3">
                    <label className="font-weight-bold mb-0">Address </label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="address"
                            {...bindField("address")}
                            placeholder="Enter address"
                            id="addressFill"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values.address || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">City</label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="city"
                            {...bindField("city")}
                            placeholder="Enter your City"
                            id="city"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values?.city || '-'}
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <label className="font-weight-bold mb-0">State</label>
                    {isEdit ?
                        <Input
                            type="text"
                            name="state"
                            {...bindField("state")}
                            placeholder="Enter your state"
                            id="state"
                            error={errors}
                        />
                        :
                        <div className="">
                            {values?.state || '-'}
                        </div>
                    }
                </div>
            </div>
            {isEdit &&
                <div className="row">
                    <button
                        onClick={updateProfileHandler}
                        disabled={!isValid()}
                        type="button"
                        className="btn btn-sm btn-primary mx-1">Submit</button>
                    <button
                        onClick={() => setIsEdit(false)}
                        type="button"
                        className="btn btn-sm btn-secondary mx-1">Cancel</button>
                </div>
            }
        </React.Fragment>
    );
}
export default LoggedUserProfile;