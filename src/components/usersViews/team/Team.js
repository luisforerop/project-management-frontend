import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { ButtonText, FilterBar, ProfilePicture, Tag, } from "../../common/pageComponents"
import { useFetch } from "../../hooks"
import { UserContext } from "../../stateManagement/UserContext"

const DevTeam = ({infoDev, setTeam, projectTeam}) => {
    const handlerTeam = () => {
        console.log('hola soy ', infoDev.name)
        setTeam([...projectTeam, infoDev.id])
    }

    return(
        <div 
            style={{cursor: 'pointer', display: 'inline-block', margin: '0 5px', backgroundColor:'orange'}}
            onClick={handlerTeam}
        >
            <ProfilePicture
                name={infoDev.name}                
            />
        </div>
    )
}


const Team = () => {
    const [ availableTeam, setAvailableTeam ] = useState([])
    const [ projectTeam, setProjectTeam ] = useState([])
    const [ teamToRender, setTeamToRender ] = useState([])
    const [ owner, setOwner ] = useState({})
    const { url } = useContext(UserContext)
    const [ devsCompany, , , setFetchDevs ] = useFetch([])

    const history = useHistory();
    const { state } = history.location
    console.log(state);

    // Seteamos la información del equipo y del propietario
    useEffect(()=>{    
        if(state){
            setProjectTeam(state.team ? state.team : []) // Esto debe hacerse por consulta
            setOwner(state.owner ? state.owner : {})
        }
    }, [state])

    // Consultamos los devs que hay en la compañía
    useEffect(()=>{
        setFetchDevs({
            url: url + 'devsInACompany',
            method: 'POST',
            info: { companyId: 'companyOne'}
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    useEffect(()=>{
        console.log('Estos son los devs de la compañia');
        console.log(devsCompany);
    }, [devsCompany])

    // SETAMOS LOS DEVS DISPONIBLES

    useEffect(()=> {
        const listAviableTeam = devsCompany.filter(dev => ( projectTeam.every( devTeam => dev.id !== devTeam.id) ))
        setAvailableTeam(listAviableTeam)
        setTeamToRender(listAviableTeam)
    }, [projectTeam, devsCompany])

    return(
        <div>
            <h2>EQUIPO</h2>
            <div>
                <ProfilePicture>
                    {owner.name}<br></br>
                    <Tag color='orange'>
                        Owner
                    </Tag>
                </ProfilePicture>
                <br></br>
                {projectTeam.map((dev) => {
                    return(
                        <ProfilePicture
                            key={dev.id}
                            name={dev.name}
                            imgSrc={dev.urlProfile}
                            rol='dev'
                        />
                )})}
            </div>

            <FilterBar
                listInfo={availableTeam}
                setListToRender={setTeamToRender}
                placeholder='Busca tu equipo'
                propertyToFilter='name'
            />
            <div>
                {teamToRender.length < 1 ? 'Parece que no hay devs disponibles' : 
                    teamToRender.map((item) => {                    
                    return (
                        <DevTeam 
                            style={{cursor: 'pointer', display: 'inline-block', margin: '0 5px', backgroundColor:'orange'}}
                            key={item.id}
                            infoDev={item}
                            setTeam={setProjectTeam}
                            projectTeam={projectTeam}
                        />
                )})}
            </div>
            <ButtonText
                text='Guardar'
            />
        </div>
    )
}

export default Team