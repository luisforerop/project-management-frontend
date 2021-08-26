import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../stateManagement/UserContext";
// import { HttpProjects } from "../../httpController/infoSystem/projectHttp";
import { DashboardContext } from "../../stateManagement/DashboardContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, Tag } from '../../common/pageComponents'

const Project = ({ view, infoProject, index}) => {
    const history = useHistory();
    const { id, title, description, team, owner } = infoProject
    const handlerView = () => {
        view(index)
        history.push(`/dashboard/project/${id}`, infoProject)
    }
    return(
        <div
            onClick={handlerView}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <Tag color='orange'>{owner}</Tag>
            {team.map(dev => (
                <Tag key={dev} >{dev}</Tag>
            ))}
        </div>
    )
}


const Projects = props => {
    // console.log('Estas son las props');
    // console.log(props);
    // const { infoUser } = useContext(UserContext)
    const { setCurrentProject } = useContext (DashboardContext)
    // console.log(infoUser);
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        // const infoProjects = HttpProjects(infoUser.projects)
        // console.log(infoProjects);
        const { infoProjects } = props
        setProjects(infoProjects)
    }, [props])

    const view = (index) => {
        setCurrentProject(projects[index])
    }

    return(
        <>
            {projects.map( (project, index) => {
                const { id } = project
                return (
                    <Card key={`pc${id}`}>
                        <Project
                            key={id}
                            index={index}
                            view={view}
                            infoProject={project}
                        />
                    </Card>                    
            )})}
        </>
    )
}

export default Projects;
