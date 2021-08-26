// import { useEffect } from "react";
import { Card, Tag, FilterBar, ProfilePicture } from '../../common/pageComponents'
import { useEffect, useState } from "react";

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



const InfoProject = ({ title, description, state, team, owner }) => {
    const style = {
        width: '50vw',
        backgroundColor: 'orange',
    }

    return (
        <div style={style}>
            <h2>{title.toUpperCase()}</h2>
            <p>{description}</p>
            <ProfilePicture
                name={owner}
                rol={'Owner'}
            />
            <br></br>
            {team.map( (dev, index) => (
                <ProfilePicture
                    key={index}
                    name={dev}
                />
            ))}
            <br></br>
            <Tag>{state}</Tag>
            <Tag color="red">
                Editar
            </Tag>

        </div>
    )
}

const UserStories = ({userStories}) => {
    const [ userStoriesList, setUsList] = useState([])
    const [ isFilter, setIsFilter] = useState(false)
    const [ usToRender, setUsToRender] = useState([])
    const style = {
        width: '50vw',
        backgroundColor: 'blue'
    }
    /**const test = (algo) => {
        console.log('Este es el test', algo);
    } */
    useEffect(()=> {
        setUsList(userStories)
        setUsToRender(userStories)
    }, [userStories])

    return(
        <div style={style}>
            <h2>HISTORIAS DE USUARIO</h2>
            <FilterBar
                listInfo={userStoriesList}
                setListToRender={setUsToRender}
                setIsFilter={setIsFilter}
                placeholder={'Buscar historia de usuario...'}
            />
            {usToRender.map((userStory, index) => (
                <Card key={index}>
                    {userStory}
                </Card>
            ))}
            { isFilter ? null :
                <Card>
                    Nueva historia de usuario
                </Card>
            }
            {/**
             * <NewItem>
                <Card>
                    Hola
                </Card>
            </NewItem>
             */}
        </div>
    )
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