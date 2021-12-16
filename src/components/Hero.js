import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = () => {

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
          scale: 1.2
        }
      };

    const pageTransition = {
        type: "spring",
        ease: "anticipate",
        delay: 1.6,
        duration: 1.5
      };
    const pageTransition2 = {
        type: "spring",
        ease: "anticipate",
        delay: 1.8,
        duration: 1.5
      };
    const pageTransition3 = {
        type: "spring",
        ease: "anticipate",
        delay: 2,
        duration: 1.5
      };

    return (
        <HeroContainer>
            <HeroGroup>
                <motion.img animate={{rotate: [0, 0, 10, 0, 15, 0, 20, 0]}} src='/images/WSS.png' alt='hero logo' />
                <SubHeader>
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <h1>UX | UI Design</h1>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition2}
                    >
                        <h1>Web & Web App Development</h1>
                    </motion.div>
                </SubHeader>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition3}
                >
                    <p>Here at Web Suite Studio, we are web designers, developers, project managers, digital marketing professionals, and graphic designers dedicated to creative and results-driven web-based solutions using the latest trends and technologies.</p>
                </motion.div>
            </HeroGroup>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    min-height: 100vh;
    position: relative;
    margin: 0;

    @media only screen and (max-width: 1200px) {
      display: inline-block;
      width: 100vw;
  }
`

const SubHeader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
      display: inline-block;
  }

`

const HeroGroup = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: 20px;
    text-align: center;

    img {
        height: 500px;

        @media only screen and (max-width: 1200px) {
            display: inline-block;
            width: 80%;
            height: auto;
  }
    }
    
    p {
        color: white;
        font-size: 18px;
        line-height: 1.5;
        
    }
`