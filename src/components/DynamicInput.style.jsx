import styled from 'styled-components';

export const Input = styled.input `
    background: transparent;
    color: ${(props) => props.theme.colors.primary};
    border: none;
    font-size: 16px;
    font-weight: 600;
    width: ${props => props.inputSize}px;
    cursor: pointer;
`

export const InputAlternate = styled.input`
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  font-size: 14px;
  font-weight: 400;
  width: ${(props) => props.inpuSize}px;
`;