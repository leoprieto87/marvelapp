import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #222222;
    color: #e2e2e2;
    font-family: 'Bebas Neue', cursive;;
  }
  button {
    border: none;
  }
  .float {
    position: fixed;
    top: 0;
  }
`;

export const FilterElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px 20px;
  align-items: center;
  background: #1a1a1a;
  position: relative;
  z-index: 20;
`;
