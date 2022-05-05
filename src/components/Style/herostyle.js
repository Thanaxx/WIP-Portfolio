import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrap = styled.div`
    min-height: 88vh;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;

    @media screen and (max-width: 1007px){
        flex-direction: column;
    }
`;

export const Details = styled.div`
    margin: auto;
    padding: 0 40px;
    color: white;
    flex: 1;

    @media screen and (max-width: 1007px){
        padding: 0 10px;
    }

    .tag{
        font-weight: 600;
        font-size: 3rem;
    }

    .name{
        font-size: 3.8rem;
        font-weight: 800;
        color: #AC38E2;
    }

    .label{
        font-size: 1.2rem;
        font-weight: 500;
        color: #E3E3E3;
    }
`;

export const HireBtn = styled.div`
    a{
        text-decoration: none;
    }
    
    button{
        padding: 10px 20px;
        background-color: #AC38E2;
        color: white;
        border: 1px solid #AC38E2;
        font-size: 16px;
        outline: none;
        display: flex;
        margin-top: 20px;
        border-radius: 6px;
        cursor: pointer;

        span{
            padding-left: 6px;
        }

        :hover{
            background-color: transparent;
            transition: all 0.5s ease;
            border: 1px solid #AC38E2;
        }
    }
`

export const Profile = styled.div`
    margin: auto;
    flex: 1;
    text-align: center;

    img{
        width: 97%;

        @media screen and (max-width: 1007px){
            width: 100%;
            margin-top: 30px;
        }
    }
`;