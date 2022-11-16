import styled from "styled-components"
import { PageContainer, Header } from "../assets/styles/style"

export default function Extract() {
    return (
        <PageContainer>
            <Header>
                <h1>Olá, Fulano</h1>

            </Header>
            <ExtractBox>Não há registros de entrada ou saída</ExtractBox>
            <ButtonBox>
                <button>Nova entrada</button>
                <button>Nova saída</button>
            </ButtonBox>
        </PageContainer>
    )
}

const ExtractBox = styled.div`
    height: 446px;
    width: 326px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: auto;
`
const ButtonBox = styled.div`
`