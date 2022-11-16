import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { PageContainer, Form } from "../assets/styles/style"

export default function SignUp() {
    return (
        <PageContainer>
            <Logo><img src={logo} alt="logo"/></Logo>
            <Form>
                <input 
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required
                />
                <input 
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                />
                <input 
                    name="senha"
                    placeholder="Senha"
                    type="password"
                    required
                    />
                <input 
                    name="confirm-senha"
                    placeholder="Confirme a senha"
                    type="password"
                    required
                />
                <button>Cadastrar</button>
            </Form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </PageContainer>
    )
}

const Logo = styled.div`
    padding-top: 100px;
`