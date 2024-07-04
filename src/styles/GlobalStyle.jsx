import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        line-height: .8;

    }

    input, select {
        border-radius: 5px;
        border:none;
    
    }

    input:focus {
        outline: none;
    
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

    input[type=number] {
        -moz-appearance: textfield; /* Firefox */
    }

}
`