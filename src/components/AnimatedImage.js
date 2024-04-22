import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale:'100%',
        transition: { duration: 0.9, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale:'95%' }}
      animate={controls}
      style={{ opacity: 0, scale:'95%'}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedImage;


