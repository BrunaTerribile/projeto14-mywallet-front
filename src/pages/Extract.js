import styled from "styled-components"
import exit from "../assets/exit.svg"
import { useState, useEffect } from "react"
import axios from "axios"
import { PageContainer, Header } from "../assets/styles/style"
import { useNavigate } from "react-router-dom"
import ExtractItem from "../components/ExtractItem"

export default function Extract({token}) {
    const navigate = useNavigate()
    const [extract, setExtract] = useState(undefined);
    const config = { headers: { Authorization: `Bearer ${token}`}}

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/extract", config);

        promise.then(res => {
            let extractrArr = res.data
            setExtract(extractrArr)

        promise.catch(erro => {
            console.log(erro.response.data)
            });
        })

    }, []);

    if(!extract){
        return <h2>Não há registros de entrada ou saída</h2>
    }

    return (
        <>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={exit} alt='icone-saída' onClick={() => navigate('/')}/>
            </Header>
            <PageContainer>
                <ExtractBox> 
                    <List>
                        {extract.map(r => (
                            <ExtractItem 
                                date={r.date} 
                                description={r.description} 
                                value={r.value}
                            />))}
                    </List>
                    <Total>
                        <p> SALDO </p>
                        <span> 800,00 </span>
                    </Total>
                </ExtractBox>
                <ButtonBox>
                    <Btn onClick={() => navigate('/novaentrada')}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova entrada</p>
                    </Btn>
                    <Btn onClick={() => navigate('/novasaida')}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova saída</p>
                    </Btn>
                </ButtonBox>
            </PageContainer>
        </>
    )
}

const ExtractBox = styled.div`
    height: 446px;
    width: 326px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: auto;
    position: relative;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h2 {
        color: #868686;
        font-size: 20px;
        position: fixed;
        top: 270px;
        margin: auto 50px;
        text-align: center;
    }
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        color: #000000;
        font-weight: 700;
    }
`

const ButtonBox = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
`

const Btn = styled.button`
    height: 114px;
    width: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 17px;
    padding: 15px;

    p {
        padding-right: 70px;
        text-align: left;
    }

    ion-icon {
        width: 25px;
        height: 25px;
    }
`
const List = styled.ul`
    display: flex;
`

/* <h2>Não há registros de entrada ou saída</h2> */