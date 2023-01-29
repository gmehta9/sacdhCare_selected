import React, { useEffect } from "react";

function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy | Swami Amar Dev Hospital | Sadh Care Hospital';

        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <section className="service-tab-section section">
                <div className="outer-box clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="service-box" >
                                    <div className="contents">
                                        <div className="section-title">
                                            <h3>Privacy Policy</h3>
                                        </div>
                                        <div className="text">
                                            <p>This privacy policy explains how sadhcare.org (also referred here as “we” and “website”) collect, use and protect the user’s (also referred here as “customer’s” and “you/ yours”) personal information details and healthcare history.  </p>
                                            <p>Your use and access to our services is subject to this privacy policy and out terms of use. </p>
                                            <p>
                                                YOUR PRIVACY IS PARAMOUNT AND WE ABIDE BY ALL STANDARDS TO MAINTAIN THE SAME AT SADHCARE.ORG. WE DO NOT SHARE, DISCLOSE OR SELL ANY OF YOUR PERSONAL INFORMATION SHARED DURING YOUR COURSE AT THE WEBSITE. AS YOU BROWSE OR REGISTER THROUGH OUR SERVICES AND OTHER CONTENT OFFERED AT THE WEBSITE, WE STRICTLY EMPLOY THE HIGHEST LEVELS OF SECURITY IN ORDER TO KEEP YOUR PERSONAL INFORMATION CONFIDENTIAL.
                                            </p>
                                            <p>
                                                WE USE COOKIE TECHNOLOGY TO EASE USER EXPERIENCE, ESPECIALLY FOR FIRST TIME USERS, AND DO NOT STORE ANY PERSONAL/ CONFIDENTIAL USER INFORMATION. HOWEVER, SOME PORTIONS FROM THE SITE MAY DIRECT YOU TO EXTERNAL LINKS WITH DIFFERENT PRIVACY POLICIES AND PRACTICES THAN SADHCARE.ORG, IN WHICH CASE, USER DISCRETION IS ADVISED.
                                            </p>
                                            <p>We reserve the right to change or modify this privacy policy, any time, at our sole discretion.</p>
                                            <ol>
                                                <li>
                                                    <p>
                                                        The information we collect.
                                                    </p>
                                                    <p>
                                                        The information collected is strictly confidential and we do not share or sell any of the personal information; however, upon your consent, we may send this information to third party tools.
                                                    </p>
                                                    <p>
                                                        Please note that denial of permission to access or use the information can render the user of services offered by us.
                                                    </p>
                                                </li>
                                                <li>
                                                    There is some set of information that is captured automatically, such as the ip address, geo coordinates and device and hardware information. Any information that is freely available in the public domain or accessible under the right to information act, 2005 or any other law will not be regarded as personal information or sensitive personal data or information
                                                </li>
                                                <li>
                                                    Information can be shared with third party tools to enhance customer experience and technical administration. The accuracy of information provided by the user is his/her own responsibility and sadhcare.org can discontinue the user-services if suspected information is found inaccurate or false.
                                                </li>
                                            </ol>
                                            <p>
                                                By using our services, you hereby consent to the privacy policy of sadhcare.org.

                                                Communicate your grievance at <a href="mailto:info@sadhcare.org">info@sadhcare.org</a>
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default PrivacyPolicy;