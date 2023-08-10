import {
    // mobile,
    // backend,
    // creator,
    // web,
    // javascript,
    typescript,
    html,
    css,
    reactjs,
    //redux,
    tailwind,
    //nodejs,
    //mongodb,
    git,
    //figma,
    //docker,
    
    ///threejs,
    swift,
    java,
    cpp,
    c,
    python,
    r,
    creatML,
    rivian,
    tutor,
    artvision,
    hervision,
    bugtracker,
    knn,
    maze,
    imageproc,
    
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "SwiftUI",
      icon: swift,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "CreateML",
      icon: creatML,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern - iOS Developer",
      company_name: "Rivian",
      icon: rivian,
      iconBg: "#383E56",
      date: "Sept 2023 - April 2024",
      points: [
        "I'm going to be interning at Rivian, as an iOS Developer under the Mobile Development team."
        // "Collaborated with a cross-functional team to design and develop Rivian's mobile applications, contributing to the creation of cutting-edge software solutions.",
        // "Implemented sample and demo applications, showcasing the capabilities of Rivian's technology and enhancing the overall user experience.",
        // "Ensured the quality and performance of applications through rigorous testing, troubleshooting, and resolving identified issues to meet specifications.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Computer Science and Mathematics Tutor",
      company_name: "UBC My Sky Tutoring",
      icon: tutor,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Aug 2023",
      points: [
        "Tutor for university-level Mathematics courses.",
        "Developed customized lesson plans to meet the individual needs of each student",
        "Experience working with students of various skill levels and abilities",

      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "ArtVision AI",
      description:
        "ArtVision AI is an iOS app that merges technology and art. It empowers users to create AI-generated artworks through an intuitive interface. With machine learning and user-friendly design, ArtVision AI transforms creativity.",
      tags: [
        {
          name: "swiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "coreML",
          color: "green-text-gradient",
        },
        {
          name: "openAI api",
          color: "pink-text-gradient",
        },
        {
          name: "mapKit",
          color: "blue-text-gradient",
        },
      ],
      image: artvision,
      source_code_link: "https://github.com/Shadannamazi/ArtVision-AI",
    },
    {
      name: "HerVision",
      description:
        "An iOS e-commerce app offering browsing, cart management, profile customization, and checkout. Empowers users to explore styles, mix wardrobe pieces, and globally share outfits. Search Aritzia's database with added security.",
      tags: [
        {
          name: "swiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "xCode",
          color: "green-text-gradient",
        },
        
      ],
      image: hervision,
      source_code_link: "https://github.com/Shadannamazi/HerVision",
    },
    {
      name: "Bug Tracker Application",
      description:
        "This desktop bug tracking app logs and manages encountered bugs. Developers can add issue details, severity, assignees, and progress. It tracks repetitive issues and maintains bug history in one place.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "json",
          color: "pink-text-gradient",
        },
      ],
      image: bugtracker,
      source_code_link: "https://github.com/Shadannamazi/BugTrackerApp",
    },
    {
      name: "Heart Disease Predictor",
      description:
        "This project revolves around leveraging KNN classification to predict the presence of heart disease in new patients. By analyzing critical clinical factors like age, serum cholesterol levels, and maximum heart rate achieved, a predictive model was developed. ",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "KNN classification",
          color: "pink-text-gradient",
        },
      ],
      image: knn,
      source_code_link: "https://github.com/Shadannamazi/Heart-Disease-Predictor",
    },
    {
      name: "HexMaze Solver",
      description:
        "A C++ program that introduces a unique approach to maze-solving by tackling hexagonal mazes using DFS algorithm. With a visual representation of HexBoard comprising hexagons with axial coordinates, it efficiently navigates complex pathways.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "DFS",
          color: "green-text-gradient",
        },
        {
          name: "data structures",
          color: "pink-text-gradient",
        },
      ],
      image: maze,
      source_code_link: "https://github.com/Shadannamazi/HexMaze-Solver",
    },
    {
      name: "Image Processor App",
      description:
        "Powered by Python, Tkinter, Pygame, and Numpy, this tool offers an intuitive GUI to apply dynamic filters and effects to images. Elevate your visuals effortlessly, exploring a world of creative possibilities in just a few clicks.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "Pygame",
          color: "pink-text-gradient",
        },
      ],
      image: imageproc,
      source_code_link: "https://github.com/Shadannamazi/Image-Processor-App",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };