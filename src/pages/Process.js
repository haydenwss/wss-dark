import React from 'react'
import ProcessHero from '../components/ProcessHero'
import ProcessBoxes from '../components/ProcessBoxes'
import { motion } from 'framer-motion';

const Process = () => {

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
            <ProcessHero />
            <ProcessBoxes />
        </motion.div>
    )
}

export default Process
