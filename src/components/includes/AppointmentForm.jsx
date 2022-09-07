import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { patterns, useForm } from "../helper/useForm";
import Swal from "sweetalert2";
import { useEffect } from "react";

function AppointmentForm() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [minDate, setMinDate] = useState();
    const { values, errors, bindField, isValid, setInitialValues } = useForm({
        validations: {
            name: {
                required: true
            },
            email: {
                pattern: {
                    value: patterns.email,
                    message: "Invalid email address.",
                },
                required: true
            },
            age: {
                required: true
            },
            phone: {
                required: true,
                pattern: {
                    value: patterns.onlyNumber,
                    message: "Invalid phone number.",
                },
                minLength: {
                    value: 10,
                    message: "Please enter 10 digit valid mobile no.",
                },
                maxLength: {
                    value: 10,
                    message: "Please enter 10 digit valid mobile no.",
                },
            },
        }
    });
    const formSubmitHandler = () => {
        setLoading(true)
        // Old 
        // emailjs.send('service_ewvvjr4', 'template_u1xgccc', values, 'TeqjHr8_9jOKqoOs0').then((response) => {
        emailjs.send('service_oylqjeo', 'template_hrtzlt8', values, 'KZwvZgpdWBJvF9RyL').then((response) => {
            console.log(response)
            Swal.fire(
                'Appointment Form submitted Successfully!',
                '',
                'success'
            )
            setLoading(false)
            setInitialValues({ age: 'male' })
        }
        ).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            setLoading(false)
        })

    }

    const getminDate = () => {
        let date = new Date()
        let dateFormate = `${date.getFullYear()}-${(date.getMonth() + 1).length === 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)}-${date.getDate() + 1}`
        setMinDate(dateFormate)
    }

    useEffect(() => {
        setInitialValues({ service: 'service-2', age: 'male' })
        getminDate()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contact-area pl-0 pl-lg-5">
            <div className="section-title">
                <h3>Request <span>Appointment</span>
                </h3>
            </div>
            <form ref={form} name="contact_form" className="default-form contact-form" onSubmit={formSubmitHandler}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                {...bindField('name')}
                                type="text"
                                placeholder="Name"
                            />
                            {errors.name && <span className="small text-danger"> {errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                {...bindField('email')}
                                placeholder="Email"
                            />
                            {errors.email && <span className="small text-danger"> {errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <select className="form-control" {...bindField('gender')}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                {...bindField('subject')}
                                placeholder="Subject"
                            />
                            {errors.subject && <span className="small text-danger"> {errors.subject}</span>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                {...bindField('phone')}
                                placeholder="Phone"
                            />
                            {errors.phone && <span className="small text-danger"> {errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="date"
                                min={minDate}
                                {...bindField('date')}
                                placeholder="Date"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                {...bindField('age')}
                                placeholder="Enter Age"
                            />
                            {errors.age && <span className="small text-danger"> {errors.age}</span>}
                        </div>
                        <div className="form-group">
                            <select className="form-control" {...bindField('service')}>
                                <option value="service-1">Service 1</option>
                                <option value="service-2">service-2</option>
                                <option value="service-3">service-3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea className="form-control" {...bindField('form_message')} placeholder="Your Message" required=""></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button
                                disabled={!isValid() || loading}
                                type="submit"
                                className="btn-style-one d-flex align-items-center justify-content-center">
                                {loading &&
                                    <div className="spinner-border text-light mr-2 " role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                                {!loading ? 'Submit now' : 'Submiting...'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AppointmentForm;