const FilterBar = ({listInfo, setListToRender, setIsFilter, placeholder, propertyToFilter}) => {
    const havePropsNeeded = !!listInfo && !!setListToRender && !!setListToRender
    const filter = event => {
        if(havePropsNeeded){
            const toFilter = event.target.value.toLowerCase();
            if(setIsFilter) setIsFilter(toFilter.length > 0)
            const list = listInfo.filter( item => {
                const itemToFilter = propertyToFilter ? item[propertyToFilter] : item
            return (                
                itemToFilter
                
                    .toLowerCase()
                    .includes(toFilter)
            )})
            setListToRender(list)
        } else console.log('No tenemos info');
        
    }

    return (
        <input
                    type='text'
                    placeholder={placeholder ? placeholder : 'Buscar...'}
                    onChange={filter}
                    style={{color:'black'}}
                />
    )
}

export default FilterBar