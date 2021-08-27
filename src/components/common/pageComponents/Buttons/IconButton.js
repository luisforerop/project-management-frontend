import { faChevronLeft, faChevronRight, faPencilAlt, faPlus, faSearch, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconButton = ({ type='update', action, customStyle, size, isSquare }) => {
    const buttonType = {
        delete: faTrashAlt,
        update: faPencilAlt,
        read: faSearch,
        create: faPlus,
        next: faChevronRight,
        back: faChevronLeft,
        save: faSave,
    }

    const handlerAction = event => {
        if(action){
            action()
        } else {
            console.log('No se que hacer');
        }
    }

    const style = {
        // border: 'none',
        height: size ? size : 50,
        width: size ? size : 50,
        border: 'none',
        borderRadius: isSquare ? '5px': '50%',
        /*position: 'absolute',
        right: 20,
        bottom: 20,*/
        cursor: 'pointer',
        backgroundColor: 'red',
        color: 'white',
        fontSize: size ? Math.round(size * 0.45) : 20, // REVISAR CÓDIGO        
    }

    const styleButton = customStyle ? {...style, ...customStyle} : style

    return(
        <span>
            <button
                style={styleButton}
                onClick={handlerAction}
            >
                <FontAwesomeIcon
                    icon={buttonType[type]}
                />
            </button>
        </span>
    )
}

export default IconButton