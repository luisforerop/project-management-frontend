import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import Form from "../../common/forms/Form"
import { UserContext } from "../../stateManagement/UserContext"
import styles from './Login.module.css'
import { handlerFetch } from "../../tools"

const fields = [
    {
        id: 'username',
        fieldName: "Nombre de usuario",
        fieldType: "text"
    },
    {
        id: 'password',
        fieldName: "Contraseña",
        fieldType: "password"
    }
]

const Login = props => {
    const history = useHistory();
    const { setUserInfo, setIsLogin } = useContext(UserContext);
    const [ errorValidation, setErrorValidation ] = useState(false);

    const handlerInfo = async (info, event) =>{
        event.preventDefault()
        const config = {
            url: 'http://localhost:5001/auth',
            method: 'POST',
            body: info            
        }
        const response = await handlerFetch(config)
        if(response.error) setErrorValidation(true)
        else {
            setErrorValidation(false);
            setUserInfo(response.info)
            setIsLogin(true)
            history.push('/dashboard')
        }
    }

    return(
        <Form
            styles={styles}
            fields={fields}
            getInfo={handlerInfo}
            nameButton="Iniciar sesión"
        >
            { errorValidation ? <p>Error de autenticación</p> : null}
        </Form>
    )
}

export default Login