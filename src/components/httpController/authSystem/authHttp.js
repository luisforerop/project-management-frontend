import { users } from '../../../dbSimulation'

export const Auth = info => {
    const {username, password} = info;
    const userIndex = users.findIndex( user => user.username === username)
    const authorizated = userIndex >= 0 && users[userIndex]['password'] === password;
    if (authorizated){
        return users[userIndex]
    } 
    return null
}


