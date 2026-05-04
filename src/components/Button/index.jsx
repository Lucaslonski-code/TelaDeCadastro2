import Proptypes from 'prop-types'
import { Button } from './styles.js'

function DefaultButton({ children, theme, ...props}){
// spread operator, o "...props" pega todas as outras propriedades que não foram desestruturadas, e passa para o componente Button.
    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: Proptypes.node.isRequired,
    theme: Proptypes.string
}

export default DefaultButton