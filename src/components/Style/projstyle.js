import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjWrap = styled.div`
    color: white;
    padding: 60px 40px;

    @media screen and (max-width: 1007px){
        padding: 60px 10px;
    }
`;

export const ProjName = styled.div`

`;

export const ProjInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media screen and (max-width: 1007px){
        flex-direction: column;
        margin-bottom: 0px;
    }
`;

export const Item = styled.div`
    margin: auto;
    text-align: left;

    h3, h1, p, a{
        padding: 8px 0;
    }

    h3{

    }

    h1{

    }

    p{

    }

`;

export const View = styled.div`

    a{
        color: #AC38E2;
        text-decoration: none;
    }
`

export const ProjButton = styled(Link)`
    text-decoration: none;
    
    button{
        text-align: left;
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

        :hover{
            background-color: #AC38E2;
            transition: 0.5s ease;
        }
    }
`;

export const MainImage = styled.div`
    margin: 50px auto;

    @media screen and (max-width: 1007px){
        img{
            width: 100%;
        }
    }

    cursor: pointer;
    
    :hover{
        transform: scale(1.1);
        transition: 0.5s ease;
    }
`;

export const SubImages = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;

    @media screen and (max-width: 1007px){
        flex-direction: column;

        img{
            width: 100%;
            padding: 10px 0;
        }
    }
`;

export const ImagesA = styled.div`
    cursor: pointer;

    :hover{
        transform: scale(1.1);
        transition: 0.5s ease;
    }
`;

export const ImagesB = styled.div`
    cursor: pointer;
    
    :hover{
        transform: scale(1.1);
        transition: 0.5s ease-out;
    }
`;