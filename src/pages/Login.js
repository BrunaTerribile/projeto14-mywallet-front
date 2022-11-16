import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { PageContainer, Form } from "../assets/styles/style"

export default function Login() {
    return (
        <PageContainer>
            <Logo><img src={logo} alt="logo"/></Logo>
            <Form>
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
                <button>Entrar</button>
            </Form>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </PageContainer>
    )
}

const Logo = styled.div`
    padding-top: 150px;
`