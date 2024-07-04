import styled from 'styled-components';

export const ContainerMedia = styled.div `
    @media (min-width: 768px) {
        width: 600px;
        margin: 0 auto;
    }
`

export const Container = styled.div `
    background-color: ${(props) => props.theme.colors.secundary};
    padding: 50px 25px;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

`

export const MainContent = styled.div `
    display: flex;
    flex-direction: column;
    
`

export const MainContentTitle = styled.p `
    font-size: 12px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    
`