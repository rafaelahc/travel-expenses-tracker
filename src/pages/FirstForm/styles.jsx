import styled from 'styled-components';

 export const BackgroundPage = styled.div `
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.secundary};
`

export const MainContainer = styled.div `
    padding: 70px 25px;

    @media (min-width: 768px) {
        width: 600px;
        margin: 0 auto;
  }
`

export const TextPage = styled.h3 `
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 100px;
    text-align: center;
`

export const FormContainer = styled.form `
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const Label = styled.label `
    font-size: 17px;
    margin-bottom: 5px;
    font-weight: 500;
`

export const Input = styled.input `
    padding: 10px 15px;
    width: 100%;
`

export const DateInput = styled.input.attrs({ type: 'date' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    padding: 15px;
`

export const AlignCenter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const QtyPeopleBtns = styled.button `
    border: 1px solid ${(props) => props.theme.colors.secundary};;
    color: ${(props) => props.theme.colors.secundary};
    border-radius: 50%;
    background-color: transparent;
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin: 0 15px;
    font-size: 17px;

`

export const PersonIcon = styled.span `
    font-size: 20px;
`

export const NumPeople = styled.span `
    font-size: 20px;
    margin-left: 5px;
`

