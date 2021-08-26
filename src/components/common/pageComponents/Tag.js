const Tag = ({children, color}) =>{
    const style = {
        borderRadius: 10,
        backgroundColor: color ? color : 'green',
        display: 'inline-block',
        padding: '0 10px',
        color: 'white',
        margin: '2px 5px'
    }
    return(
        <span style={style}>
            {children}
        </span>
    )
}

export default Tag