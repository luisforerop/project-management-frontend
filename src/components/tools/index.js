export const findInfo = (toFindInfo, listWithInfo) => {
    if(typeof toFindInfo === 'object') {
        let info = []
        toFindInfo.forEach(id => {
            info.push(listWithInfo.find(dev => dev.id === id))
        })
        return info
    }
    else if(typeof toFindInfo === 'string'){
        return listWithInfo.find(dev => dev.id === toFindInfo)
    }
}

export const handlerFetch = async ({ url, method='GET', info/*, setData, setIsFetching*/ }) => {
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
    // setIsFetching && setIsFetching(true)
    try {
        const resposeUnformat = await fetch(url, config)
        const response = resposeUnformat.json()
        return response
    } catch (err){
        return err
    }
    
    /*fetch(url, config)
        .then(res => res.json())
        .then(data => {
            return data
            // setData(data)
            // setIsFetching(false)
        })
        .catch(error => {
            return {error}
            // setData({error})
            // setIsFetching(false)
        })*/
}