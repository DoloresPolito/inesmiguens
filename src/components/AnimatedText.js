import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      style={{ opacity: 0, y: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;


//texto cascada

// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const AnimatedText = ({ text, delay = 0 }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: '-50px 0px',
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start((i) => ({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, delay: i * 0.1 + delay },
//       }));
//     }
//   }, [controls, inView, delay]);

//   // Split the text into words
//   const words = text.split(' ');

//   return (
//     <motion.p ref={ref}>
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           custom={index}
//           initial={{ opacity: 0, y: 30 }}
//           animate={controls}
//           style={{ display: 'inline-block', marginRight: '4px' }}
//         >
//           {word + ' '}
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// };

// export default AnimatedText;