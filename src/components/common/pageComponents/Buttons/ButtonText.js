const ButtonText = ({text, handler, customStyle}) => {
    const style = {
        backgroundColor: 'blue',
        border: 'none',
        borderRadius: '5px',
        fontSize: 18,
        padding: '3px 6px',
        color: 'white',
    }

    const styleButton = customStyle ? customStyle : {
        ...style, ...customStyle
    }
    if(!handler){
        handler = () => console.log('No se que hacer');
    }
    return  (
        <button
            onClick={handler}
            style={styleButton}
        >
            {text}
        </button>
    )
}

export default ButtonText