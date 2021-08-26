import { faChevronLeft, faChevronRight, faPencilAlt, faPlus, faSearch, faTrashAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { useState } from 'react'

export const Tag = ({children, color='green'}) =>{
    const style = {
        borderRadius: 10,
        backgroundColor: color,
        display: 'inline-block',
        padding: '0 10px',
        color: 'white',
        margin: '2px 5px'
    }
    // Modificar a button para que al clickar aparezca una pantalla con info
    return(
        <span style={style}>
            {children}
        </span>
    )
}

export const Card = ({ children, href='#', customStyle }) => {
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

    const aStyle = !customStyle ? style : {...style, customStyle}

    return(
        <a
            style={aStyle} href={href}
        >
            {children}
        </a>
    )
}

export const FilterBar = ({listInfo, setListToRender, setIsFilter, placeholder, propertyToFilter}) => {
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

let ims = 'https://i0.wp.com/www.wag1mag.com/wp-content/uploads/monalisa-wag1mag.jpg?fit=567%2C471'

// Cambiar profilePicture y dejar solo la imagen. Crear otro componente que sea Profile y otro que sea ProfileCard
export const ProfilePicture = ({ name, imgSrc=ims, size, rol, children}) => {
    const styleImg = {
        height: size ? size : 50,
        width: size ? size : 50,
        borderRadius: '50%',
        display: 'block',
        cursor: 'pointer'
    }

    return(
        <div style={{display: 'inline-block', margin: 20}}>
            <img
                alt={name}
                src={imgSrc}
                style={styleImg}
            />
            {children ? children:
                <div>
                    <span style={{cursor: 'pointer'}}>{name}</span>
                    <br></br>
                    {!rol ? null: <Tag>{rol}</Tag>}
                </div>
            }
        </div>
    )
}

export const IconButton = ({ type='update', action, customStyle, size }) => {
    const buttonType = {
        delete: faTrashAlt,
        update: faPencilAlt,
        read: faSearch,
        create: faPlus,
        next: faChevronRight,
        back: faChevronLeft,
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
        borderRadius: '50%',
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

export const EditableListItem =  ({children}) => {
    const style = {
        backgroundColor: 'rgb(223,233,233)',
        borderRadius: 5,
        margin: '5px 15px',
        textAlign: children ? null : 'center',
        padding: '5px 5px'
    }
    const buttonsStyle = {
        display: 'inline-block',
        float: 'right'
    }
    return(
        <div style={style}>
            {children ? 
                <>
                    {children} 
                    <div style={buttonsStyle}>
                    <IconButton
                        size={20}
                    />
                    <IconButton
                        size={20}
                        type='delete'
                        customStyle={{margin: '0 5px'}}
                    />
                    </div>
                </>
                : 
                <span style={{cursor: 'pointer'}}>
                    Nuevo criterio de aceptación
                </span>           
            }
        </div>
    )
}

export const CardNumber = ({number, title}) => {
    const styleNumber = {
        height: '100px',
        width: '100px',
        backgroundColor: 'gold', 
        fontSize: 60,
        textAlign: 'center',
        lineHeight: '100px',       
    }
    const principalStyle = {
        display: 'inline-block'
    }
    return(
        <div style={principalStyle}>
            <div style={styleNumber}>
                {number}
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export const LittleCardIcon = ({type='comment'}) => {
    const icon = {
        comment: faCommentDots,
    }
    return(
        <span>
            <FontAwesomeIcon
                icon={icon[type]}
            />            
        </span>
    )
}

export const InputData = ({description, height=1}) => {
    const style = {
        overflow: 'hidden',
        overflowWrap: 'break-word',
        resize: 'none',
        height: `${height*1.2}em`,
        padding: '0 2px'
    }
    return(
        <div>
            <textarea
                style={style}
                placeholder={description}
            >
                
            </textarea>
        </div>
    )
}

/*
export const NewItem = ({children, handler}) => {
    const [ isFilter, setIsFilter] = useState(false)
    const isFilterHandler = () => {
        //return setIsFilter
    }
    return(
        <div>
            { isFilter ? null :
                children
            }
        </div>
    )
}*/