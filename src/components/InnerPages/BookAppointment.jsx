import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import Appointment from "../includes/Appointment";

function BookAppointment() {
    const { setPageTitle } = useContext(AppContext)

    useEffect(() => {
        setPageTitle('Book Appointment')

        document.title = 'Book Appointment | Swami Amar Dev Hospital | Sadh Care Hospital';


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Appointment />
        // <React.Fragment>
        //     <div className="col-md-8 mx-auto">
        //         <div className="contact-area pl-0 pl-lg-5 mt-0">

        //             <form name="contact_form" className="default-form contact-form " >
        //                 <div className="row">
        //                     <div className="col-md-6">
        //                         <div className="form-group">
        //                             <input className="form-control" type="text" name="Name" placeholder="Name" required="" />
        //                         </div>
        //                         <div className="form-group">
        //                             <input className="form-control" type="email" name="Email" placeholder="Email" required="" />
        //                         </div>
        //                         <div className="form-group">
        //                             <select className="form-control" name="subject">
        //                                 <option>Departments</option>
        //                                 <option>Diagnostic</option>
        //                                 <option>Psychological</option>
        //                             </select>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-6">
        //                         <div className="form-group">
        //                             <input className="form-control" type="text" name="Phone" placeholder="Phone" required="" />
        //                         </div>
        //                         <div className="form-group">
        //                             <input className="form-control" type="text" name="Date" placeholder="Date" required="" id="datepicker" autoComplete="off" />
        //                             <i className="fa fa-calendar" aria-hidden="true"></i>
        //                         </div>
        //                         <div className="form-group">
        //                             <select className="form-control" name="subject">
        //                                 <option>Doctor</option>
        //                                 <option>Diagnostic</option>
        //                                 <option>Psychological</option>
        //                             </select>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-12">
        //                         <div className="form-group">
        //                             <textarea className="form-control" name="form_message" placeholder="Your Message" required=""></textarea>
        //                         </div>
        //                         <div className="form-group text-center">
        //                             <button type="submit" className="btn-style-one">Book now</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </React.Fragment>
    );
}
export default BookAppointment;