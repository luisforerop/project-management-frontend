const CardTest = ({ children, href }) => {
    const style = {
        height: 'auto',
        width: 200,
        backgroundColor: '#fff',
        border: '1px solid black',
        marginBottom: 10,
        marginLeft: 10,
        padding: 0,
        borderRadius: '5px',
        boxShadow: '0 1px 0 #091e4240',
        cursor: 'pointer',
        display: 'block',
        maxWidth: '300px',
        minHeight: '20px',
        position: 'relative',
        textDecoration: 'none',
        zIndex: '0',
        color: 'black'
    }

    return(
        <a
            style={style} href={href ? href : '/#'}
        >
            {children}
        </a>
    )
}

export default CardTest;