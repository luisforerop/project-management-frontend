import {createContext, useState} from "react"
import { Auth } from '../httpController/authSystem/authHttp'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [infoUser, setUserInfo] = useState({}) // Esta info nos llega desde una función de consulta
    const [validate, setIsLogin ] = useState(false)
    const logout = () => {
        setUserInfo(null);
        setIsLogin(false);
    }

    const auth = data => {
        const dataUser = Auth(data);
        if (dataUser){
            setIsLogin(true);
            setUserInfo(dataUser)
            return true
        } else return false
        
    }
    const [context, setContext] = useState({})
    const contextApplication = {
        validate,
        infoUser,
        logout,
        auth,
        context,
        setContext,

    }

    return(
        <UserContext.Provider
            value={ contextApplication }
        >
            {children}
        </UserContext.Provider>
    )
}

