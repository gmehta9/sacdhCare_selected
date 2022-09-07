import React from "react";
import AppointmentForm from "./AppointmentForm";

function Appointment() {

    return (
        <section className="appoinment-section section bg-gray">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6">
                        <AppointmentForm />
                    </div>

                    <div className="col-lg-6 mb-4 mb-lg-0 order-0 order-lg-1">
                        <div className="appointment-image-holder ml-0 ml-lg-4">
                            <figure>
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src={`${process.env.PUBLIC_URL}/background/appoinment.jpg`}
                                    alt="Appointment"
                                />
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Appointment;