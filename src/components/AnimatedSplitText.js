//texto cascada
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSplitText = ({ text, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.3 + delay, ease: "easeOut" },
      }));
    }
  }, [controls, inView, delay]);

  // Split the text into words
  const words = text.split(' ');

  return (
    <motion.p ref={ref}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          style={{ display: 'inline-block', letterSpacing: '2px', fontFamily: 'var(--font-bebasneue)', fontSize: '80px', color: '#5e5d5d', lineHeight: '100%', marginRight: '20px' }}
        >
          {word}
          {/* Agregar espacio si no es la última palabra */}
          {index !== words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedSplitText;