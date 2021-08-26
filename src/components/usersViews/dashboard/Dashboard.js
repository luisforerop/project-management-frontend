import { useContext, useEffect, useState } from "react"
import { DashboardProvider } from "../../stateManagement/DashboardContext";
import { UserContext } from "../../stateManagement/UserContext"
import Projects from "./Projects";
import {Card, FilterBar} from "../../common/pageComponents"; 


let projects = [
    {
        id: 'projectOne',
        title: 'Ecommerce',
        description: 'Ecommerce de cocacola',
        owner: 'userTwo',
        company: 'cocacola',
        userStories: [
            'company1project1us1', 
            'company1project1us2'
        ],
        team: ['userTwo', 'userThree', 'userFour'],
        state: 'active'
    },
    {
        id: 'projectTwo',
        title: 'SuperApp',
        description: 'App para disfrutar una cocacola',
        owner: 'userTwo',
        company: 'cocacola',
        userStories: [],
        team: ['userTwo'],
        state: 'standby'
    },
    {
        id: 'projectThree',
        title: 'Restreing',
        description: 'Proyecto para rastrear camiones',
        owner: 'userTwo',
        company: 'cocacola',
        userStories: [
            'company1project1us1', 
            'company1project1us2'
        ],
        team: ['userTwo', 'userThree', 'userFour'],
        state: 'active'
    },
]




const Dashboard = props => {
    const { infoUser, logout } = useContext(UserContext)
    const { name } = infoUser;
    const [ projectList, setProjectList ] = useState([]);
    const [ projectToRender, setProjectToRender ] = useState([]);
    const [ isFilter, setIsFilter ] = useState(false);

    useEffect(()=> {
        setTimeout(()=>{
            setProjectList(projects);
            setProjectToRender(projects)
        }, 500)
    }, [projectList])
    
    return(
        <DashboardProvider>
            <div>
                <h1>Bienvenido {name}</h1>
                <button
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
                <FilterBar
                    listInfo={projectList}
                    setListToRender={setProjectToRender}
                    setIsFilter={setIsFilter}
                    placeholder={'Título de proyecto'}
                    propertyToFilter={'title'}
                />
                <div style={{display: 'flex', backgroundColor: 'green'}}>
                    <Projects
                        infoProjects={projectToRender}
                    />
                    { isFilter ? null :
                        <Card>
                            Nuevo proyecto
                        </Card>
                    }
                </div>
                
            </div>
        </DashboardProvider>
    )
}

export default Dashboard;