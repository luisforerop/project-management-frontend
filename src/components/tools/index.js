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