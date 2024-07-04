import styled from 'styled-components';

export const Flex = styled.div `
    background-color: ${(props) => props.theme.colors.secundary};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    width: 100%;
    height: 100vh;
`

export const AlignCenter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

`

export const DivIcons = styled.div `
    display: flex;
    justify-content: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.dark};
    font-size: 1.4rem;
    margin-top: 10px;
`

export const ImagesDivLanding = styled.div `
    display: flex;
    justify-content: center;

`
