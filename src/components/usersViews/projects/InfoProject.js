import { Tag, ProfilePicture, IconButton, TextArea } from '../../common/pageComponents'

const InfoProject = ({ title, description, state, team, owner }) => {
    const style = {
        width: '50vw',
        backgroundColor: 'orange',
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
                name={owner}
                rol={'Owner'}
            />
            <br></br>
            <h3>EQUIPO</h3>
            <div>
                {team.map( (dev, index) => (
                    <ProfilePicture
                        key={index}
                        name={dev}
                    />
                ))}
                <IconButton
                    type='create'
                />
            </div>
            <Tag>{state}</Tag>

        </div>
    )
}

export default InfoProject