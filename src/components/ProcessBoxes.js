import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Process = () => {
    
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <ProcessContainer>
                        <ProcessGroup>
            <Box data-aos="fade-right">
                <BoxText>
                    <Title>FROM CONCEPT TO PRODUCTION</Title>
                    <p>We utilizes web development technologies that are both proven and practical. With the options available in the market today, we can help you determine what is best for your needs.</p>
                    <p>To make the web development process easier for you we help our clients choose the right tools for hosting, e-commerce, content management and marketing.</p>
                    <p>We start our projects by understanding the scope and requirements. This is accomplished by working closely with you to make sure we are all on the same page.</p>
                    <p>Following the initial kick-off meeting, we will outline your project, create milestones, and agree on project priorities. Now we have a strategic plan in place that aligns with your initial vision and makes your goals achievable.</p>
                </BoxText>
            </Box>
            <Box data-aos="fade-left">
                <img className='no-display' src='images/mobile.svg' alt='' />
            </Box>
        </ProcessGroup>

        <ProcessGroup>
            <Box data-aos="fade-right">
                <img src='images/wireframe.svg' alt='' />
            </Box>
            <Box data-aos="fade-left">
                <BoxText>
                    <Title>LOW & HIGH FIDELITY RENDER</Title>
                    <p>We design all our products using Figma, and Adobe Xd. It's important for our customers to feel included in the design process, and have them sign off on all designs before the coding process begins.</p>
                    <p>Our products are built in direct collaboration with our customers. Through our enduring interest in how people use our products, we embrace a model of software development that is iterative, gradual, and built through a process of continuous refinement.</p>
                </BoxText>
            </Box>
        </ProcessGroup>

        <ProcessGroup>
            <Box data-aos="fade-right">
                <Title>Areas of expertise</Title>
                <ListItems>
                    <p>Discovery</p>
                    <p>UX Planning</p>
                    <p>Sitemapping</p>
                    <p>Website Design</p>

                    <p>Content Writing</p>
                    <p>Web Hosting</p>
                    <p>E-commerce</p>
                    <p>Web Development</p>

                    <p>UI Design</p>
                    <p>Webflow</p>
                    <p>Database Management</p>
                    <p>Graphic Design</p>
                </ListItems>
            </Box>
            <Box data-aos="fade-left">
                <BoxText>
                    <img src='images/dev-team.svg' alt='' />
                </BoxText>
            </Box>
        </ProcessGroup>

        
            <ProcessGroup>  
            <Box data-aos="fade-left">
                    <img src='images/screens.svg' alt='' />
                </Box>
                <Box data-aos="fade-right">
                    <BoxText>
                        <Title>Ready to start a project?</Title>
                        <h3>get a free quote today!</h3>
                        <Link to='/contact'><button>get quote</button></Link>
                    </BoxText>
                </Box>
                
            </ProcessGroup>
         
        </ProcessContainer>
    )
}

export default Process

const ProcessContainer = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    max-width: 1500px;

    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        align-items: center;
        justify-items: center;
        margin: 0 auto;
        padding: 20px;
        height: auto;
    }
`

const ProcessGroup = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 0px 60px 60px 60px;
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
            display: inline-block;
            width: 100%;
            padding: 0px;
            
    }
`


const Box = styled.div`
    background-color: transparent;
    color: rgb(251, 218, 79);
    min-height: 300px;
    width: 100%;
    border-radius: 20px;
    border-color: transparent;
    box-shadow:  20px 20px 60px #1b1b1b;
    border-style: solid;
    border-width: 1px;
    text-align: center;
    padding: 20px;

    @media only screen and (max-width: 1200px) {
        display: inline-block;
        height: auto;
        width: 100%;
        margin-top: 20px;
       
    }

    .no-display {
    @media only screen and (max-width: 1200px) {
        display: none;
    }
}
    
        

    img {
        width: 400px;
        margin: 0px 20px;
        border-radius: 20px;

        @media only screen and (max-width: 1200px) {
            width: 80%;
            height: auto;
            
        }

       
    }

    button {
      width: 60%;
      border-style: solid;
      border-color: rgb(251, 218, 79);
      border-width: 1px;
      border-radius: 5px;
      background-color: transparent;
      padding: 5px 10px;
      text-transform: uppercase;
      color: rgb(251, 218, 79);
      margin: 20px;
      box-shadow:  4px 5px 20px rgb(32, 32, 32);

      :hover {
            transform: translateY(-3px) scale(1.2);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(32, 32, 32);
            color: white;
          }
    }
`

const ListItems = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center; 
    padding: 20px;

    @media only screen and (max-width: 1200px) {
        padding: 10px;
        grid-gap: 5px;
    }
`

const Title = styled.div `
    color: rgb(251, 218, 79);
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`
const BoxText = styled.div`
    padding: 20px 50px;
    letter-spacing: 1.4px;

    @media only screen and (max-width: 1200px) {
        font-size: 12px;
    }
`
