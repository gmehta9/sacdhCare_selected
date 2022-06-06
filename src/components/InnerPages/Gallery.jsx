import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function Gallery() {

    const { setPageTitle } = useContext(AppContext);

    useEffect(() => {
        setPageTitle('Gallery')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            Gallery
        </React.Fragment>
    );
}
export default Gallery;