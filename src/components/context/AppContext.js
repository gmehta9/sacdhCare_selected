import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [spinner, setSpinner] = useState();
    const [pageTitle, setPageTitle] = useState();
    const [popShow, setPopShow] = useState(true);

    return (
        <AppContext.Provider
            value={{
                spinner,
                setSpinner,
                pageTitle,
                setPageTitle,
                popShow,
                setPopShow
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;