import styled from "styled-components";

// Estilizando o modal
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  max-width: 600px;
  width: 100%;

  background:  ${(props) => props.theme.colors.secundary};
  border-radius: 10px;

  padding: 30px 20px;
  margin: 20px;

  position: relative;

`;

export const SearchBox = styled.div `
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
`;


export const SearchBtn = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    padding: 7px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-left: 5px;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
    color:  ${(props) => props.theme.colors.primary};

`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px;
`;
