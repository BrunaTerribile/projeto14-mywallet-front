import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        font-family: 'Raleway';
        font-size: 15px;
	    font-weight: 700;
	    color: #FFFFFF;
        text-decoration: none;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 25px;
`

export const Header = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;

    h1 {
        font-family: 'Raleway';
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }
`