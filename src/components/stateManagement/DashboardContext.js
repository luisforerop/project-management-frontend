// currentUserStory, currentTicket, currentProject
import {createContext, useState} from "react"
// import { Auth } from '../httpController/authSystem/authHttp'

export const DashboardContext = createContext();

export const DashboardProvider = ({children}) => {
    const [currentProject, setCurrentProject] = useState({}) // Esta info nos llega desde una función de consulta
    const [currentUserStory, setCurrentUserStory ] = useState({})
    const [currentTicket, setCurrentTicket] = useState({})

    const contextApplication = {
        currentProject,
        currentUserStory,
        currentTicket,
        setCurrentProject,
        setCurrentUserStory,
        setCurrentTicket
    }

    return(
        <DashboardContext.Provider
            value={ contextApplication }
        >
            {children}
        </DashboardContext.Provider>
    )
}
