import { Card, FilterBar } from '../../common/pageComponents'
import { useEffect, useState } from "react";
const UserStories = ({userStories}) => {
    const [ userStoriesList, setUsList] = useState([])
    const [ isFilter, setIsFilter] = useState(false)
    const [ usToRender, setUsToRender] = useState([])
    const style = {
        width: '50vw',
        backgroundColor: 'blue'
    }
    /**const test = (algo) => {
        console.log('Este es el test', algo);
    } */
    useEffect(()=> {
        setUsList(userStories)
        setUsToRender(userStories)
    }, [userStories])

    return(
        <div style={style}>
            <h2>HISTORIAS DE USUARIO</h2>
            <FilterBar
                listInfo={userStoriesList}
                setListToRender={setUsToRender}
                setIsFilter={setIsFilter}
                placeholder={'Buscar historia de usuario...'}
            />
            {usToRender.map((userStory, index) => (
                <Card key={index}>
                    {userStory}
                </Card>
            ))}
            { isFilter ? null :
                <Card>
                    Nueva historia de usuario
                </Card>
            }
            {/**
             * <NewItem>
                <Card>
                    Hola
                </Card>
            </NewItem>
             */}
        </div>
    )
}

export default UserStories