import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";

export const FlexHeader = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

export const HelloUser = styled.p `
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 500;
`

export const BackgroundPhoto = styled.div.attrs(props => ({
    
    style: {
        backgroundImage: `url(${props.backgroundImage})`
    }
}))`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 30px;
    padding: 10px;
    background-position: center;
    background-size: cover;
    width: 380px;
    height: 244px;
    position: relative;
    background-color: ${(props) => props.theme.colors.categoriesBackground};
    box-shadow: 5px 5px 10px rgba(0, 0 , 0 , 0.1);
    width: 100%;
    
}
` 
export const AddBgImage = styled.button `
    position: absolute;
    top: -34px;
    right: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
}
`

export const MainInfo = styled.div `
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 20px; 
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 10px;
` 

export const MainInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

export const Destination = styled.p `
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 0;
`

export const StyledLocationMarker = styled(HiLocationMarker)`
    font-size: 18px;
    margin-right: 5px;
`

export const TravelDate = styled.p `
    font-size: 10px;
    font-weight: 500;
    margin: 5px 0 0 25px;
`

export const TotalHeader = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 25px;
    padding: 20px;
` 

export const TotalTitle = styled.p `
    color: ${(props) => props.theme.colors.secundary};
`

export const TotalAndSymbolDiv = styled.div `
    display: flex;
    align-items: center;
`



export const Total = styled.input `
    background-color: transparent;
    color: ${(props) => props.theme.colors.btnBackground};
    border: none;
    font-size: 40px;
    font-weight: 600;
`



