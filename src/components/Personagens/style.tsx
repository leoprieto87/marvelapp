import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ContentResult = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CardPersonagem = styled.li`
  border: 1px solid #000000;
  border-radius: 7px;
  list-style-type:none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 350px;
  margin: 10px;

  img {
    object-fit: cover;
    align-self: center;
    -webkit-transition: width .2s ease, height .2s ease;
  }

  &.hoverShow {
    img {
      height: 200px;
    }

    div{
      display: flex!important;
      width: 100px;
    }
  }
  
  &:hover {
      border: 1px solid red
  }
`;

export const DescPersonagem = styled.div`
  display: none;
`;