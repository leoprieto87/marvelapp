import styled from "styled-components";

export const Header = styled.header`
    font-family: "Roboto";
    font-size: 18px;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px 20px;

    background: rgb(255,255,255);
    background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 100%);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#e2e2e2",GradientType=1);   
    
`
export const LogoMarvel = styled.div`

    
`
export const Menu = styled.div`
    span {
        align-self: center;
        cursor: pointer;
    }
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-left: 50px;
    color: #020202;
`
