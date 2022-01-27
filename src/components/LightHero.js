import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LightHero = () => {

    const pageVariants = {
        initial: {
          opacity: 0,
          scale: 0.8
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1
        },
        out: {
          opacity: 1,
          scale: 1.1
        }
      };

    const pageTransition = {
        type: "spring",
        ease: "anticipate",
        delay: 1.6,
        duration: 1.5
      };
   
    const pageTransition3 = {
        
        ease: "anticipate",
        delay: 2,
        duration: 1.5
      };

      
  return <LightHeroContainer>       
            <motion.img initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition} className='background-img' src='https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' alt='' />
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition3}
                >
                    <Title>
                        <InnerTitle>
                            <ImageContainer>
                                <img className='logo' src='images/new-logo.png' alt='addd' />
                            </ImageContainer>
                            <hr></hr>
                        </InnerTitle>
                        <InnerTitle>
                            <Text>
                            <h1>UX | UI Design</h1>
                            <h1>Custom web & web app development</h1>
                                <p>Here at Web Suite Studio, we are web designers, developers, project managers, digital marketing professionals, and graphic designers dedicated to creative and results-driven web-based solutions using the latest trends and technologies.</p>
                            </Text>
                        </InnerTitle>
                    </Title>
                </motion.div>
            <Icons>
                <a><i class="fab fa-github fa-2x"></i></a>
                <a><i class="fas fa-envelope fa-2x"></i></a>
            </Icons>
            
        </LightHeroContainer>
  ;
};

export default LightHero;


const LightHeroContainer = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    padding: 20px 0px 20px 20px;

    @media only screen and (max-width: 1200px) {
      display: inline-block;
      width: 100vw;
      height: 100vh;
      padding: 0;
  }

  .background-img {
      position: absolute;
      right: 0;
      width: 80%;

      @media only screen and (max-width: 1200px) {
      width: auto;
      height: 100vh;
      margin: 30px 0px 0px 0px;

    }
  }
`

const Title = styled.div`
    background-color: rgb(122, 142, 142);
    height: 500px;
    width: 800px;
    position: absolute;
    top: 300px;
    left: 100px;
    color: white;

    display: grid;
    grid-template-rows: repeat(2, auto);
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
      width: 70%;
      height: auto;
      top: 80px;
      left: 15%;
      font-size: 12px;
      
    }


    h1 {
        font-size: 30px;
        font-family: "Roseritta";

        @media only screen and (max-width: 1200px) {
            font-size: 20px;
        }
    }

`


const InnerTitle = styled.div`
    width: 100%;
    height: 100%;
    display: block;


    img {
        height: 180px;
    }

    hr {
        width: 80%;
    }
`

const Text = styled.div`
    padding: 0px 40px;

    p {
        letter-spacing: 1px;
    }
`

const Icons = styled.div`
    width: 100px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 10px;
    color: white;

    @media only screen and (max-width: 900px) {
      display: none;
    }

    a {
        margin: 5px;
        color: white;
    }
`

const ImageContainer = styled.div`
    text-align: center;
`
