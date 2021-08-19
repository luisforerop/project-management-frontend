import styles from './FormComponent.module.css';
import React, { createRef } from 'react';

const FormFields = (params) => {
    // const [inputValue, setValue ] = useState('');
    const { id, fieldName, fieldType, parentClass, data } = params
    const info = createRef();
    const valueHandler = (event) =>{
        const {value} = event.target
        data({value, id})
        // setValue(event.target.value)

    }
    // console.log(params.parentClass);
    return(
        <div className={`${styles['group']} ${parentClass}`}>
            {/*inputValue*/}
            <input 
                type={fieldType} 
                required 
                ref={info}
                onChange={valueHandler}
                id={fieldName}
            />
            <span className={styles['slide']}></span>
            <label htmlFor={fieldName}>{ fieldName }</label>
        </div>
    )
}

export default FormFields;