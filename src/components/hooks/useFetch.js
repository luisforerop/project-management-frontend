import { useEffect, useState } from "react"
/*
const handlerFetch = async ({ url, method='GET', info}) => {
    const body = info && JSON.stringify(info)
    console.log('Handler fetch');
    console.log(body);
    const config = method === 'GET' ? null: {
        method,
        headers: {
            'Content-Type': 'application/json'            
        },
        body 
    }

    fetch(url, config)
        .then(res => res.json())
        .then(data => {})

    try {
        const resposeUnformat = await fetch(url, config)
        const response = resposeUnformat.json()
        return response
    } catch (err){
        return err
    }
}*/

/*
const useFetch2 = (initialConfig) => {
    const [ urlState, setUrl ] = useState(null)
    const [ config, setConfig ] = useState(null)
    const [ data, setData ] = useState(null);
    const [ isFetching, setIsFetching ] = useState(true);
    const [ error, setError ] = useState(null)
    // const [ isInstantTrigger, setIsInstantTrigger ] = useState(false)
    // Crear un estado que verifica si en la primera invocación llega algo
    console.log('Esta es initial COnfig');
    console.log(initialConfig);
    
    /*useEffect(()=>{
        if(initialConfig) setIsInstantTrigger(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // SETEAMOS UNA CONFIGURACIÓN INICIAL
    useEffect(()=>{
        console.log('Se diparó initial config');
        if(initialConfig){
            const config = {
                method: initialConfig.method || 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: initialConfig.info && JSON.stringify(initialConfig.info)
            }
            setUrl(initialConfig.url);
            setConfig(config);
        }
    }, [initialConfig])

    useEffect(()=>{
        if(urlState){
            console.log(config);
            setIsFetching(true)
            const handlerFetch = async (url, config) => {
                try {
                    const resposeUnformat = await fetch(url, config)
                    const response = resposeUnformat.json()
                    setData(response)
                    setIsFetching(false)
                } catch (err){
                    setError(err)
                }
            }
            handlerFetch(urlState)
        }
    }, [urlState, config])
    // Vetificar el tipo de retorno
    // return isInstantTrigger ? [data, isFetching, error] : [ data, isFetching, error, setConfig ]
    return [ data, isFetching, error, setConfig ]
}*/



const useFetch = (initDataValue) => {
    const [ urlState, setUrl ] = useState(null)
    const [ config, setConfig ] = useState(null)
    const [ data, setData ] = useState(initDataValue);
    const [ isFetching, setIsFetching ] = useState(true);
    const [ error, setError ] = useState(null)

    const setConfigAndUrl = (initialConfig) => {
        if(initialConfig){
            const configSettings = {
                method: initialConfig.method || 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: initialConfig.info && JSON.stringify(initialConfig.info)
            }
            setUrl(initialConfig.url);
            setConfig(configSettings);
        }
    }

    useEffect(()=>{
        if(urlState){
            setIsFetching(true);
            const handlerFetch = async (url, config) => {
                try {
                    const resposeUnformat = await fetch(url, config)
                    const response = await resposeUnformat.json()
                    setData(response)
                    setIsFetching(false)
                } catch (err){
                    console.log('Tenemos un error:', err);
                    setError(err)
                }
            }
            handlerFetch(urlState, config)
        }
    }, [urlState, config])
    return [ data, isFetching, error, setConfigAndUrl ]
}


/*
const useFetch2 = ({ url, method='GET', body }) => {
    const [ data, setData ] = useState(null);
    const [ isFetching, setIsFetching ] = useState(true);
    
    const config = method === 'GET' ? null: {
        method,
        headers: {
            'Content-Type': 'application/json'            
        },
        body: body && JSON.stringify(body)
    }

    useEffect(()=>{
        console.log(config);
        setIsFetching(true)
        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                console.log('respuesta parseada');
                console.log(data);
                setData(data)
                setIsFetching(false)
            })
    }, [url])
    return [ data, isFetching ]
}
*/

export default useFetch