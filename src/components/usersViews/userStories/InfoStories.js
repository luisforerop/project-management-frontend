import { Card, CardNumber, EditableListItem, IconButton, ProfilePicture } from "../../common/pageComponents"

export const AcceptCondition = ({list}) => {
    const style = {
        overflow: 'auto',
        height: '100px',
        backgroundColor: 'gold',
    }
    return (
        <>
            <h2>Condiciones de aceptación</h2>
            <div style={style}>
            {!list ? null :
            list.map((item, index) => (
                <EditableListItem key={index}>
                    {item}
                </EditableListItem>
            ))}
            <EditableListItem/> 
            <Card>
                Nuevo criterio de aceptación
            </Card>           
            </div>
        </>
    )
}


const InfoStories = ({titleProject, description, acceptCondition, cost, priority}) => {
    const style = {
        width: '35vw',
        height: '100%',
        backgroundColor: 'orange',
        position: 'relative'
    }

    const { as, wantTo, asThat } = description ? description : { undefined }

    return (
    <div style={style}>
        <h2>Historia de usuario</h2>
        <div>
            <IconButton
                type='back'
                size={25}
                customStyle={{
                    fontSize:15
                }}
            />
            <IconButton
                type='next'
                size={25}
                customStyle={{
                    fontSize:15
                }}
            />
        </div>
        <h3>{titleProject}</h3>
        <p>Como {as} quiero {wantTo} para {asThat}</p>
        <AcceptCondition
            list={acceptCondition}
        />
        <div>
            <CardNumber
                title='Costo'
                number={cost}
            />
            <CardNumber
                title='Prioridad'
                number={priority}
            />
        </div>
        <ProfilePicture>
            Hola
        </ProfilePicture>
        <IconButton
            type='update'
            customStyle={{
                position: 'absolute',
                right: 20,
                bottom: 20,
            }}
        />
    </div>)
}

export default InfoStories