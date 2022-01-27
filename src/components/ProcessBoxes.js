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
            <ImageBox data-aos="fade-left">
                <img className='no-display' src='https://images.unsplash.com/photo-1538121915146-1dedb4191b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' alt='' />
            </ImageBox>
        </ProcessGroup>

        <ProcessGroup>
            <ImageBox data-aos="fade-right">
                <img src='https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
            </ImageBox>
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
                    <BoxText>
                        <Title>Ready to start a project?</Title>
                        <h3>get a free quote today!</h3>
                        <Link to='/contact'><button>get quote</button></Link>
                    </BoxText>
                </Box>
                <ImageBox data-aos="fade-left">
                    <img src='https://images.unsplash.com/photo-1504237111663-37d6094bec09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' />
                </ImageBox>
                
            </ProcessGroup>
         
        </ProcessContainer>
    )
}

export default Process

const ProcessContainer = styled.div`
    background-color: white;
    color: rgb(251, 218, 79);
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    max-width: 1500px;
    margin-bottom: 200px;

    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        align-items: center;
        justify-items: center;
        margin: 0 auto;
        height: auto;
    }
`

const ProcessGroup = styled.div`
    background-color: white;
    color: rgb(251, 218, 79);
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
            display: inline-block;
    }
`

const ImageBox = styled.div`
    width: 100%;
    height: 400px;
    text-align: center;
    padding: 0px;
    overflow: hidden;

    border-color: rgb(122, 142, 142);
    border-style: solid;
    border-width: 1px;

    @media only screen and (max-width: 1200px) {
        display: inline-block;
        border-color: white;   
    }

    img {
        min-width: 100%; /* or any custom size */
        height: 100%; 
        object-fit: cover;

        @media only screen and (max-width: 1200px) {
            width: 80%;
            height: auto;
        }
    }
`


const Box = styled.div`
    background-color: transparent;
    color: black;
    min-height: 400px;
    width: 100%;
   
    border-color: rgb(122, 142, 142);
    border-style: solid;
    border-width: 1px;
    
    display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;

  @media only screen and (max-width: 1200px) {
        border-color: white; 
    }


    .no-display {
    @media only screen and (max-width: 1200px) {
        display: none;
        
    }
}
    
        

    

    button {
      width: 60%;
      border-style: solid;
      border-color: rgb(122, 142, 142);
      border-width: 1px;

      background-color: transparent;
      padding: 5px 10px;
      text-transform: uppercase;
      color: rgb(122, 142, 142);
      margin: 20px;
      

      :hover {
            transform: translateY(-3px) scale(1.2);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(122, 142, 142);
            color: white;
            box-shadow:  2px 2px 20px rgb(32, 32, 32);
          }
    }
`



const Title = styled.div `
    color: rgb(122, 142, 142);
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    font-family: "Roseritta";
`
const BoxText = styled.div`
    padding: 20px 50px;
    letter-spacing: 1.4px;

    @media only screen and (max-width: 1200px) {
        font-size: 12px;
    }
`
