import Button from '../../components/Button/'
import TopBackground from '../../components/TopBackground'
import UsersImage from '../../assets/users.png'

function ListUsers() {
    return (
        <div>
            <TopBackground><img src={UsersImage} alt="imagem-usuarios" /></TopBackground>
            <h1>Listagem de Usuários</h1>
            <Button type='button'>Voltar</Button>
        </div>
    )
}

export default ListUsers