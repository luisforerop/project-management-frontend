import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../stateManagement/UserContext";
import { HttpProjects } from "../../httpController/infoSystem/projectHttp";
import { DashboardContext } from "../../stateManagement/DashboardContext";

const Project = ({index, title, description, view}) => {
    const handlerView = () => {
        view(index)
    }
    return(
        <div
            onClick={handlerView}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <hr></hr>
        </div>
    )
}


const Projects = props => {
    const { infoUser } = useContext(UserContext)
    const { setCurrentProject } = useContext (DashboardContext)
    
    console.log(infoUser);
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        const infoProjects = HttpProjects(infoUser.projects)
        console.log(infoProjects);
        setProjects(infoProjects)
    }, [infoUser.projects])

    const view = (index) => {
        setCurrentProject(projects[index])
        
    }

    return(
        <div>
            {projects.map( (project, index) => {
                const { id, title, description } = project
                return (
                    <Project
                        key={id}
                        title={title}
                        description={description}
                        index={index}
                        view={view}
                    />
            )})}
        </div>
    )
}

export default Projects;
