import { useState } from "react";
import { Card, EditableListItem, IconButton, ProfilePicture, TextArea } from "../../common/pageComponents";

const NewProject = ({user='pepe'}) => {
const [ userStories, /*setUserStories*/ ] = useState(['hola', 'hola 2'])
    const [ team, /*setTeam*/ ] = useState(['Paco'])
    const inputs = {
        title: 'Título',
        description: 'Agrega una descripción...',
    }
    const listInputs = Object.keys(inputs)

    return (
        <div>
            {listInputs.map( item => (
                <TextArea
                    description={inputs[item]}
                    key={item}
                    height={2}
                />
            ))}
            <div>
                <h2>HISTORIAS DE USUARIO</h2>
                {userStories.map((item, index) => (
                    <EditableListItem key={index}>
                        {item}
                    </EditableListItem>
                ))}
                <Card>
                    Nueva historia de usuario
                </Card>
            </div>
            <div>
                <h2>Equipo</h2>
                <ProfilePicture
                    name={user}
                    rol={'Owner'}
                />
                <br></br>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {team.map( (item, index) => (
                    <ProfilePicture
                        name={item}
                        rol={'Dev'}
                        key={index}
                    />
                    ))}
                    <IconButton
                        type='create'
                    />                    
                </div>
            </div>
            <button>
                Guardar
            </button>
        </div>
    )
}

export default NewProject;