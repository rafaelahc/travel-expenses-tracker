import styled from 'styled-components'

export const LandingBtn = styled.button `
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.btnBackground};
    border: none;
    width: 264px;
    height: 56px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 600;
    letter-spacing: .5px;

`

export const FormBtn = styled.button `
    background-color: ${(props) => props.theme.colors.btnBackground};
    color: ${(props) => props.theme.colors.primary};
    border: none;
    padding: 13px 45px;
    width: 264px;
    height: 56px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 600;
    letter-spacing: .5px;

`

export const AddNewExpenseBtn = styled.button `
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    width: 50px;
    height: 50px;
    font-size: 40px;
    cursor: pointer;
    border-radius: 50%;
    position: fixed;
    bottom: 0;
    right: 15px;
    background-color: ${(props) => props.theme.colors.primary};;
    color: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    @media (min-width: 768px) {
        position: relative;
    }

`
