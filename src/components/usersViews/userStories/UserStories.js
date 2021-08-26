import { useEffect, useState } from "react"
import TicketsView from './TicketsView'
import InfoStories from './InfoStories'


let userStory = {
        id: 'company1project1us1',
        description: {
            as: 'cliente habitual',
            wantTo: 'comprar gaseosas online',
            asThat: 'no tener que salir de casa'
        },
        title: 'comprar gaseosas online',
        finishedCondition: [
            'Tener un carrito de compras',
            'Tener pasarela de pagos'
        ],
        priority: 70,
        cost: 50,
        owner: 'userThree',
        project: 'projectOne',
        tickets: [
            'company1project1us1t1',
        ]
    }


const UserStories = props => {
    const [ userStoryInfo, setUserStoryInfo ] = useState({})

    useEffect(()=> {
        setTimeout(()=>{
            setUserStoryInfo(userStory)
        }, 1500)
    }, [userStoryInfo])
    
    const style = {
        display: 'flex',
        height: '100vh'
    }

    return(
        <div
            style={style}
        >
            <InfoStories
                titleProject={userStoryInfo.project}
                description={userStoryInfo.description}
                acceptCondition={userStoryInfo.finishedCondition}
                cost={userStoryInfo.cost}
                priority={userStoryInfo.priority}
            />
            <TicketsView
                tickets={userStoryInfo.tickets}
            />
        </div>
    )
}
export default UserStories