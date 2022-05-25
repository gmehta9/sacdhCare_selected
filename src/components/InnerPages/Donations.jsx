import React, { useState } from "react";

import { patterns, useForm } from "../helper/useForm";
import Input from "../widgets/Input";

function Donations() {
    const [registeredField, setRegisteredField] = useState(false)

    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            name: {
                required: true,
            },
            amount: {
                required: true,
                pattern: {
                    value: patterns.onlyNumber,
                    message: "Enter vaild amount.",
                },
            },
            phone_no: {
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
            email: {
                pattern: {
                    value: patterns.email,
                    message: "Invalid email address.",
                },
                required: true,
            },

        },
    });

    const setAmountHandler = (rs) => {
        setInitialValues(pre => {
            return { ...pre, amount: rs }
        })
    }
    console.log(values)
    return (
        <>
            <form>
                <div className="row">

                    <div className="col-6">
                        <Input
                            labelTitle="First Name"
                            type="text"
                            name="name"
                            {...bindField("name")}
                            placeholder="Enter your name"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>

                    <div className="col-6">
                        <Input
                            labelTitle="Last Name"
                            type="text"
                            name="name"
                            {...bindField("name")}
                            placeholder="Enter your name"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>

                    <div className="col-6">
                        <Input
                            labelTitle="Phone No"
                            type="text"
                            name="phoneNo"
                            {...bindField("phoneNo")}
                            placeholder="Enter your phone no"
                            id="phoneNo"
                            error={errors}
                        // requried={true}
                        />
                    </div>

                    <div className="col-6">
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
                    </div>
                    <div className="col-6">
                        <Input
                            labelTitle="Address"
                            type="text"
                            name="address"
                            {...bindField("address")}
                            placeholder="Enter your address"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>
                    <div className="col-6">
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
                    <div className="col-6">
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

                    <div className="col-6">
                        <Input
                            labelTitle="Company Name"
                            type="text"
                            name="name"
                            {...bindField("company_name")}
                            placeholder="Enter your name"
                            id="namefill"
                            error={errors}
                        // requried={true}
                        />
                    </div>

                    {/* <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                    </div>
                    {registeredField &&
                        <>
                            <div className="col-6">
                                <Input
                                    labelTitle="Password"
                                    type="password"
                                    name="password"
                                    {...bindField("password")}
                                    placeholder="Enter your password"
                                    id="Password"
                                    error={errors}
                                // requried={true}
                                />
                            </div>
                            <div className="col-6">
                                <Input
                                    labelTitle="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    {...bindField("confirmPassword")}
                                    placeholder="Enter your Confirm Password"
                                    id="confirmPassword"
                                    error={errors}
                                // requried={true}
                                />
                            </div>
                        </>
                    } */}

                    <div className="col-6">
                        <Input
                            labelTitle="Amount"
                            type="number"
                            name="amount"
                            {...bindField("amount")}
                            placeholder="Enter your amount"
                            id="amount"
                            error={errors}
                        // requried={true}
                        />
                        <button type="button"
                            onClick={() => setAmountHandler('500')}
                            class="btn mx-1 btn-sm btn-outline-dark">500</button>
                        <button type="button"
                            onClick={() => setAmountHandler('1000')}
                            class="btn mx-1 btn-sm btn-outline-dark">1000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('2000')}
                            class="btn mx-1 btn-sm btn-outline-dark">2000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('3000')}
                            class="btn mx-1 btn-sm btn-outline-dark">3000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('')}
                            class="btn mx-1 btn-sm btn-outline-dark">Other</button>
                    </div>


                </div>
                <div className="row">
                    <div className="col-6 mt-4">
                        <button
                            type="button"
                            disabled={!isValid()}
                            className="btn btn-primary btn-block mb-4">
                            Pay {values.amount && values.amount + '/-'}
                        </button>
                    </div>
                </div>
            </form >
        </>
    );
}
export default Donations;