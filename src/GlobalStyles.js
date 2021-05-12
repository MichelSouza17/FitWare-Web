import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --Dark: #141414;
        --DarkGray: #CAC3C3;
        --light: #ffffff;
        --primary: #293CFF;
        --primaryBlack: #5D61BB;
        --secondy: #6874F1;
        --secondyLight: #A9B8FC;
        --redBlack: #C1153E;
        --accentLight: #F6C1A7;
        --accentBlack: #F9B5AC;
        --blueLight: #23B0FF;
    }

    *{
        padding: 0;
        margin: 0;
        outline: 0;

        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar{
        width: 8px;
        background-color: var(--Dark);
    }
    ::-webkit-scrollbar-track{
        background-color: var(--Dark);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 2px;
        background-color: var(--blueLight);
    }

    button{
        padding: 10px;
        font-weight: bold;
        font-size: 17px;
        color: var(--textLight);
        background-color: var(--blueLight);
        border: 1px solid var(--light);
        border-radius: 4px;

        cursor: pointer;
        transition: .2s ease-in-out;

        :hover{
            background-color: var(--blueLight);
        }

        :active{
            transform: scale(0.95);
        }

        :disabled{
            background-color: transparent;
            border: 1px solid var(--darkGray);
            color: var(--darkGray);
        }
    }

`;
