import React, {useState} from 'react'
import {NavWrap, Logo, NavMenu, NavLinks, ContactBtn, SideMenu, HomeMenu} from './navprojstyle'
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';

function NavP() {

    const [menuClick, setMenuClick] = useState(false);

    const openMenu = () => {
        setMenuClick(!menuClick)
    }

    const closeMenu = () => {
        setMenuClick(false)
    }

    return (
        <>
            <NavWrap>
                <Logo to="/" onClick={closeMenu}>
                    <img src="/myimages/logo.png" alt="Logo" />
                </Logo>

                <SideMenu onClick={openMenu}>
                    {menuClick ? <FaTimes /> : <FaBars /> }
                </SideMenu>

                <HomeMenu to="/" >
                    {<AiOutlineHome/>}
                </HomeMenu>

                <NavMenu>
                    <li className={menuClick ? 'OpenMenuActive' : 'CloseMenu'}>
                        <NavLinks to="/" onClick={closeMenu}>
                            <a href="#">Home</a>
                        </NavLinks>

                        <NavLinks onClick={closeMenu}>
                            <a href="#about">About</a>
                        </NavLinks>

                        <NavLinks onClick={closeMenu}>
                            <a href="#projects">Projects</a>
                        </NavLinks>

                        <a onClick={closeMenu} className='contact-btn' href="#contact"><button>Get in touch</button></a>
                    </li>
                </NavMenu>

                <ContactBtn>
                    <a onClick={closeMenu} href="#contact"><button>Get in touch</button></a>
                </ContactBtn>
            </NavWrap>
        </>
    )
}

export default NavP
