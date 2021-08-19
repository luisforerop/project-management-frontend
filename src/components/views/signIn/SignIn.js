import React from "react"
import Form from "../../common/forms/Form"
import styles from './SignIn.module.css'

const fields = [
    {
        id: 'name',
        fieldName: "Nombre",
        fieldType: "text"
    },
    {
        id: 'username',
        fieldName: "Nombre de usuario",
        fieldType: "text"
    },
    {
        id: 'email',
        fieldName: "Email",
        fieldType: "email"
    },
    {
        id: 'password',
        fieldName: "Contraseña",
        fieldType: "password"
    }
]

const SignIn = (params) => {
    const handlerInfo = (info) =>{
        console.log('Info desde sigin');
        console.log(info);
    }
    return(
        <Form
            styles={styles}
            fields={fields}
            getInfo={handlerInfo}
            nameButton="Registrarse"
        />
    )
}

export default SignIn