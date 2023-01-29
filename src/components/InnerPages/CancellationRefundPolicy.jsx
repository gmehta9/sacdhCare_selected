import React, { useEffect } from "react";

function CancellationRefundPolicy() {

    useEffect(() => {
        document.title = 'Cancellation/refund policy | Swami Amar Dev Hospital | Sadh Care Hospital';

        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <section className="service-tab-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-box" >
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>Cancellation Refund Policy</h3>
                                    </div>
                                    <div className="text">
                                        <h6>Donation Refund Policy:</h6>
                                        <p>SADH Care Hospital is instituting a donation refund policy to ensure fair and transparent processing of requests for refund of donations as digital payments are becoming more frequent. It expects that all donors will exercise due care and diligence while making donations. SADH Care Hospital also recognises that a donation may be made erroneously or donors may change their mind. SADH Care Hospital will examine each request for refund of donation and endeavour to make the refund. SADH Care Hospital may also seek further information / documents and donor must co-operate in this regard. </p>
                                        <p>However, SADH Care Hospital is not obliged to make refunds and may, in its discretion, decline any requests for refund of donations, particularly if a tax exemption certificate has been issued. </p>
                                        <p>If you would like your donation to SADH Care Hospital to be refunded, </p>
                                        <p>You must request SADH Care Hospital in writing or by email for a refund and your request must reach SADH Care Hospital within 15 (fifteen) days from the date on which you made the donation i.e. the date on which you: </p>
                                        <ul>
                                            <li>
                                                - Made the donation online, electronically or through other means, OR
                                            </li>
                                            <li>
                                                - Handed over the cheque / demand draft to SADH Care Hospital or someone authorized by SADH Care Hospital for this purpose, OR
                                            </li>
                                            <li>
                                                - Dispatched the cheque / demand draft to SADH Care Hospital by other means.
                                            </li>
                                        </ul>
                                        <p>The written request stating reason for requesting refund must be sent to the address stated below and must contain all the following details pertaining to the donation:
                                        </p>
                                        <ol type="A">
                                            <li>Date of donation </li>
                                            <li>Donation amount</li>
                                            <li>If donation was made through cheque/draft, please provide Cheque/Draft no.</li>
                                            <li>If donation was made through credit card, please provide Credit Card no. (last 4 digits only).</li>
                                            <li> If donation was made online, please provide Donation-ID.</li>
                                        </ol>
                                        <h6><strong>Cancellation and Refund Policy:</strong></h6>
                                        <p>The cancellation and refund policy is only applicable to all online payments made through mobile and website for booking appointments.</p>
                                        <p>In case cancellation is initiation by end user: </p>
                                        <ol>
                                            <li>Before Schedule Appointment Time- 100% of Consultation Fees will be refunded. However, please note that convenience fees will not be refunded. </li>
                                            <li>After Scheduled Appointment Time- neither Consultation Fees nor Convenience Fees will be refunded. </li>
                                            <p>In case Cancellation is initiated by relevant hospital due to unavailability of Doctor: </p>
                                            <li>100% of consultation Fees and Convenience fees will be refunded to end user. </li>
                                        </ol>
                                        <p>
                                            At the time of cancellation, amount will be refunded via same source of payment and will be subject to the payment terms of the source only. Amount will be refunded within 7 working days.
                                        </p>
                                        <p>
                                            <strong>Address:</strong><br />
                                            SADH Care Hospital (previously known as Swami Amardev Hospital)<br />
                                            Ashram Hari Mandir, Pataudi<br />
                                            Gurugram, Haryana<br />
                                            122503<br />
                                        </p>
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
export default CancellationRefundPolicy;