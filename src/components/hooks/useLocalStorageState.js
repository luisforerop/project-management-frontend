import { useEffect, useState } from "react"

const toString = data => {
    let res;
    try {
        res = JSON.parse(data);
    } catch(err){
        res = data
    }
    return res
}

const toJSON = data => {
    const valueIsObject = data && typeof data === 'object';
    if (valueIsObject){
        data = JSON.stringify(data )
    }
}


const useLocalStorageState = (initialConfig /* {method='GET', property, initValue=null, propertyValue} */) => {
    const [ config, setConfig ] = useState(initialConfig) 
    const [ propertyInfo, setPropertyInfo ] = useState(null)
    const { localStorage } = window 
    
    useEffect(()=>{
        if(config){
            const { method='GET', property=null, propertyValue=null } = config;
            switch (method) {
                case 'GET':
                    const infoGetParsed = toString(localStorage.getItem(property))
                    setPropertyInfo(infoGetParsed)
                    break;
                case 'SET':
                    if(property && propertyValue){
                        const infoParsed = toJSON(propertyValue);
                        localStorage.setItem(property, infoParsed)
                        const infoSetParsed = toString(localStorage.getItem(property))
                        setPropertyInfo(infoSetParsed)
                    } else console.error('Error: no property or propertyValue');
                    break;
                case 'REMOVE':
                    localStorage.removeItem(property)
                    setPropertyInfo(null)
                    break;
                case 'CLEAR':
                    localStorage.clear()
                    setPropertyInfo(null)
                    break;
                default:
                    break;
        }}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ config ])
    return [ propertyInfo, setConfig, config ]
}

export default useLocalStorageState