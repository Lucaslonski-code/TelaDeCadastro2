import { useRef } from 'react'
import api from '../../services/api'

import {
    Title, Container, Form, ContainerInputs, Input, InputLabel,
} from './styles'

import UsersImage from '../../assets/users.png'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function registerNewUser() {
            const data = await api.post('/usuarios', {
                email: inputEmail.current.value,
                name: inputName.current.value,
                age: parseInt(inputAge.current.value)
            })
            console.log(data)
    }

 

    return (
        <Container>
            <TopBackground>
                <img src={UsersImage} alt="imagem-usuarios" />
            </TopBackground>

            <Title>Cadastrar Usuário</Title>

            <Form>
                <ContainerInputs>

                    <div>
                        <InputLabel>
                            Nome<span>*</span>
                        </InputLabel>
                        <Input type="text" placeholder="Nome do usuário" ref={inputName} />
                    </div>

                    <div>
                        <InputLabel>
                            Idade<span>*</span>
                        </InputLabel>
                        <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
                    </div>

                </ContainerInputs>

                <div style={{ width: '100%' }}>
                    <InputLabel>
                        Email<span>*</span>
                    </InputLabel>
                    <Input type="text" placeholder="Email do usuário" ref={inputEmail} />
                </div>

                <Button type='button' onClick={registerNewUser}>Cadastrar</Button>

            </Form>

        </Container>
    );
}

export default Home