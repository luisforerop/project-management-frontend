import React from 'react';
import { NavLink } from 'react-router-dom';
import { views } from '../../routes/views';

const Navegation = props => {  
    const Path = Object.keys(views);
    const NavStyle = {
        color: "orange",
    }
    console.log(views);
    return(
        <nav>                
            <ul>
                { Path.map( path => {
                    const { name, isPublic } = views[path]
                    return (
                        isPublic ? null :
                        <NavLink
                            to={path}
                            key={path}
                            style={{color:'red'}}
                            activeStyle={NavStyle}
                            exact
                        >
                            | {name} |
                        </NavLink>
                        
                    )
                })}
            </ul>
        </nav>
    )
}


/*

const Navegation = props => {  
    const NavStyle = {
        color: "orange",
    }
    console.log(views);
    return(
        <nav>                
            <ul>
            </ul>
        </nav>
    )
}

*/
export default Navegation;
