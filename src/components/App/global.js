import { createGlobalStyle } from "styled-components";    

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        transition: all 0.2s ease-out;
        text-align: center;
        cursor: pointer;
        border: none;
        outline: none;
        
        :hover,
        :active {
            border: none;
            outline: none;
        }
    }
`

export default GlobalStyles


