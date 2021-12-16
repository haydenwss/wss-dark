import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessHero = () => {

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

    return (
        <ProcessHeroContainer>
            <ProcessHeroGroup>
                <img src='/images/WSS.png' alt='ProcessHero logo' />
                <motion.div
                     initial="initial"
                     animate="in"
                     exit="out"
                     variants={pageVariants}
                     transition={pageTransition}
                >
                    <SubHeader>
                        <h1>Our Process</h1>
                    </SubHeader>
                </motion.div>
            </ProcessHeroGroup>
        </ProcessHeroContainer>
    )
}

export default ProcessHero

const ProcessHeroContainer = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0;

    @media only screen and (max-width: 1200px) {
      display: inline-block;
      width: 100vw;
      min-height: 50vh;
  }
`

const SubHeader = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
      display: inline-block;
  }

`

const ProcessHeroGroup = styled.div`
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
    
    h1 {
        color: white;
        font-size: 80px;
        font-weight: 900;
        line-height: 1.5;
        
        @media only screen and (max-width: 1200px) {
            font-size: 40px;
        }
    }
`