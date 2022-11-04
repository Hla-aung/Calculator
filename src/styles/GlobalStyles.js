import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .wrapper {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: all 0.3s linear;
    }
`;

export const lightTheme = {
    body: "white",
    text: "black"
}

export const darkTheme = {
    body: "black",
    text: "white"
}