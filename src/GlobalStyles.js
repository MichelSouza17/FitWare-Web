import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --Dark: #141414;
        --DarkGray: #f0e6e6;
        --BlueLight: #0284a1;
        --BlueDark: #023ceb;
        --RedTransparent: #EF233C;
        --textLight: #f0f3f5;
        --lightTransparent: #d6d6d6;
        --light: #ffffff;
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
        background-color: var(--RedTransparent);
    }

    button{
        padding: 10px;
        font-weight: bold;
        font-size: 17px;
        color: var(--textLight);
        background-color: var(--BlueLight);
        border: 1px solid var(--light);
        border-radius: 4px;

        cursor: pointer;
        transition: .2s ease-in-out;

        :hover{
            background-color: var(--BlueDark);
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
