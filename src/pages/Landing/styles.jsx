import styled from 'styled-components';


export const Title = styled.h1 `
    color: ${(props) => props.theme.colors.primary};
    font-size: 64px;
    position: relative;
    font-weight: 800  
    
`

export const SubTitle = styled.span `
    color: ${(props) => props.theme.colors.btnBackground};
    font-size: 40px;
    font-weight: 700;
    margin-left: 20px;
    position: absolute;
    bottom: -40px;
    left: -2px;
`

export const Paragraph = styled.p `
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark};
`

export const Image = styled.img `
    width: 150px;
    height: 150px;
    border-radius: 50%; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    // position: absolute;

    &:nth-child(1) {
        margin-right: -35px;
    }
        
    &:nth-child(3) {
        margin-left: -35px;
    }

`
