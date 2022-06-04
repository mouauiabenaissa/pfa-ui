import React from "react";
import GlobalContext from "./GlobalContext";
import axios from "../utils/axios";
import LocalStorage from "../utils/localStorageService";
import LoadingComponent from "../Components/Loading/LoadingComponent"
const AppContext = (props) => {

    const [currentUser, setcurrentUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (LocalStorage.getAccessToken()) {
            setcurrentUser("admin")
            setLoading(false)
        } else {
            setLoading(false)
        }


    }, [])


    return (
        <GlobalContext.Provider value={
            {
                user: currentUser,
            }
        } >
            {loading ? <LoadingComponent loading /> : props.children}
        </GlobalContext.Provider>)
}
export default AppContext;
