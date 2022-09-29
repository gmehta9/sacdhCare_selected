import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function OurServices() {
    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Our Services')
        document.title = 'Our Services | Swami Amar Dev Hospital | Sadh Care Hospital';

        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <React.Fragment>
            <p>Swami Amar Dev Hospital boasts of state-of-the-art medical infrastructure, some which of include:</p>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th width="25%">SERVICES</th>
                        <th width="25%">GENERAL MEDICINE</th>
                        <th width="25%">OBSTETRICS AND GYNAECOLOGY</th>
                        <th width="25%">PAEDIATRICS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24&times;7 FACILITIES</td>
                        <td>Disease risk assessment, investigation &amp; management</td>
                        <td>Normal Deliveries</td>
                        <td>NICU Level &ndash; 1</td>
                    </tr>
                    <tr>
                        <td>Emergency Services</td>
                        <td>Treatment of acute &amp; chronic illnesses</td>
                        <td>Caesarean (C &ndash; Section)</td>
                        <td>Under 12 Clinic</td>
                    </tr>
                    <tr>
                        <td>Lab</td>
                        <td>Treatment of communicable disease</td>
                        <td>Preventive care &amp; family planning</td>
                        <td>Outpatient</td>
                    </tr>
                    <tr>
                        <td>X-ray</td>
                        <td>Health check-up for adults</td>
                        <td>Pre &amp; Post natal care</td>
                        <td>Inpatient</td>
                    </tr>
                    <tr>
                        <td>Pharmacy</td>
                        <td>Management of seasonal diseases</td>
                        <td>Laparoscopic gynaecology Surgeries</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Ambulance</td>
                        <td>Migraine</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Deliveries (Normal &amp; LSCS)</td>
                        <td>Pneumonia</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                <thead className="thead-dark">
                    <tr>
                        <th width="25%">Elective General and laparoscopic surgery</th>
                        <th width="25%">ORTHOPEDICS</th>
                        <th width="25%">IMAGING</th>
                        <th width="25%">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laparoscopic surgeries including Gall bladder, Prolapse rectum etc.</td>
                        <td>Diagnosis for treatment plan of orthopedic disorders</td>
                        <td>Ultrasonography</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>General abdominal surgeries including Hernia, Hydrocoele, Appendectomy, Fissure-in-Ano, Hemorrhoids etc.</td>
                        <td>Medical Management of Muscle Joint Pain</td>
                        <td>Routine x &ndash; ray of body parts (digital)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Bone Fracture treatment with splint</td>
                        <td>Special investigation with contrast &ndash; IVP, HSG</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Bone Fracture treatment with bone plate &amp; screws</td>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}
export default OurServices;