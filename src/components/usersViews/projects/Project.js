import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import InfoProject from './InfoProject';
import UserStories from './UserStories';

const Project = props => {
    const [ projectInfo, setProjectInfo ] = useState({})
    const [ userStoriesList, setUserStoriesList ] = useState([])
    const [ teamInfo, setTeamInfo ] = useState([])
    const [ owner, setOwner ] = useState({})
    // ====== PUEDO ENVIAR INFO POR EL STATE DE HISTORY, PERO SI NO EXISTE, DEBO HACER LA PETICIÓN
    const history = useHistory()
    const { state } = history.location
    /* MODIFICAR LA FUNCIÓN PARA ACCEDER A LA INFO */
    useEffect(()=> {
        console.log(state); // PODEMOS USAR STATE PARA PASAR ESTADOS
        if(state){
            setProjectInfo(state.infoProject ? state.infoProject : {})
            setTeamInfo(state.infoTeam ? state.infoTeam : [])
            setOwner(state.ownerInfo ? state.ownerInfo : {})
        }
        // console.log(projectInfo);
    }, [state])

    useEffect(()=> {
        const { userStories } = projectInfo
        if(userStories){
            setUserStoriesList(userStories);
        } else {
            console.log('Aun no tenemso userStories');
        }
    }, [projectInfo, userStoriesList])
    
    useEffect(()=> {
        const { team } = projectInfo
        if(team){
            setUserStoriesList(team);
        } else {
            console.log('Aun no tenemso team');
        }
    }, [projectInfo, userStoriesList])

    const style = {
        display: 'flex'
    }
    // const history = useHistory(); 
    // useEffect()
    // console.log(history);
    // const {team} = history.location.state
    return (
        <div
            style={style}
        >
            <InfoProject 
                team={teamInfo}
                title={projectInfo?.title ? projectInfo.title : 'Nombre del proyecto'}
                description={projectInfo?.description ? projectInfo.description : 'Descripción'}
                state={projectInfo?.state ? projectInfo.state : 'Estado del proyecto'}
                owner={owner}
            />
            <UserStories
                userStories = {userStoriesList}
            /> 
            {/*team.map( developer => <span key={`45${developer}`}>{developer}</span>)*/}
        </div>
    )
}

export default Project;