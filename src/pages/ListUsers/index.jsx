import Button from '../../components/Button/'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'

function ListUsers() {
    const [users, setUsers] = useState([])

    //TODA VEZ que a tela carrega, o useEffect é chamado, e dentro do useEffect tem a função que busca os usuários cadastrados, e depois exibe eles na tela.
    //TODA VEZ que uma variavel muda, o useEffect é chamado, e dentro do useEffect tem a função que busca os usuários 



    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            
            setUsers(data)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <TopBackground></TopBackground>
            <h1>Listagem de Usuários</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h2>Nome:{user.name}</h2>
                    <p>Idade: {user.age}</p>
                    <p>Email: {user.email}</p>
                </div>
                //o "users.map" é um método de array que percorre cada elemento do array "users" e retorna um novo array com os elementos modificados.
                //  No caso, ele está retornando um novo array de divs, onde cada div contém as informações de um usuário,
                //  como nome, idade e email. O "key" é uma propriedade que deve ser única para cada elemento do array,
                //  e é usada pelo React para identificar quais elementos foram modificados, adicionados ou removidos.
                //  Nesse caso, o "key" está sendo definido como o "id" do usuário, que é uma string única para cada usuário.
            ))}

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
        </div>
    )
}

export default ListUsers