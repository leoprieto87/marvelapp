import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
  letter-spacing: 1px;
  font-wight: 400;
  color: #ffffff;
`;

export const ContentResult = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
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
    opacity: 0.4;
  }

  &.hoverShow {
    img {
      height: 200px;
      filter: none;
      opacity: 1;
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
  &.inactive span {
    display: none;
  }
  span {
    width: 20%;
    border: 2px solid #ec1d24;
    padding: 10px 20px;
    color: #ec1d24;
    border-radius: 7px;
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    &:hover {
      background: #ec1d24;
      color: #ffffff;
    }
  }

`;

export const ModalDetail = styled.div`
  background: #00000082;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
`;

export const ModalDetailContent = styled.div`
  height: 400px;
  width: 70%;
  margin-top: 150px;
  background: #ffffff;
  color: black;
  border-radius: 10px;
`;