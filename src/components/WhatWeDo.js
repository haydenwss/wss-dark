import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion';

const WhatWeDo = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const squareVariants1 = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
        type: "spring",
      };
      const squareVariants2 = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } },
        hidden: { opacity: 0, scale: 0 },
        type: "spring",
      };
      const squareVariants3 = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1  } },
        hidden: { opacity: 0, scale: 0 },
        type: "spring",
      };
      const squareVariants4 = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.2 } },
        hidden: { opacity: 0, scale: 0 },
        type: "spring"
      };

    return (
        <BoxContainer>

               <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants1}
               >
               <CellGroup>            
                    <CellImage><img src='https://cdn-icons-png.flaticon.com/512/5968/5968704.png' alt='' /></CellImage>
                    <CellTitle>We use Figma for all UX and UI design development. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between.</CellTitle>
                </CellGroup>
                </motion.div>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants2}
               >
                <CellGroup>
                    <CellImage><img src='https://cdn-icons.flaticon.com/png/512/3074/premium/3074119.png?token=exp=1639504801~hmac=5ec442f16082dbd1f621a15ad82467b5' alt='' /></CellImage>
                    <CellTitle> For building high-performing responsive websites and web applications, using libraries has become imperative. ReactJS is one such front-end web development tool for developers that is used by around 4.5 million websites worldwide.</CellTitle>
                </CellGroup>
                </motion.div>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants3}
               >
                <CellGroup>
                    <CellImage><img src='https://d3e54v103j8qbb.cloudfront.net/img/webflow-black.ef3f174957.svg' alt='' /></CellImage>
                    <CellTitle>It seems like website builders are about a dime a dozen these days. They're quick, but the vast bulk of them aren't great. Webflow is a rare exception to this rule. Built with a “code-first” philosophy, Webflow is an all-in-one web design tool that allows users to design, build, and launch responsive websites visually.</CellTitle>
                </CellGroup>
                </motion.div>
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants4}
               >
                <CellGroup>
                    <CellImage><img src='https://cdn-icons-png.flaticon.com/512/41/41861.png' alt='' /></CellImage>
                    <CellTitle>There is no one magical step for SEO, it's about finding, and combining the best tools to use that suit your business the best. We use Google Search Console, YOAST, SEMRush, and all the best practices revolving around SEO markup, indexing rules, redirects, and more.  </CellTitle>
                </CellGroup>
                </motion.div>
    
      
        </BoxContainer>

    )
}

export default WhatWeDo

const BoxContainer = styled.div`
    background-color: rgb(32, 32, 32);
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center; 
    padding: 50px 20px;
    max-width: 1500px;
    margin: 0 auto;
`
const CellGroup = styled.div`
    width: 300px;
    height: 400px;
    background-color: #fbda4f;
    color: rgb(32, 32, 32);
    border-radius: 20px;
   text-align: center;
   padding: 80px 10px 0px 10px;
`
const CellImage = styled.div`
    width: 30%;
    height: auto;
    margin: 0 auto;

    img {
        width: 100%;
    }
`

const CellTitle = styled.div`
    font-size: 15px;
    padding: 30px 0;
    margin: 20px;
    letter-spacing: 1.2px;
`