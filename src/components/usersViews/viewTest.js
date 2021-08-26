import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";
import NewProject from "./modals/newProject";
import Team from "./modals/team";
import Project from "./projects/Project";
import UserStories from "./userStories/UserStories";


const ViewTest = props => {
    const [ toRender, setToRender ] = useState('dash');
    const render = {
        dash: <Dashboard/>,
        project: <Project/>,
        us: <UserStories/>,
        newProject: <NewProject/>,
        team: <Team/>
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