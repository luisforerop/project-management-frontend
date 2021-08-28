import { useState } from "react";
import { Tag, TextArea } from "../../common/pageComponents";
import { NextBackButtons } from "../../common/pageComponents/Buttons";

const Ticket = () => {
    const [ ticketState, setTicketState ] = useState(0)
    const states = {
        'Activo': 'green', 
        'En proceso': 'orange', 
        'Finalizado': 'blue', 
        'Stand-by': 'gold', 
        'Cancelado': 'red'
    }
    const statesList = Object.keys(states)
    const handlerTicketState = () => {
        let count = ticketState
        if(ticketState < statesList.length - 1){
            count ++
            console.log(count);
        } else count = 0
        setTicketState(count)
    } 
    return(
        <div>
            <NextBackButtons
            
            >
                <h2 style={{display:'inline-block'}}>
                    TICKETS
                </h2>
            </NextBackButtons>
            <TextArea
                isTitle={true}
                content='El título'
            />
            <h3>Comentarios</h3>
            <TextArea
                content='Agrega un comentario'
            />
            <Tag
                isButton={true}
                handler={handlerTicketState}
                color={states[statesList[ticketState]]}
            >
                {statesList[ticketState]}
            </Tag>
        </div>
    )
}

export default Ticket;