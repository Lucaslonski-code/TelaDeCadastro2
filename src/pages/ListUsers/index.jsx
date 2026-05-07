import Button from '../../components/Button/'
import TopBackground from '../../components/TopBackground'
import Title from '../../components/Title'

import { ContainerUsers, Container, CardUsers, TrashIcon, AvatarUser} from './styles.js'
import Trash from '../../assets/trash.svg'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../../services/api'

import multiavatar from '@multiavatar/multiavatar/esm'

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

    const getAvatarDataUrl = (seed) => {
    const svgString = multiavatar(seed);
    // Codifica a string SVG para base64 para uso em Data URL
    const svg = btoa(unescape(encodeURIComponent(svgString)));
    return `data:image/svg+xml;base64,${svg}`;
};

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                    <AvatarUser src={getAvatarDataUrl(user.id)} alt={`Avatar de ${user.name}`}/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='ícone de lixeira'/>
                    </CardUsers>

                    //o "users.map" é um método de array que percorre cada elemento do array "users" e retorna um novo array com os elementos modificados.
                    //  No caso, ele está retornando um novo array de divs, onde cada div contém as informações de um usuário,
                    //  como nome, idade e email. O "key" é uma propriedade que deve ser única para cada elemento do array,
                    //  e é usada pelo React para identificar quais elementos foram modificados, adicionados ou removidos.
                    //  Nesse caso, o "key" está sendo definido como o "id" do usuário, que é uma string única para cada usuário.
                ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers