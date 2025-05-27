import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)

    const loadProfileUserData = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/sampah/user', {headers:{token}})
            if (data.success) {
                setUserData(data.userData)
            }else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    const value = {
        token, setToken,
        backendUrl, loadProfileUserData,
        userData, setUserData
        
    }

    useEffect(()=> {
        if (token) {
            loadProfileUserData()
        } else {
            setUserData(false)
        }
    },[token])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider