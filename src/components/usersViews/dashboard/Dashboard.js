import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../stateManagement/UserContext"
import Projects from "./Projects";
import {Card, FilterBar} from "../../common/pageComponents"; 
import { handlerFetch } from "../../tools";
import useFetch from "../../hooks/useFetch";


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
    const { infoUser, logout, companyId, url } = useContext(UserContext)
    // const [ projectList, setProjectList ] = useState([]);
    const [ projectToRender, setProjectToRender ] = useState([]);
    const [ isFilter, setIsFilter ] = useState(false);
    const [ tryIt, setTryIt ] = useState(0)
    const [ projectList, isCharging, errorPL, fetchProjectList ] = useFetch([])

    useEffect(()=>{
        const config = {
            url: url + 'infoProjectsOfUser',
            method: 'POST',
            info: {userId: 'userThree', id: 'desdereact'}
        }
        fetchProjectList(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, companyId])

    useEffect(()=>{
        // console.log('Este es el valor de pl');
        // console.log(projectList);
        if(projectList) setProjectToRender(projectList)
    }, [projectList])
    

    // Obtener la info 
    /*useEffect(()=> {        
        console.log(infoUser);
        console.log('Este es pl');
        console.log(projectList);
    })*/

    // Petición para recibir info de projects
    /*useEffect(()=> {
        const fetchData = async(config) =>{
            const {listInfo} = await handlerFetch(config)
            setProjectList(listInfo);
            setProjectToRender(listInfo);
        }

        fetchData({
            url: url + 'infoProjectsByCompany',
            method: 'POST',
            info: {company: 'companyOne'}//{company: companyId},
        })
    }, [tryIt])*/
    
    return(
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
                    <Card>
                        Nuevo proyecto
                    </Card>
                }
            </div>
            
        </div>
    )
}

export default Dashboard;