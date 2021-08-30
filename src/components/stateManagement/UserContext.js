import { createContext, useState } from "react"
//import { Auth } from '../httpController/authSystem/authHttp'
import configApp from '../../configApp.json'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ validate, setIsLogin ] = useState(false)
    const [ infoUser, setUserInfo ] = useState({}) // Esta info nos llega desde una función de consulta
    // const [ listCoworkers, setListCoworkers ] = useState([])
    // const [ infoConpany, setInfoCompany ] = useState({})
    // const [ companyId, setCompanyId ] = useState(null)
    const [ token, setToken ] = useState(null)
    const [ currentProject, setCurrentProject ] = useState('')
    // const [ allData, setAllData ] = useState({})
    const [ url ] = useState(configApp['principalUrl'])

    const setLoginInfo = (loginInfo) => {
        const { infoUser, /*infoCompany, listCoworkers,*/ token, validate } = loginInfo
        setUserInfo(infoUser);
        // setInfoCompany(infoCompany);    // No es necesario, se puede hacer petición
        // setListCoworkers(listCoworkers);    // No es necesario, se puede hacer petición
        setToken(token);
        setIsLogin(validate);
        // setAllData(loginInfo);  // No es necesario, se puede hacer petición
        // setCompanyId(infoUser.company); // No es necesario, se puede hacer petición
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
        /*listCoworkers,
        infoConpany,
        companyId,
        allData,*/
        token,
        currentProject, setCurrentProject,
        url,
        //context,
        //setContext, 
    }

    return(
        <UserContext.Provider
            value={ contextApplication }
        >
            {children}
        </UserContext.Provider>
    )
}

