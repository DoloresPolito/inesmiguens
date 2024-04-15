import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import RowOf2 from "./RowOf2";



const AnimatedRowOf2 = ({ image1, image2 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <RowOf2 image1={image1} image2={image2} />
      </motion.div>
    );
  };


  export default AnimatedRowOf2;