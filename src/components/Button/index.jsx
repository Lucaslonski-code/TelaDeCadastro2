import { Button } from './styles.js'

function DefaultButton({ children, ...props}){
// spread operator, o "...props" pega todas as outras propriedades que não foram desestruturadas, e passa para o componente Button.
    return (
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton