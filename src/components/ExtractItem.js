import styled from "styled-components"

export default function ExtractItem({ date, description, value}) {
    return (
        <List>
            <li>
                <Date> {date} </Date>
                <Description> {description} </Description>
                <Value> {value} </Value>
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