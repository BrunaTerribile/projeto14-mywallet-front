import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { PageContainer, Form } from "../assets/styles/style"
import { useState } from "react"
import axios from "axios"

export default function SignUp() {
    const navigate = useNavigate()
    const [form, setForm] = useState({name: "", email: "", password: ""})

    function handleForm(e) { //Armazena os estados do form conforme o usuário preenche
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function registerUser(e) {
        e.preventDefault()

        const URL = "http://localhost:5000/sign-up"
        const body = {
            ...form
        }

        axios.post(URL, body)
            .then((res) => {
                navigate("/sign-in")
            })
            .catch((err) => {
                alert(`Algo deu errado! \n${err.response.data.message} \n`)
                console.log(err)
            })
    }

    return (
        <PageContainer>
            <Logo><img src={logo} alt="logo"/></Logo>
            <Form onSubmit={registerUser}>
                <input 
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Nome"
                    type="text"
                    required
                />
                <input 
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    placeholder="E-mail"
                    type="email"
                    required
                />
                <input 
                    name="senha"
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={handleForm}
                    required
                    />
                <input 
                    name="confirm-senha"
                    placeholder="Confirme a senha"
                    type="password"
                />
                <button>Cadastrar</button>
            </Form>
            <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </PageContainer>
    )
}

const Logo = styled.div`
    padding-top: 100px;
`