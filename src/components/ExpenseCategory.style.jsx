import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

export const DeleteIcon = styled(TiDeleteOutline) `
    font-size: 20px;
`

export const DivCategory = styled.div `
    background-color: ${(props) => props.theme.colors.categoriesBackground};
    padding: 25px 15px;
    margin: 5px 0;
    border-radius: 12px;
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0px' : '12px')};
    border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0px' : '12px')};
    cursor: pointer;
`

export const CatTitleAndValue = styled.h4 `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.primary};
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
`


export const Wrapper = styled.div `
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background-color: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.categoriesBackground};
    width: 100%;
    padding: 15px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    margin-top: -10px;
`

export const Expenses = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
`

export const ExpenseDescription = styled.input `
    background: transparent;
    border: none;
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
`

export const ExpenseValue = styled.input `
    background: transparent;
    border: none;
    font-size: 15px;
    font-weight: 500;
    width: 100px;
    text-align: right;
    color: ${(props) => props.theme.colors.primary};
`

export const DeleteButton = styled.button `
    background: transparent;
    border: none;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
    margin-left: 5px;
`
export const DisplayFlex = styled.div `
    display: flex;
    align-items: center;
`