import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import Form from "../../common/forms/Form"
import { UserContext } from "../../stateManagement/UserContext"
import styles from './Login.module.css'
import { handlerFetch } from "../../tools"
import useFetch from "../../hooks/useFetch"

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
    const { setLoginInfo, url } = useContext(UserContext);
    const [ errorValidation, setErrorValidation ] = useState(false);
    const [ data, isFetching, error, setConfig ] = useFetch();
    
    console.log([ data, isFetching, error, setConfig ]);

    const handlerInfo = async (info, event) =>{
        event.preventDefault()
        const config = {
            url: url + 'auth',
            method: 'POST',
            info            
        }   
        const response = await handlerFetch(config)
        if(response.error) setErrorValidation(true)
        else {
            //const { infoUser, token } = response;
            setErrorValidation(false);
            const loginInfo = {
                /*infoUser,
                // infoCompany,
                // listCoworkers: companyUsers,
                token,*/
                ...response,
                validate: true
            }
            setLoginInfo(loginInfo)
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