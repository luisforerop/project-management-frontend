import { useEffect, useState } from "react";
import styles from './TextArea.module.css'

const TextArea = ({content, title, isTitle, customStyle}) => {
    const [ textAreaContent, setContent ] = useState('');

    useEffect(()=>{
        setContent(content)
    }, [content])

    const handlerText = event =>{
        console.log(event.target.value)
        setContent(event.target.value)
    }

    return(
            <div style={customStyle}>
                {!title ? null : 
                    <h3 className={styles['title']}>
                        {title}
                    </h3>
                }
                <textarea
                    onChange={handlerText}
                    value={textAreaContent}
                    spellCheck={isTitle ? false : true}
                    className={`${styles['textArea']} ${isTitle ? styles['titleType'] : null}`}
                    >
                </textarea>
            </div>
    )
}

export default TextArea;