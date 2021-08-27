const Tag = ({children, color='green', isButton, handler}) =>{
    if(!handler){
        handler = () => console.log('No se que hacer');
    }
    const style = {
        borderRadius: 10,
        backgroundColor: color,
        display: 'inline-block',
        padding: '0 10px',
        color: 'white',
        margin: '2px 5px'
    }
    const styleButton = {
        ...style,
        border: 'none',
    }
    // Modificar a button para que al clickar aparezca una pantalla con info
    return(
        <div>
            {isButton ? 
                <button
                    style={styleButton}
                    onClick={handler}
                >
                    {children}
                </button> 
                :
                <span style={style}>
                    {children}
                </span>
            }
            
        </div>
    )
}

export default Tag