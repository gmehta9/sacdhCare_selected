import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Auth from "../auth/Auth";
import AppContext from "../context/AppContext";
import "./loggedIn.scss";

function LoggedInPage({ userLogout }) {
    const [donationHistory, setHistoryDonation] = useState([]);
    const navigate = useNavigate();

    const { setPageTitle } = useContext(AppContext);

    const logoutHandler = () => {
        Swal.fire({
            // title: "L?",
            text: "Are you sure you want to logout?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.clear()
                    navigate('/user/login')
                }
            });
    }
    useEffect(() => {
        if (!Auth.isUserAuthenticated()) {
            navigate('/user/login')
        }
        setPageTitle('My Account')
    }, [])
    return (
        <React.Fragment>
            <section className="header">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa fa-user-circle-o mr-2"></i>
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
                                    <i className="fa fa-calendar-minus-o mr-2"></i>
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
                                    <i className="fa fa-sign-in mr-2"></i>
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
                                <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <h4 className="font-italic mb-4">Personal information</h4>
                                    <p className="font-italic text-muted mb-2">

                                    </p>
                                </div>

                                {/* Donation History */}
                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h4 className="font-italic mb-4">Bookings</h4>
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
                                            {donationHistory.length === 0 &&
                                                <tr>
                                                    <td className="text-center" colSpan="4"> No Result Found!</td>
                                                </tr>
                                            }
                                            {donationHistory && donationHistory.map((elm, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{elm.date}</td>
                                                    <td>{elm.transaction} </td>
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