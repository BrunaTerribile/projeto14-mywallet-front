import { PageContainer, Header, Form } from "../assets/styles/style"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import dayjs from 'dayjs';
import { AuthContext } from "../context/auth";

export default function NewEntry() {
    const navigate = useNavigate()
    const [register, setRegister] = useState({description: "", value: ""})
    
    const { token }= useContext(AuthContext)
    const config = { headers: { Authorization: `Bearer ${ token }`}}

    let now = dayjs().locale('pt-br').format('DD/MM');

    function handleRegister(e){
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }

    function sendRegister(e){
        e.preventDefault();

        const URL = "http://localhost:5000/new-entry"
        const body = {
            ...register,
            date: now
        }

        axios.post(URL, body, config)
            .then((res) => {
                navigate("/extract")
            })
            .catch((err) => {
                alert(`Algo deu errado! \n${err.response.data.message} \n`)
                console.log(err)
            })
    }

    return (
        <>
            <Header><h1>Nova entrada</h1></Header>
            <PageContainer>
                <Form onSubmit={sendRegister}>
                    <input 
                        name="value"
                        placeholder="Valor"
                        type="number"
                        value={register.value}
                        onChange={handleRegister}
                        required
                    />
                    <input 
                        name="description"
                        placeholder="Descrição"
                        type="text"
                        value={register.description}
                        onChange={handleRegister}
                        required
                        />
                    <button>Salvar entrada</button>
                </Form>
            </PageContainer>
        </>
    )
}