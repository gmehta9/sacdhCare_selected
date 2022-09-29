import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [spinnerShow, setSpinnerShow] = useState(false);
    const [pageTitle, setPageTitle] = useState();
    const [popShow, setPopShow] = useState(true);

    return (
        <AppContext.Provider
            value={{
                spinnerShow,
                setSpinnerShow,
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