import { useEffect, useState } from "react";
import { useFetch } from "../hooks";
import Dashboard from "./dashboard/Dashboard";
import NewProject from "./team/newProject";
import Team from "./team";
import Ticket from "./tickets";
import Project from "./projects";
import UserStories from "./userStories";


const Test = () => {
    const url = 'http://localhost:5001/'
    const config = {
        url: url + 'auth',
        method: 'POST',
        body: {
            username: 'pepe',
            password: '1234lf'
        }
    }
    const [ hello, isChargingHello ] = useFetch({url});
    const [ data, isCharging ] = useFetch(config)

    useEffect(()=>{
        console.log(data);
    }, [ data ])

    return(
        <div>
            {isChargingHello ? 'Cargando...' : hello.response}
            {isCharging ? 'Cargando...' : data.error ? 'Error de auth' : 'Todo bien'}
        </div>
    )
}


const ViewTest = props => {
    const [ toRender, setToRender ] = useState('dash');
    const render = {
        dash: <Dashboard/>,
        project: <Project/>,
        us: <UserStories/>,
        newProject: <NewProject/>,
        team: <Team/>,
        tickets: <Ticket/>,
        httpTest: <Test/>
    }
    const itemToRender = Object.keys(render);
    return (
        <div>
            <ul>
                {itemToRender.map(item => (
                    <li
                        key={item}
                        onClick={()=> setToRender(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {render[toRender]}
        </div>
    )
}
export default ViewTest;