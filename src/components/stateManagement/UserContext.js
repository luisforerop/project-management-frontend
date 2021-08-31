import { createContext, useState } from "react"
//import { Auth } from '../httpController/authSystem/authHttp'
import configApp from '../../configApp.json'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const urlEnv = process.env.NODE_ENV === 'development' ? 'localUrl' : 'productionUrl'
    const [ validate, setIsLogin ] = useState(false)
    const [ infoUser, setUserInfo ] = useState({}) // Esta info nos llega desde una función de consulta
    const [ token, setToken ] = useState(null)
    const [ currentProject, setCurrentProject ] = useState('')
    const [ url ] = useState(configApp[urlEnv] )

    const setLoginInfo = (loginInfo) => {
        const { infoUser, token, validate } = loginInfo
        setUserInfo(infoUser);
        setToken(token);
        setIsLogin(validate);
        window.localStorage.setItem('userData', infoUser)
        window.localStorage.setItem('token', token)
    }

    const logout = () => {
        setUserInfo(null);
        setIsLogin(false);
        setToken(null);
        window.localStorage.removeItem('token');
        window.localStorage.clear();
    }

    //const [context, setContext] = useState({})
    const contextApplication = {
        validate,
        infoUser,
        logout,
        setLoginInfo,
        token,
        currentProject, setCurrentProject,
        url,
    }

    return(
        <UserContext.Provider
            value={ contextApplication }
        >
            {children}
        </UserContext.Provider>
    )
}

