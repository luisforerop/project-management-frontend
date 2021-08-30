import { useHistory } from 'react-router'
import { Tag, ProfilePicture, IconButton, TextArea } from '../../common/pageComponents'

const InfoProject = ({ title, description, state, team, owner }) => {
    const history = useHistory()
    
    const style = {
        width: '50vw',
        backgroundColor: 'orange',
    }

    const handlerAdd = event => {
        history.push('/dashboard/team', {team})
    }

    return (
        <div style={style}>
            <div>
                <TextArea
                    content={title}
                    isTitle={true}
                />
                <TextArea
                    content={description}
                />
            </div>
            <ProfilePicture
                name={owner.name}
                imgSrc={owner.urlProfile}
                rol={'Owner'}
            />
            <br></br>
            <h3>EQUIPO</h3>
            <div>
                {team.map( (dev) => (
                    <ProfilePicture
                        key={dev.id}
                        name={dev.name}
                        imgSrc={dev.urlProfile}
                    />
                ))}
                <IconButton
                    type='create'
                    action={handlerAdd}
                />
            </div>
            <Tag>{state}</Tag>

        </div>
    )
}

export default InfoProject