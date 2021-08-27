import { IconButton } from '.'
const NextBackButtons = ({ next, back, children}) => {
    const handlerDefaultNext = () => next || console.log('No se cual es el anterior')
    const handlerDefaultBack = () => back || console.log('No se cual es el siguiente')
    return(
        <div>
            <IconButton
                type='back'
                size={25}
                customStyle={{
                    fontSize:15
                }}
                action={handlerDefaultNext}
            />
            {children}
            <IconButton
                type='next'
                size={25}
                customStyle={{
                    fontSize:15
                }}
                action={handlerDefaultBack}
            />
        </div>
    )
}

export default NextBackButtons