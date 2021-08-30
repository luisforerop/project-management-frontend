import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../stateManagement/UserContext"
import Projects from "./Projects";
import {Card, FilterBar} from "../../common/pageComponents"; 
import useFetch from "../../hooks/useFetch";
import { useHistory } from "react-router";

const Dashboard = props => {
    const { infoUser, logout, companyId, url } = useContext(UserContext)
    const [ projectToRender, setProjectToRender ] = useState([]);
    const [ isFilter, setIsFilter ] = useState(false);
    const [ tryIt, setTryIt ] = useState(0)
    const [ projectList, isCharging, errorPL, fetchProjectList ] = useFetch([])
    const history = useHistory();

    useEffect(()=>{
        const config = {
            url: url + 'infoProjectsOfUser',
            method: 'POST',
            info: {userId: 'userTwo', id: 'desdereact'}
        }
        fetchProjectList(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, companyId])

    useEffect(()=>{
        // console.log('Este es el valor de pl');
        // console.log(projectList);
        if(projectList) setProjectToRender(projectList)
    }, [projectList])

    const newProject = event => {
        event.preventDefault();
        history.push('/dashboard/newProject')

    }

    return(
        // ========== VALIDAR SI EXISTE EL PROYECTO EN LA URL, DE LO CONTRARIO, REGRESAR A DASH
        <div>
            <h1>Bienvenido {infoUser?.name}</h1>
            <p>Intento {tryIt}</p>
            <button
                onClick={()=>setTryIt(tryIt + 1)}
            >
                Intentar otra vez
            </button>
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
                    <Card
                        action={newProject}
                    >
                        Nuevo proyecto
                    </Card>
                }
            </div>
            
        </div>
    )
}

export default Dashboard;