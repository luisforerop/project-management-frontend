import React, { useReducer } from "react"
import FormFields from '../../common/formsComponents'


const reducer = (state, action) => {
    const {type, value} = action;
    let newState = {}
    newState[type] = value 
    return {
        ...state,
        ...newState
    }
}

const Form = (props) => {
    const {fields, getInfo, nameButton, children} = props

    const {prueba, form} = props.styles

    let initialState = {}
    fields.forEach((field) => {
        initialState[field.id] = ''
    })     
       
    const [state, dispatch] = useReducer(reducer, initialState);
    const handler =  (data) => {
        dispatch({
            type: data.id,
            value: data.value
        })        
    }

    const sendData = (e)=>{
        getInfo(state, e)
        
    }

    return(
        <div>
            <form>
                <div className={form}>
                    {fields.map((field) => (
                        <FormFields
                            key={field.id}
                            id={field.id}
                            fieldName={field.fieldName}
                            fieldType={field.fieldType}
                            parentClass={prueba}
                            data={handler}
                        />
                    ))}
                <button type="submit" name="button" onClick={sendData}>{nameButton}</button>
                {children}
                </div>
            </form>
        </div>
    )
}

export default Form