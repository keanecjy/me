import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 500;
    max-width: 100vw;
    transition: all 0.25s linear;
  }
  
  .app h1 {
    font-size: 1.8em;
    font-weight: bolder;
  }

  .app h2 {
    font-size: 1.3em;
    font-weight: bold;
    margin: 1.4em 0 0.8em 0;
    text-decoration: underline;
  }
  
  .app h3 {
    color: ${({ theme }) => theme.header3};
    font-size: 0.9em;
    font-weight: 600;
  }
  
  .app a {
    color: inherit !important;
    display: inline-block;
    text-decoration: none;
    width: fit-content;
  }

  .app a:hover {
    color: inherit;
    text-decoration: none;
  }

  .app a::after {
    background: ${({ theme }) => theme.text};
    content: '';
    display: block;
    height: 2px;
    transition: 300ms;
    width: 0;
  }
  
  .app button:focus {
    outline: none;
  }
  
  .main-app {
    align-items: center;
    justify-content: center;
    padding: 0 5vw;
  }

  .intro-and-about {
    width: 90%;
  }
  
  input,
  textarea {
    font-weight: 600;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media screen and (min-width: 760px) {
    .app {
      font-size: 21px;
    }
  
    .intro-and-about {
      width: 80%;
    }
  
    .main-app {
      padding: 0 7vw;
    }
  }
  
  @media screen and (min-width: 992px) {
    .empty-space {
      height: 40px;
      margin-top: 180px;
    }
  }
  
  /* Desktop monitors */
  @media only screen and (min-width: 1600px) {
    .intro-and-about {
      width: 70%;
    }
  
    .main-app {
      padding: 0 10vw;
    }
  
    .app h1 {
      font-size: 2em;
    }
  
    .app h2 {
      font-size: 1.4em;
    }
  }
`;
