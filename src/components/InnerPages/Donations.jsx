import React, { useState } from "react";
import { toast } from "react-toastify";

import { patterns, useForm } from "../helper/useForm";
import { handleError, post } from "../httpService/http";
import Input from "../widgets/Input";

function Donations() {
    const [registeredField, setRegisteredField] = useState(false)

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            toast.error("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const orderObj = await handleError(await post(`donate`, values));
        console.log('result.data', orderObj.data)
        if (!orderObj) {
            toast.error("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, order_id, currency, first_name, email, phone_number } = orderObj.data;

        const options = {
            key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: first_name,
            description: "Donation",
            image: 'http://localhost:5000/payment/success',
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    payment_id: response.razorpay_payment_id,
                    amount: response.razorpay_order_id,
                };

                const verifyPayment = await handleError(await post(`verify-payment`, data));

                console.log('verifyPayment.data', verifyPayment)
            },
            prefill: {
                name: first_name,
                email: email,
                contact: phone_number,
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            amount: {
                required: true,
                pattern: {
                    value: patterns.onlyNumber,
                    message: "Enter vaild amount.",
                },
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
    // const displayRazorpay = () => {
    //     instance.orders.create(options, function (err, order) {
    //         console.log(order);
    //     });

    //     instance.createPayment(options);

    //     instance.on('payment.success', function (resp) {
    //         console.log("payment checking.");
    //         console.log(resp.razorpay_payment_id)
    //         console.log(resp.razorpay_order_id)
    //         console.log(resp.razorpay_signature)
    //     }); // will pass payment ID, order ID, and Razorpay signature to success handler.

    //     instance.on('payment.error', function (resp) { alert(resp.error.description) }); // will pass error object to error handler
    // }
    return (
        <>
            <form onSubmit={displayRazorpay}>
                <div className="row">

                    <div className="col-6">
                        <Input
                            labelTitle="First Name"
                            type="text"
                            name="first_name"
                            {...bindField("first_name")}
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
                            name="last_name"
                            {...bindField("last_name")}
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
                            name="phone_number"
                            {...bindField("phone_number")}
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
                            name="company"
                            {...bindField("company")}
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
                            className="btn mx-1 btn-sm btn-outline-dark">500</button>
                        <button type="button"
                            onClick={() => setAmountHandler('1000')}
                            className="btn mx-1 btn-sm btn-outline-dark">1000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('2000')}
                            className="btn mx-1 btn-sm btn-outline-dark">2000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('3000')}
                            className="btn mx-1 btn-sm btn-outline-dark">3000</button>
                        <button type="button"
                            onClick={() => setAmountHandler('')}
                            className="btn mx-1 btn-sm btn-outline-dark">Other</button>
                    </div>


                </div>
                <div className="row">
                    <div className="col-6 mt-4">
                        <button
                            type="button"
                            onClick={displayRazorpay}
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