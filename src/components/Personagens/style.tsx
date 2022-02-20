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
  overflow: hidden;

  img {
    object-fit: cover;
    align-self: center;
    -webkit-transition: width .2s ease, height .2s ease;
    filter: grayscale(100%);
  }

  &.hoverShow {
    img {
      height: 200px;
      filter: none;
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

export const ShowMoreButton = styled.button`

  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  margin: 10px 0;

  span {
    width: 20%;
    border: 2px solid #ec1d24;
    padding: 20px;
    color: #ec1d24;
    border-radius: 7px;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    &:hover {
      background: #ec1d24;
      color: #ffffff;
    }
  }

  `;