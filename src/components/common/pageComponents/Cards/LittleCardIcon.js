import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LittleCardIcon = ({type='comment'}) => {
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

export default LittleCardIcon