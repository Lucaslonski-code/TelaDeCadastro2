import styled from 'styled-components';

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`   

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`   

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 400px;

    h3 {
        color: #fff;
        font-size:  24px;
        font-weight: 500;
        margin-bottom: 2px;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`   

export const TrashIcon= styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`   


export const AvatarUser = styled.div``