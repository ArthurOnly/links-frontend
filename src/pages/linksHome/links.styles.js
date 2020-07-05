import styled from 'styled-components';

export const LinkContainer = styled.div`
    width: 100%;
    background-color: #9c27b0;
    color: white;

    display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: space-between;
    box-sizing: border-box;

    img{
        height: 100%;
        width: auto;
        object-fit: cover;
    }

    div{
        display: flex;
        flex-direction: column;
    }
`;

export const Container = styled.div`
    width: 100vw;
    max-width:100%;
    max-height:100%;
    padding: 0 10% 0 10%;
    margin: 0;
    margin-top: 50px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

