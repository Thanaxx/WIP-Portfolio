import { Link } from "react-router-dom";
import styled from "styled-components";

export const PortWrap = styled.div`
    color: white;
    padding: 50px 40px;

    @media screen and (max-width: 1007px){
        padding: 0px 10px;
    }
`;

export const ProjectBox = styled.div`
    display: flex;
    margin-bottom: 100px;

    @media screen and (max-width: 1007px){
        flex-direction: column;
        margin-bottom: 50px;
    }
`;

export const Details = styled.div`
    margin: auto;
    h3, h4, p {
        padding: 8px 0;
    }

    h3{
        font-size: 26px;
    }

    h4{
        color: #AC38E2;
        font-weight: 300;
        font-size: 18px;
    }

    p{
        font-size: 15px;
    }
`;

export const ProjectLink = styled.div`
    margin-top: 10px;

    a{
        color: #AC38E2;
        text-decoration: none;
    }
`;

export const MainImage = styled.div`
    margin: auto;

    @media screen and (max-width: 1007px){
        img{
            width: 100%;
            margin-top: 30px;
        }
    }
`;