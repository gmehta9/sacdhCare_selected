import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import "./loggedIn.scss";
import { get, handleError, post } from "../httpService/http";
import Input from "../widgets/Input";
import { patterns, useForm } from "../helper/useForm";

function LoggedInPage({ userLogout }) {

    const [donationHistory, setHistoryDonation] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate();
    const user = Auth.user()
    const { setPageTitle } = useContext(AppContext);

    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            name: {
                required: true,
            },
            phone_number: {
                minLength: {
                    value: 10,
                    message: "Enter vaild 10 digit phone no.",
                },
                maxLength: {
                    value: 10,
                    message: "Enter vaild 10 digit phone no.",
                },
                required: true,
            },

        },
    });

    const logoutHandler = () => {
        Swal.fire({
            // title: "L?",
            text: "Are you sure you want to logout?",
            icon: "warning",
            buttons: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                navigate('/user/login')
            }
        });
    }

    const updateProfileHandler = async () => {
        try {
            const response = await handleError(await post(`update-profile`, values))
            if (response.status === 200) {

            }

        } catch (err) {
            console.error(err);
        }
    }

    const getDonationHandler = async () => {
        try {
            const response = await handleError(await get(`donate`))
            if (response.status === 200) {

                setHistoryDonation(response.data)
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
        setInitialValues({
            name: user.name,
            phone_number: user.phone_number,
            email: user.email
        })
        getDonationHandler()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const dateFormateHandler = (d) => {

        const date = new Date(d)

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    return (
        <React.Fragment>
            <section className="header">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a
                                    className="nav-link mb-3 p-3 shadow active"
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true">
                                    <i className="fa fa-user-circle mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Personal information</span></a>
                                <a
                                    className="nav-link mb-3 p-3 shadow"
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fa fa-calendar-minus mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Donation History</span></a>

                                <a
                                    className="nav-link mb-3 p-3 shadow"
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                    onClick={logoutHandler}
                                >
                                    <i className="fa fa-sign mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Logout</span>
                                </a>
                                {/*
                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i className="fa fa-check mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Confirm booking</span></a> */}
                            </div>
                        </div>


                        <div className="col-md-9">

                            {/* Donation Personal information */}
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade shadow rounded bg-white show active p-4"
                                    id="v-pills-home"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-home-tab">
                                    <h4 className="font-italic d-flex mb-4">Personal information

                                        {!isEdit && <button
                                            type="button"
                                            className="btn ml-auto btn-sm btn-dark"
                                            onClick={() => setIsEdit(true)} >Edit</button>
                                        }
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="font-weight-bold mb-0">Name </label>
                                            {isEdit ?
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    {...bindField("name")}
                                                    placeholder="Enter your name"
                                                    id="nameFill"
                                                    error={errors}
                                                />
                                                :
                                                <div className="">
                                                    {values.name}
                                                </div>
                                            }
                                        </div>
                                        <div className="col-md-6 col-12 mb-3">
                                            <label className="font-weight-bold mb-0">Email </label>
                                            <div className="">
                                                {values.email}
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
                                                    {values.phone_number}
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
                                </div>

                                {/* Donation History */}
                                <div className="tab-pane fade shadow rounded bg-white p-4" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h4 className="font-italic mb-4">Donations </h4>
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th width="10%">Sr. No</th>
                                                <th width="25%">Date</th>
                                                <th width="45%">Transaction Id</th>
                                                <th width="20%">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {donationHistory?.data?.length === 0 &&
                                                <tr>
                                                    <td className="text-center" colSpan="4"> No Result Found!</td>
                                                </tr>
                                            }
                                            {donationHistory?.data && donationHistory.data.map((elm, index) =>
                                                <tr key={`donationHistory${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>{dateFormateHandler(elm.created_at)}</td>
                                                    <td>{elm.order_id} </td>
                                                    <td>{elm.amount}</td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>
                                </div>

                                {/* <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <h4 className="font-italic mb-4">Reviews</h4>
                                    <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>

                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <h4 className="font-italic mb-4">Confirm booking</h4>
                                    <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default LoggedInPage;