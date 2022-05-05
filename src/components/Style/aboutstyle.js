import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AboutWrap = styled.div`
    background-color: #1D1D1D;
    color: white;
    padding: 60px 40px;

    @media screen and (max-width: 1007px){
        padding: 40px 10px;
    }
`;

export const AboutDetails = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1007px){
        flex-direction: column;
    }
`;

export const AboutLabel = styled.div`
    flex: 1;

    @media screen and (max-width: 1007px){
        margin-bottom: 20px;
    }

    h1{
        font-size: 40px;
    }
`;

export const Resume = styled.div`
    a{
        text-decoration: none;
    }

    button{
        padding: 10px 20px;
        background-color: transparent;
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
            background-color: #AC38E2;
            transition: 0.5s ease-out;
        }
    }
`;

export const AboutInfo = styled.div`
    flex: 2;

    p{
        font-size: 18px;
        padding: 10px 0;
    }
`;

export const AboutSubInfo = styled.div`
    display: flex;
    padding: 10px 0;
    
    .SubInfoListB{
        margin-left: 70px;

        @media screen and (max-width: 1007px){
            margin-left: 0;
        }
    }

    span{
        color: #AC38E2;
    }

    li{
        list-style-type: none;
        color: #E3E3E3;
        padding: 5px 0;
    }
`;

export const AboutSkills = styled.div`
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Skillname = styled.div`
    width: 23%;
    background-color: white;
    text-align: center;
    margin: 20px auto;
    color: #52546D;
    padding: 35px 5px;
    border-radius: 6px;

    @media screen and (max-width: 1007px){
        width: 30%;
    }

    @media screen and (max-width: 700px){
        width: 45%;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }

    :nth-child(1){
        background-color: #AC38E2;
        color: white;
    }

    h3{
        padding: 5px 0;
        font-size: 22px;
    }

    p{
        text-align: center;
        font-size: 13px;
        font-weight: 600;
        padding: 5px 0;
    }
`;