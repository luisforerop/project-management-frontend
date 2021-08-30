import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, Tag } from '../../common/pageComponents'
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../../stateManagement/UserContext";

const Project = ({ view, infoProject, index}) => {
    const history = useHistory();
    const { url } = useContext(UserContext)
    const { id, title, description, team, owner } = infoProject
    const [ infoTeam, , , fetchTeam ] = useFetch([])
    const [ ownerInfo, , , fetchOwner ] = useFetch({})

    useEffect(()=>{
        const config = {
            url: url + 'basicInfoUsers',
            method: 'POST',
            info: { team }
        }
        fetchTeam(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ url, team ])

    useEffect(()=>{
        const config = {
            url: url + 'basicInfoUsers',
            method: 'POST',
            info: { dev: owner }
        }
        fetchOwner(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ url, owner ])

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
            <Tag color='orange'>{ownerInfo.name}</Tag>
            {infoTeam.map(infoDev => {
                // const name = listCoworkers.find( coworker => coworker.id === devId)
                return(
                <Tag key={infoDev.id} >{infoDev.name}</Tag>
            )})}
        </div>
    )
}


const Projects = ({infoProjects}) => {
    // const { infoUser } = useContext(UserContext)
    const { setCurrentProject } = useContext (UserContext)
    // console.log(infoUser);
    const [projects, setProjects] = useState([])
    
    useEffect(()=>{
        // console.log('Este es infoP desde projects');
        // console.log(infoProjects);
        setProjects(infoProjects);
    }, [infoProjects])

    const view = (index) => {
        setCurrentProject(projects[index])
    }

    return(
        <>
            {!projects ? null : projects.map( (project, index) => {
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
