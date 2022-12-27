import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'StratosSkyeng';
        src: local('StratosSkyeng'), local('StratosSkyeng'),
            url('../../fonts/Stratos-Mefium.woff2') format('woff2'),
            url('../../fonts/Stratos-Medium.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: StratosSkyeng, sans-serif;
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

    input {
        :focus {
            outline: none;
            border: none;
        }
    }
`;

export default GlobalStyles;
