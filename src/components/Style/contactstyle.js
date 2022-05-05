import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContWrap = styled.div`
    padding: 100px 40px;
    color: white;
    background-color: #1D1D1D;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1007px){
        padding: 60px 10px;
        flex-direction: column;
    }
`;

export const ContDetails = styled.div`
    flex: 1;
    width: 100%;

    h2{
        font-size: 35px;
    }

    p{
        padding: 10px 0;
        color: #E3E3E3;
    }
`;

export const Socmed = styled.div`
    img{
        cursor: pointer;
    }
`;

export const SocmedLink = styled(Link)`

`;

export const ContForm = styled.div`
    flex: 1;
    background-color: white;
    color: #1A1A1A;
    margin: auto;
    padding: 40px 30px;

    @media screen and (max-width: 1007px){
        margin-top: 20px;
    }

    h3{
        text-align: center;
        font-weight: 900;
        font-size: 24px;
        color: #AC38E2;
    }

    input{
        width: 100%;
        padding: 5px 0;
        border: none;
        outline: none;
        border-bottom: 1px solid #1A1A1A;
        margin-bottom: 5px;
    }

    label{
        font-size: 13px;
        color: #929292;
        font-weight: 600;
    }

    textarea{
        width: 100%;
        border: none;
        outline: none;
        border-bottom: 1px solid #1A1A1A;
    }
`;

export const SubmitBtn = styled.div`
    input{
        padding: 10px 30px;
        background-color: #AC38E2;
        color: white;
        border: 1px solid white;
        font-size: 16px;
        outline: none;
        display: flex;
        margin-top: 20px;
        border-radius: 6px;
        cursor: pointer;
        width: 100px;
    }
`;