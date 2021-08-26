import { useEffect, useState } from "react"
import { FilterBar, ProfilePicture } from "../../common/pageComponents"

const owner = {id: 'devOne', name: 'Andres'}

const teamProject = ['devTwo', ]

const devs = ['devOne', 'devTwo', 'devThree', 'devFour', 'devFive', 'devSix', 'devSeven']

const infoDevs = [
    {
        id: 'devOne',
        name: 'Andres',
        rol: 'dev'
    }, 
    {
        id: 'devTwo',
        name: 'Aleja',
        rol: 'dev'
    },
    {
        id: 'devThree',
        name: 'Pedro',
        rol: 'dev'
    }, 
    {
        id: 'devFour',
        name: 'Sofi',
        rol: 'dev'
    }, 
    {
        id: 'devFive',
        name: 'María',
        rol: 'dev'
    },
    {
        id: 'devSix',
        name: 'Julian',
        rol: 'dev'
    }, 
    {
        id: 'devSeven',
        name: 'Lina',
        rol: 'dev'
    },
]




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

    const avaibleTeamFilter = (listaLarga, listaCorta) => {
        return listaLarga.filter( item => !listaCorta.includes(item))
    }

    const findInfo = (toFindInfo, listWithInfo) => {
        if(typeof toFindInfo === 'object') {
            let info = []
            toFindInfo.forEach(id => {
                info.push(listWithInfo.find(dev => dev.id === id))
            })
            return info
        }
        else if(typeof toFindInfo === 'string'){
            return listWithInfo.find(dev => dev.id === toFindInfo)
        }
    }

    useEffect(()=>{
        
        setProjectTeam(teamProject)
    }, [])

    useEffect(()=> {
        const listAviableTeam = avaibleTeamFilter(devs, [...projectTeam, owner.id])
        setAvailableTeam(findInfo(listAviableTeam, infoDevs))
        setTeamToRender(findInfo(listAviableTeam, infoDevs))
    }, [projectTeam])

    return(
        <div>
            <div>
                    <ProfilePicture
                        name={owner.name}
                        rol={'owner'}
            />
                {projectTeam.map((id) => {
                    const dev = findInfo(id, infoDevs)
                    return(
                        <ProfilePicture
                            key={id}
                            name={dev.name}
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
        </div>
    )
}

export default Team