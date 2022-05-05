import React from 'react'
import {proj} from './data'
import {PortWrap, ProjectBox, Details, MainImage, ProjectLink} from './Allstyle'
import {BsArrowRight} from 'react-icons/bs'
import NavP from '../NavigationProj'

function Portfolio() {
    return (
        <>
        <NavP />
            <PortWrap>
                {proj.map((item) => {
                    return(
                        <>
                            <ProjectBox>
                                <Details>
                                    <h3>{item.name}</h3>
                                    <h4>{item.language}</h4>
                                    <p>{item.def}</p>

                                    <ProjectLink>
                                        <a href={item.mainpath}>{item.link} <span> <BsArrowRight/> </span></a>
                                    </ProjectLink>
                                </Details>

                                <MainImage>
                                    <img src={item.image} alt="" />
                                </MainImage>
                            </ProjectBox>
                        </>
                    )
                })}
            </PortWrap>
        </>
    )
}

export default Portfolio
