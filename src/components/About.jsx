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
        Hi! I'm Shadan Namazifard, a third-year Honours Computer Science student at the University of British Columbia and currently an intern at Apple! 
        I'm passionate about both development and art, and I love using my skills to bring creative ideas to life. 
        I'm particularly interested in machine learning, app development, artificial intelligence and mathematics. 
        Previously, I interned at Rivian as an iOS developer, contributing to the Rivian mobile application and currently 
        I am working as a Software Engineer Intern at Apple.<br>
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
