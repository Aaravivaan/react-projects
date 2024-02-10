import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    return <AppContext.Provider value="ASR-WEB">
        {children}
    </AppContext.Provider>
}


// define global custom hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,  AppProvider, useGlobalContext};