import { useEffect, useState } from "react"

const useFetch = ({ url, method='GET', body }) => {
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

const useFetch2 = ({ url, method='GET', body }) => {
    const initConfig = method === 'GET' ? null: {
        method,
        headers: {
            'Content-Type': 'application/json'            
        },
        body: body && JSON.stringify(body)
    } 
    const [ config, setConfig ] = useState(initConfig)
    const [ data, setData ] = useState(null);
    const [ isFetching, setIsFetching ] = useState(true);


    useEffect(()=>{
        if(url){

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
        }


    }, [url])
    return [ data, setConfig, isFetching ]
}


export default useFetch