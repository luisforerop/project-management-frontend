import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import Form from "../../common/forms/Form"
import { UserContext } from "../../stateManagement/UserContext"
import styles from './Login.module.css'

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

const Login = (params) => {
    const history = useHistory();
    const { auth } = useContext(UserContext);
    const [ errorValidation, setErrorValidation ] = useState(false);

    const handlerInfo = (info, event) =>{
        event.preventDefault()
        if(auth(info)) {
            setErrorValidation(false)
            history.push('/dashboard')
        }else {
            setErrorValidation(true);
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