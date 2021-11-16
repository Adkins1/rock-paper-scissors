import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
    width: 50%;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`;
export const InfoH1 = styled.h1`
    text-align: center;
    width: 100%;
    font-size: 3rem;
    background: #66ccff;
    border-radius: 40px;
    font-weight: bold;
    padding: 20px;
`;
export const BotsChoice = styled.div`
    text-align: center;
    width: 100%;
    font-size: 3rem;
    background: #66ccff;
    border-radius: 40px;
    font-weight: bold;
    padding: 20px;
`;
export const Label = styled.p`
    display: inline;
    transition: 0.3s;
`;
export const Icons = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
`;
export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    padding: 20px;
    font-size: 6rem;
    width: 150px;
    height: 150px;
    transition: 0.3s;  
    border-radius: 50%;  
    cursor: pointer;
    :hover{
        background: #66ccff;
        border-radius: 50%;
        font-size: 7rem;
        transform: rotate(0.1turn);
        transition: 0.3s;
    }
`;



