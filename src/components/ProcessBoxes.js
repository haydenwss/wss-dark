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
                        <h1>FROM CONCEPT, TO PRODUCTION</h1>
                        <p>We utilizes web development technologies that are both proven and practical. With the options available in the market today, we can help you determine what is best for your needs.</p>
                        <p>To make the web development process easier for you we help our clients choose the right tools for hosting, e-commerce, content management and marketing.</p>
                        <p>We start our projects by understanding the scope and requirements. This is accomplished by working closely with you to make sure we are all on the same page.</p>
                        <p>Following the initial kick-off meeting, we will outline your project, create milestones, and agree on project priorities. Now we have a strategic plan in place that aligns with your initial vision and makes your goals achievable.</p>
                    </BoxText>
                </Box>
                <Box data-aos="fade-left">
                    <img src='images/design.svg' alt='' />
                </Box>
            </ProcessGroup>

            <ProcessGroup>
                <Box data-aos="fade-right">
                    <img src='images/responsive.svg' alt='' />
                </Box>
                <Box data-aos="fade-left">
                    <BoxText>
                        <h1>LOW & HIGH FIDELITY RENDER</h1>
                        <p>We design all our products using Figma, and Adobe Xd. It's important for our customers to feel included in the design process, and have them sign off on all designs before the coding process begins.</p>
                        <p>Our products are built in direct collaboration with our customers. Through our enduring interest in how people use our products, we embrace a model of software development that is iterative, gradual, and built through a process of continuous refinement.</p>
                    </BoxText>
                </Box>
            </ProcessGroup>
        
            <ProcessGroup>  
                <Box data-aos="fade-right">
                    <BoxText>
                        <h1>Ready to get a project started?</h1>
                        <h3>get a free quote today!</h3>
                        <Link to='/contact'><button>get quote</button></Link>
                    </BoxText>
                </Box>
                <Box data-aos="fade-left">
                    <img src='images/screens.svg' alt='' />
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
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0 auto;
    max-width: 1500px;
`

const ProcessGroup = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 0px 60px 60px 60px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 110px;
    align-items: center;
    justify-items: center; 
`


const Box = styled.div`
    background-color: rgb(251, 218, 79);
    color: rgb(32, 32, 32);
    height: 400px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    padding-top: 50px;
    box-shadow:  20px 20px 60px #1b1b1b,
             -20px -20px 60px #252525;

    img {
        width: 400px;
        margin: 0px 20px;
        border-radius: 20px;
    }

    button {
      width: 60%;
      border-style: solid;
      border-color: rgb(32, 32, 32);
      border-width: 1px;
      border-radius: 5px;
      background-color: transparent;
      padding: 5px 10px;
      color: rgb(32, 32, 32);
      margin: 20px;
      box-shadow:  20px 20px 60px #d5b943,
             -20px -20px 60px #fffb5b;


      :hover {
            transform: translateY(-3px) scale(1.2);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(32, 32, 32);
            color: white;
          }
      
    }
`

const BoxText = styled.div`
    padding: 40px;
    letter-spacing: 1.4px;
`
