import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { demo } from "../assets/";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
  <p className={styles.sectionSubText}>Demo</p>
  <h2 className={styles.sectionHeadText}>ArtVision AI.</h2>
</motion.div>
<motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
  //style={{ display: "flex", alignItems: "flex-start" }}
>
  <div >
    <p style={{ flex: '2', paddingBottom: '25px' }}>
      ArtVision AI is an innovative iOS application that seamlessly merges cutting-edge technology 
      and artistic expression. Developed using SwiftUI and Xcode, this app empowers users to create 
      stunning AI-generated artworks through an intuitive and interactive interface. With a robust 
      blend of machine learning, sophisticated image generation APIs, and user-centric design, 
      ArtVision AI sets the stage for users to embark on a creative journey like never before.
    </p>
    <iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/lVkmVuDZ4DA"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
  </div>
  
  {/* <div style={{ flexShrink: 0 }}>

    <video width="250" height="155" controls>
      <source src="src/assets/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div> */}
</motion.div>


      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <video width="275" height="100" controls >
        
        <source src="src/assets/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      </motion.p> */}
      
    </>
  );
};

export default SectionWrapper(Feedbacks, "demo");
