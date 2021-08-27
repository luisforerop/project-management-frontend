import { users } from '../../../dbSimulation'

export const Auth = ({username, password}) => {
    const userIndex = users.findIndex( user => user.username === username)
    const authorizated = userIndex >= 0 && users[userIndex]['password'] === password;
    if (authorizated){
        return users[userIndex]
    } 
    return null
}


