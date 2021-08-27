import { FilterBar, Card, IconButton, LittleCardIcon } from "../../common/pageComponents"


const TicketsList = ({title, list}) =>{
    const style = {
        display: 'inline-block',
        margin: '0 5px',
        border: '1px solid white',
        borderRadius: 20,
        padding: '0 10px',
        width: '21%',
    }
    return(
        <div style={style}>
            <h3>{title}</h3>
            {!list ? null : list.map((item, index) => (
                <Card key={index}>
                    {item}
                    <br></br>
                    <LittleCardIcon/>
                </Card>
            ))}
            <Card>
                Nuevo ticket
            </Card>
        </div>
    )
}

const TicketsView = ({tickets}) => {
    const style = {
        height: '100%',
        width: '65vw',
        backgroundColor: 'blue',
        color: 'white',
        position: 'relative',
    }

    const lists = ['Activo', 'En proceso', 'Finalizado', 'Stand-by', 'Cancelado']

    return(
    <div style={style}>
        <h2>TICKETS</h2>
        <FilterBar/>
        <div>
            {lists.map(item => (
                <TicketsList
                    title={item}
                    list={tickets}
                    key={item}
                />
            ))}
        </div>
        <IconButton
            type={'create'}
            customStyle={{
                position: 'absolute',
                right: 20,
                bottom: 20,
            }}
        />
    </div>)
}

export default TicketsView