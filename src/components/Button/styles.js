import styled from 'styled-components'

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '2px solid #FE7E5D'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    margin-bottom: ${props => props.theme === 'primary' ? '0' : '20px'};

    &:hover {
        ${props => props.theme === 'primary' ? 'opacity: 0.8;' : 'background-color: #99f'};
    }

    &:active {
        ${props => props.theme === 'primary' ? 'opacity: 0.5;' : 'background-color: #99f'};
    }

`
