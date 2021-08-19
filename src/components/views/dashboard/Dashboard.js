import { useContext } from "react"
import { DashboardProvider } from "../../stateManagement/DashboardContext";
import { UserContext } from "../../stateManagement/UserContext"
import Projects from "../../usersViews/projects/Projects";

const Dashboard = props => {
    const { infoUser, logout } = useContext(UserContext)
    const { name } = infoUser;
    return(
        <DashboardProvider>
            <div>
                <h1>Bienvenido {name}</h1>
                <button
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
                <Projects/>
            </div>
        </DashboardProvider>
    )
}

export default Dashboard;