import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
//import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a third-year computer science student at the University of British Columbia. I'm passionate about both art and development, 
        and I love using my skills to bring creative ideas to life.
        
        I'm particularly interested in machine learning, artifical intelligence, full-stack developemnt as well as app development.
        Alongside my studies, I'm also passionate about art. I've been drawing and painting for as long as I can remember, 
        and I enjoy exploring the intersection between art and technology.<br>
        </br>
        
        Check out my latest project <a href="#demo" style={{ fontWeight: 'bold', color: '#A9EFEE' }}>ArtVision AI</a> which brings this vision to life!
        <br></br>
        {/* I am currently a Software Engineer Intern at Rivian, working in the iOS Developement sector under the
         Mobile Development team. On the side I am continously expanding my knowlege in areas such as machine 
        learning and experimenting with different technologies. */}

      </motion.p>

     
    </>
  );
};

export default SectionWrapper(About, "about");
