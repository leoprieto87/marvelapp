import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Personagem = styled.li`
  border: 1px solid #000000;
  border-radius: 7px;
  list-style-type:none;
  cursor: pointer;
  &:hover {
      border: 1px solid red
  }
`;