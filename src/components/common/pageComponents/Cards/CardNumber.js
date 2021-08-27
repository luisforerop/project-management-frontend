import { useEffect, useState } from "react"

const CardNumber = ({number, title}) => {
    const [ itemValue, setItemValue ] = useState('##')
    useEffect(()=>{
        setItemValue(number)
    }, [number])

    const handler = event => {
        setItemValue(event.target.value)
    }

    const styleNumber = {
        height: '100px',
        width: '100px',
        backgroundColor: 'gold', 
        fontSize: 60,
        textAlign: 'center',
        lineHeight: '100px',       
    }
    const principalStyle = {
        display: 'inline-block'
    }
    return(
        <div style={principalStyle}>
            <input
                type='number' 
                style={styleNumber} 
                value={itemValue}
                onChange={handler}
            />
            <h3>{title}</h3>
        </div>
    )
}

export default CardNumber