import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import AppointmentForm from "../includes/AppointmentForm";

function Associates() {
    const { setPageTitle } = useContext(AppContext)

    useEffect(() => {
        setPageTitle('Associates')
        document.title = 'Associates | Swami Amar Dev Hospital | Sadh Care Hospital';

        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="appoinment-section section">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6">
                        <AppointmentForm />
                    </div>

                    <div className="col-lg-6 mb-4 mb-lg-0 order-0 order-lg-1">
                        <div className="content-block">
                            <div className="text-center mb-2">
                                <strong>SENTISS FOUNDATION</strong> <br />The CSR division of Sentiss Pharma<br />
                                <img
                                    src="http://staging.beforegoinglive.com/sentiss1/wp-content/uploads/2020/10/Logo-in-white-bkg-1.png"
                                    alt=""
                                    loading="auto"
                                    srcset=""
                                    className="mx-auto"
                                    style={{ width: '200px' }} />
                            </div>
                            <p>Corporate Social Responsibility (CSR) has been an integral part of Sentiss Pharma since its inception in 1990, and Sentiss Foundation has been established as the CSR division of Sentiss Pharma. The initiatives spearheaded by Sentiss Foundation, including SADH Care Hospital, have played a pivotal role in improving the lives of the communities in and around Sentiss’ operations and the society at large. The objective and motto of Sentiss Foundation is “Sharing Happiness by Enhancing Quality of Life”. With SEVA being the overarching goal of the organization, Sentiss Foundation’s programs are centred around health, education and protecting the environment.
                            </p>
                            <br />
                            <h3>Class of 1979 – St. Columba’s School, New Delhi</h3>
                            <p>
                                The Class of 1979, St. Columba’s School New Delhi, is a closely-knit Group with a strong desire to contribute towards Society in all possible ways. The members of the Class of 1979, St. Columba’s, have been involved in philanthropic initiatives by contributing either in terms of sharing their time, personal expertise in their spheres of profession, in kind (donating items & goods) or in cash (monetary support). Their contribution towards SADH is yet another example of their compassionate, charitable and kind-hearted nature.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
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
export default Associates;