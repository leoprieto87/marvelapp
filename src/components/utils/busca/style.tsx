import styled from "styled-components";

export const SearchInput = styled.input`
    font-size: 0.9em;
    color: #444444;
    padding: 7px 15px;
    border-radius: 7px;
    border: none;
    margin: 0 20px;
`;
export const SearchButton = styled.button`
    width: auto;
    height: 70%;
    padding: 4px 15px;
    display: flex;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    margin: 10px 0;


    border: 2px solid #ec1d24;
    color: #ec1d24;
    border-radius: 7px;
    font-family: 'Roboto';
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 700;
    &:hover {
        background: #ec1d24;
        color: #ffffff;
  }
}
`;