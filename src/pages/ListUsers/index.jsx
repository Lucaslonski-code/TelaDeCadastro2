import Button from '../../components/Button/'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useEffect } from 'react'

function ListUsers() {

    //TODA VEZ que a tela carrega, o useEffect é chamado, e dentro do useEffect tem a função que busca os usuários cadastrados, e depois exibe eles na tela.
    //TODA VEZ que uma variavel muda, o useEffect é chamado, e dentro do useEffect tem a função que busca os usuários 

    useEffect(() => {
        async function getUsers() {
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <TopBackground></TopBackground>
            <h1>Listagem de Usuários</h1>
            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
        </div>
    )
}

export default ListUsers