import React from 'react'
import {AiFillLike} from 'react-icons/ai'
import {MainWrap, Details, Profile, HireBtn} from '../Style/herostyle'
import {BsSearch} from 'react-icons/bs'
import {AboutWrap, AboutDetails, AboutLabel, AboutInfo, AboutSubInfo, AboutSkills, Skillname, Resume} from '../Style/aboutstyle'
import {IoMdArrowDropright} from 'react-icons/io'
import {skillset} from '../Data/aboutdata'
import {projectA} from '../Data/projectdata'
import {ProjWrap, ProjName, ProjInfo, Item, ProjButton, MainImage, SubImages, ImagesA, ImagesB, View} from '../Style/projstyle'
import {BsArrowRight} from 'react-icons/bs'
import {ContWrap, ContDetails, Socmed, ContForm, SubmitBtn, SocmedLink} from '../Style/contactstyle'
import Nav from '../Navigation'
import emailjs from 'emailjs-com'

function Mainpages() {

    //function to send email

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_bgwmbz6', e.target, 'user_JbMicfL4zdJ2jy5919PB5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <>
            <Nav />
            <MainWrap>
                <Details>
                    <p className='tag'>Hi! I am,</p>
                    <p className='name'>Christel Joy Abordaje</p>
                    <p className='label'>A 22-year-old self-taught web developer that aspires to be a front-end web developer in the world of tech industry.</p>
                    
                    <HireBtn>
                        <a href="#contact"><button>Hire me <span><AiFillLike/></span> </button></a>
                    </HireBtn>
                </Details>

                <Profile>
                    <img src="/myimages/profile.png" alt="" />
                </Profile>
            </MainWrap>


            <AboutWrap id='about'>
                <AboutDetails>
                    <AboutLabel>
                        <h1>More about me</h1>
                        
                        <Resume>
                            <a href="/files/Abordaje_Resume.pdf"><button>Resume <span><BsSearch/></span></button></a>
                        </Resume>
                    </AboutLabel>

                    <AboutInfo>
                        <p>Hello, my name is Christel, and I'm a Computer Science student from Iloilo Science and Technology University. Front-end web development and web design are my interests. I am a 22-year-old aspiring front-end web developer searching for a job that will allow me to learn, grow and share what I've learned. 
                            <br/> <br/>
                        In this current generation, where technology is the preferred mode of convenience, I enjoy coming up with novel ideas that can benefit humanity which I've been also able to come up with new and exciting ideas thanks to coding. Front-end website development is something I'm very passionate about. I devote a lot of effort to learning new technologies in order to increase my web development and design creativity.</p>
                        <p>I always believed that with hard work and perseverance, nothing is impossible.</p>

                        <AboutSubInfo>
                            <ul>
                                <li><span><IoMdArrowDropright /></span>Email: abordajechristeljoy@gmail.com</li>
                                <li><span><IoMdArrowDropright /></span>Phone: +639303009243</li>
                            </ul>

                            <ul className='SubInfoListB'>
                                <li><span><IoMdArrowDropright /></span>City: Iloilo City, PH</li>
                                <li><span><IoMdArrowDropright /></span>Course: BS Computer Science</li>
                            </ul>
                        </AboutSubInfo>
                    </AboutInfo>
                </AboutDetails>

                <AboutSkills>
                    {skillset.map((item, index) => {
                        return(
                            <>
                                <Skillname>
                                    <img src={item.image} alt="skill" />
                                    <h3>{item.label}</h3>
                                    <p>{item.description}</p>
                                </Skillname>
                            </>
                        )
                    })}
                </AboutSkills>
            </AboutWrap>

            <ProjWrap id='projects'>
                <ProjName>
                    {projectA.map((proj) =>{
                        return(
                            <>
                                <ProjInfo>
                                    <Item>
                                        <h3>{proj.tag}</h3>
                                        <h1>{proj.name}</h1>
                                        <p>{proj.description}</p>

                                        <View>
                                            <a href={proj.mainpath}>{proj.link} <span><BsArrowRight/></span></a>
                                        </View>
                                        
                                        <ProjButton to="/projects">
                                            <button>See more</button>
                                        </ProjButton>
                                    </Item>

                                    <MainImage>
                                        <img src={proj.image} alt="project image" />
                                    </MainImage>
                                </ProjInfo>

                                <SubImages>
                                    <ImagesA>
                                        <img src={proj.imageA} alt="" />
                                    </ImagesA>

                                    <ImagesB>
                                        <img src={proj.imageB} alt="" />
                                    </ImagesB>
                                </SubImages>
                            </>
                        )
                    })}
                </ProjName>
            </ProjWrap>

            <ContWrap id='contact'>
                <ContDetails>
                    <h2>Hire Me For Your Next Project</h2>
                    <p>Drop your message here.</p>
                    <Socmed>
                        <SocmedLink>
                            <a href="https://www.facebook.com/christeljoy.abordaje.3/"><img src="/myimages/soc/fb.png" alt="" /></a>
                        </SocmedLink>

                        <SocmedLink>
                            <a href="https://www.instagram.com/thanna_dev/"><img src="/myimages/soc/insta.png" alt="" /></a>
                        </SocmedLink>

                        <SocmedLink>
                            <a href="https://www.linkedin.com/in/christel-joy-abordaje-782b63204/"><img src="/myimages/soc/linkedin.png" alt="" /></a>
                        </SocmedLink>

                        <SocmedLink>
                            <a href="https://github.com/Thanaxx/"><img src="/myimages/soc/github.png" alt="" /></a>
                        </SocmedLink>
                    </Socmed>
                </ContDetails>

                <ContForm>
                    <h3>Contact Me</h3>
                        
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name'/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'/>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" cols="30" rows="5" />

                        <SubmitBtn>
                            <input type="submit" value="SEND" />
                        </SubmitBtn>

                    </form>
                </ContForm>
            </ContWrap>
        </>
    )
}

export default Mainpages
