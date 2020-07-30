import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/DisneyBG.jpeg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin:0;
        padding:0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        color: #fff;
        font-size: 70px;
        background: linear-gradient(65deg,blue,red);
        border-radius: 5px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38538;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px; 
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;

