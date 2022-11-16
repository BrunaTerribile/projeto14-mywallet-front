import styled from "styled-components"
import exit from "../assets/exit.svg"
import { PageContainer, Header } from "../assets/styles/style"

export default function Extract() {
    return (
        <>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={exit}/>
            </Header>
            <PageContainer>
                <ExtractBox> <h2>Não há registros de entrada ou saída</h2> </ExtractBox>
                <ButtonBox>
                    <Btn>Nova entrada</Btn>
                    <Btn>Nova saída</Btn>
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
    
    h2 {
        color: #868686;
        font-size: 20px;
        position: fixed;
        top: 270px;
        margin: auto 50px;
        text-align: center;
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
`