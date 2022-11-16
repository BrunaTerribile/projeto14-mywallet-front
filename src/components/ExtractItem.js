import styled from "styled-components"

export default function ExtractItem() {
    return (
        <List>
            <li>
                <Date> 30/11 </Date>
                <Description> Almoço mãe </Description>
                <Value> 39.90 </Value>
            </li>
            <li>
                <Date> 27/11 </Date>
                <Description> Mercado </Description>
                <Value> 542,54 </Value>
            </li>
            <li>
                <Date> 26/11 </Date>
                <Description> Compras Churrasco </Description>
                <Value> 67,60 </Value>
            </li>
        </List>
    )
}

const List =  styled.div`

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 35px;
    }
`

const Date = styled.div`
    color: #C6C6C6;
    margin-right: 10px;
`

const Description = styled.div`
    width: 205px;
`

const Value = styled.div`
    color: #C70000;
`