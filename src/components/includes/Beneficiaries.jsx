import React from "react";
import { Link } from "react-router-dom";

function Beneficiaries() {
    return (
        <section className="Beneficiaries  bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 d-flex flex-column text-center p-3 mb-2">
                        <img className="mx-auto my-3" src={`${process.env.PUBLIC_URL}/specialities/medical-symbol.png`} alt="" />
                        <div className="counter font-weight-bold my-2">
                            57178+
                        </div>
                        <div className="title">
                            OPD Patients
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex flex-column text-center p-3 mb-2">
                        <img className="mx-auto my-3" src={`${process.env.PUBLIC_URL}/specialities/examination.png`} alt="" />
                        <div className="counter font-weight-bold my-2">
                            3564+
                        </div>
                        <div className="title">
                            Minor Surgeries
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex flex-column text-center p-3 mb-2">
                        <img className="mx-auto my-3" src={`${process.env.PUBLIC_URL}/specialities/doctor.png`} alt="" />
                        <div className="counter font-weight-bold my-2">
                            620+
                        </div>
                        <div className="title">
                            Major Surgeries
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex flex-column text-center p-3 mb-2">
                        <img className="mx-auto my-3" src={`${process.env.PUBLIC_URL}/specialities/baby.png`} alt="" />
                        <div className="counter font-weight-bold my-2">
                            190+
                        </div>
                        <div className="title">
                            Babies Born
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Beneficiaries;