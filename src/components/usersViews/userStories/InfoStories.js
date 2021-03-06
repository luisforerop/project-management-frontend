import { Card, CardNumber, EditableListItem, IconButton, ProfilePicture, TextArea } from "../../common/pageComponents"
import { NextBackButtons } from "../../common/pageComponents/Buttons"

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

const DescriptionArea = ({as, wantTo, asThat}) => {
    const areasToRender = {
        'Como': as,
        'Quiero': wantTo,
        'Para': asThat
    }
    const titleAreas = Object.keys(areasToRender);
    return(
        <div>
            {titleAreas.map(area => (
                <TextArea
                    key={area}
                    title={area}
                    content={areasToRender[area]}
                />
            ))}
        </div>
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
        <NextBackButtons

        >
            <h2 style={{display:'inline-block'}}>
                Historia de usuario
            </h2>
        </NextBackButtons>
        <h3>{titleProject}</h3>
        <DescriptionArea
            as={as} wantTo={wantTo} asThat={asThat}
            />
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