import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import doctor from "../jsonData/doctorList.json";
function OurDoctors() {
    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Our Doctors')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <p>
                SADH has a team of doctors specialized in different fields of medicine, who have a deep desire to promote the welfare of others and help create a better world. Many of the doctors and support staff at SADH are ex-Army doctors and personnel, led by Dr.(Col.)Tarun Kaul.
            </p>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Sr. No.</th>
                        <th><strong>Doctors</strong></th>
                        <th><strong>Specialization</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {doctor.map((elm, indec) =>
                        <tr key={indec}>
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