import { Tag } from ".."

let ims = 'https://i0.wp.com/www.wag1mag.com/wp-content/uploads/monalisa-wag1mag.jpg?fit=567%2C471'

// Cambiar profilePicture y dejar solo la imagen. Crear otro componente que sea Profile y otro que sea ProfileCard
const ProfilePicture = ({ name, imgSrc=ims, size, rol, children}) => {
    const styleImg = {
        height: size ? size : 50,
        width: size ? size : 50,
        borderRadius: '50%',
        display: 'block',
        cursor: 'pointer'
    }

    return(
        <div style={{display: 'inline-block', margin: 20}}>
            <img
                alt={name}
                src={imgSrc}
                style={styleImg}
            />
            {children ? children:
                <div>
                    <span style={{cursor: 'pointer'}}>{name}</span>
                    <br></br>
                    {!rol ? null: <Tag>{rol}</Tag>}
                </div>
            }
        </div>
    )
}

export default ProfilePicture