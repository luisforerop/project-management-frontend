import { IconButton, TextArea } from "..";

const EditableListItem =  ({children}) => {
    const style = {
        backgroundColor: 'rgb(223,233,233)',
        borderRadius: 5,
        margin: '5px 15px',
        textAlign: children ? null : 'center',
        padding: '5px 5px',
        display: 'flex',
        itemAlign: 'center'
    }

    const buttonsStyle = {
        display: 'inline-block'
    }
    
    return(
        <div style={style}>
            {children ? 
                <div>
                    <TextArea
                        content={children}
                        customStyle={buttonsStyle}
                    />
                    <IconButton
                        size={20}
                        type='delete'
                        customStyle={{margin: '0 5px'}}
                    />
                </div>
                : 
                <span style={{cursor: 'pointer'}}>
                    Nuevo criterio de aceptación
                </span>           
            }
        </div>
    )
}

export default EditableListItem;

