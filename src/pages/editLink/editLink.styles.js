import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    max-height:100%;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoginContainer = styled.div`
    width: 400px;
    background-color: rgba(240,240,240);
    display: flex;
    flex-direction: column;
    padding: 30px 15px 30px 15px;
    border-radius: 5px;
`