import styled from "styled-components"
import logo from "../assets/logo.svg"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { PageContainer, Form } from "../assets/styles/style"

export default function Login() {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        const URL = "http://localhost:5000/sign-in"
        const body = {
            email: {email},
            password: {password}
        }

        axios.post(URL, body)
            .then((res) => {
                navigate("/extract")
            })
            .catch((err) => {
                alert(`Algo deu errado! \n${err.response.data.message} \n`)
                console.log(err)
            })
    }
   
    return (
        <PageContainer>
            <Logo><img src={logo} alt="logo"/></Logo>
            <Form onSubmit={handleLogin}>
                <input 
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                    name="senha"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </PageContainer>
    )
}

const Logo = styled.div`
    padding-top: 150px;
`