import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../context/AppContext";
import doctor from "../jsonData/doctorList.json";
function OurDoctors() {
    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Our Doctors')
        window.scrollTo(0, 0);
        document.title = 'Our Doctors | Swami Amar Dev Hospital | Sadh Care Hospital';

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detailShow = (detail) => {
        if (detail?.descp) {
            Swal.fire({
                title: detail.name,
                padding: '0',
                margin: '0',
                customClass: {
                    actions: 'popup-btn',
                    confirmButton: 'p-2 py-0',
                    htmlContainer: 'text-justify'
                },
                confirmButtonText: 'X',
                html: detail?.descp,

            })
        }
    }

    return (
        <React.Fragment>
            <p>
                SADH has a team of doctors specialized in different fields of medicine, who have a deep desire to promote the welfare of others and help create a better world. Many of the doctors and support staff at SADH are ex-Army doctors and personnel, led by Dr. (Brig) Amitava Banerjee (Retd).
            </p>

            <section className="section ">
                <div className="container">

                    <div className="row justify-content-center">
                        {doctor.slice(0, 4).map((elm, indec) =>
                            <div key={indec} className="col-lg-2 co-6">
                                <div
                                    onClick={() => detailShow(elm)}
                                    className={`${elm.descp ? 'available-descp' : ''} team-member`}>
                                    <img
                                        loading="lazy"
                                        src={`${process.env.PUBLIC_URL}/${elm.image}`}
                                        alt="doctor"

                                        className="img-fluid pg-img" />
                                    <div className="contents text-center">
                                        <h6 className="mt-3">{elm.name}</h6>
                                        <p className="small">{elm.specialization}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Sr. No.</th>
                        <th><strong>Doctors</strong></th>
                        <th><strong>Specialization</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {doctor.slice(6).map((elm, indec) =>
                        <tr key={`doctor${indec}`}>
                            <td>{indec + 1}</td>
                            <td>{elm.name}</td>
                            <td>{elm.specialization}</td>
                        </tr>
                    )}
                </tbody>
            </table>


        </React.Fragment>
    );
}
export default OurDoctors;