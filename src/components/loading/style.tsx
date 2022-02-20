import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    img {
        align-self: center;
    }
`;


