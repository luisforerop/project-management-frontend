// import { useEffect } from "react";
import { useEffect, useState } from "react";
import InfoProject from './InfoProject';
import UserStories from './UserStories';
// const { useHistory, /*Link*/ } = require("react-router-dom");

const projectInformation = {
    id: 'projectOne',
    title: 'proyecto uno',
    description: 'Ecommerce de cocacola',
    owner: 'userTwo',
    company: 'cocacola',
    userStories: [
        'company1project1us1', 
        'company1project1us2'
    ],
    team: ['userTwo', 'userThree', 'userFour'],
    state: 'active'
}


const Project = props => {
    const [ projectInfo, setProjectInfo ] = useState({})
    const [ userStoriesList, setUserStoriesList ] = useState([])
    /* MODIFICAR LA FUNCIÓN PARA ACCEDER A LA INFO */
    useEffect(()=> {
        setTimeout(()=>{
            setProjectInfo(projectInformation);
            
        }, 500)
        // console.log(projectInfo);
    }, [projectInfo])

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
                team={projectInfo.team ? projectInfo.team : []}
                title={projectInfo.title ? projectInfo.title : 'Nombre del proyecto'}
                description={projectInfo.description ? projectInfo.description : 'Descripción'}
                state={projectInfo.state ? projectInfo.state : 'Estado del proyecto'}
                owner={projectInfo.owner}
            />
            <UserStories
                userStories = {userStoriesList}
            /> 
            {/*team.map( developer => <span key={`45${developer}`}>{developer}</span>)*/}
        </div>
    )
}

export default Project;