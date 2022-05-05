import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    height: 75px;
    width: 100%;
    background-color: #1A1A1A;
`;

export const Logo = styled(Link)`
    margin-left: 40px;
    cursor: pointer;

    @media screen and (max-width: 1007px){
        margin-left: 10px;
    }

    img{
        width: 100%;
    }
`;

export const SideMenu = styled.div`
    color: white;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 300;
    display: none;
`;

export const HomeMenu = styled(Link)`
    color: white;
    font-size: 35px;
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 40px;
    font-weight: 300;

    :hover{
        color: #AC38E2;
        transition: 0.5s all ease-out;
    }

    @media screen and (max-width: 1007px){
        right: 10px;
    }
`;

export const NavMenu = styled.div`

    @media screen and (min-width: 1007px){
        display: none;
    }

    @media screen and (max-width: 1007px){
        .OpenMenuActive{
            background-color: #1D1D1D;
            position: fixed;
            top: 70px;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 90vh;
            transition: all 0.5s ease;
        }

        .CloseMenu{
            top: -100%;
            transition: all 0.5s ease;
            opacity: 0;
            position: fixed;
        }
    }

    li{
        display: flex;
        align-items: center;
        list-style-type: none;
        justify-content: space-around;

        @media screen and (max-width: 1007px){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .contact-btn{
            display: none;
            padding: 10px 15px;
            font-size: 16px;
            background-color: transparent;
            color: white;
            outline: none;
            border: 1px solid #AC38E2;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;

            button{
                background-color: transparent;
                border: none;
                outline: none;
                color: white
            }

            :hover{
                background-color: #AC38E2;
                border-radius: 6px;
                transition: 0.5s ease-out;
            }

            @media screen and (max-width: 1007px){
                display: block;
            }
        }
    }
`;

export const NavLinks = styled.div`
    margin: 0 4rem;

    a{
        text-decoration: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
        padding: 3px 5px;
        text-decoration: none;

        :hover{
            border-bottom: 1px solid #AC38E2;
            transition: 0.5s ease-out;
            color: #AC38E2;
        }
    }


    @media screen and (max-width: 1007px){
        margin: 3rem 0;
    }
`;

export const ContactBtn = styled.div`

    @media screen and (min-width: 1007px){
        display: none;
    }

    margin-right: 40px;   
    
    button{
        padding: 10px 15px;
        font-size: 16px;
        background-color: transparent;
        color: white;
        outline: none;
        border: 1px solid #AC38E2;
        border-radius: 6px;
        cursor: pointer;
    }

    @media screen and (max-width: 1007px){
        display: none;
    }

    :hover{
        background-color: #AC38E2;
        border-radius: 6px;
        transition: 0.5s ease-out;
    }
`;