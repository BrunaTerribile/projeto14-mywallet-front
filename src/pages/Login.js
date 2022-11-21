import styled from "styled-components"
import logo from "../assets/logo.svg"
import { useState, useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { PageContainer, Form } from "../assets/styles/style"
import { AuthContext } from "../context/auth";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setToken } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        const URL = "http://localhost:5000/sign-in"
        const body = {
            email,
            password
        }

        axios.post(URL, body)
            .then((res) => {
                setToken(res.data.token)
                navigate("/extract")
            })
            .catch((err) => {
                alert(`Algo deu errado! \n${err.message} \n Tente novamente mais tarde!`)
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