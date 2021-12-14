import React from 'react'
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';

const Index = () => {

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
        duration: 1.5
      };
    
    return (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
            
        >
            <Hero />
            <WhatWeDo />
            <ImageSlider />
        </motion.div>
    )
}

export default Index
