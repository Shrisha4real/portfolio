export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      "title": "Tic Tac Toe - AI Challenge",
      "desc": "A classic Tic Tac Toe game implemented with Pygame, featuring an intelligent AI opponent. Test your strategic skills against a computer that thinks ahead!",
      "subdesc": "Built using Python and Pygame, this project demonstrates fundamental game development concepts and AI implementation using a minimax algorithm.",
      "href": "https://github.com/Shrisha4real/cs50ai-p0-tictactoe.git",
      texture: '/textures/project/1000024928-01.jpeg',
      logo: '/assets/tictactoe.jpeg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.jpeg',
        },
        
      ],
    },
    {
     "title": "Lisp-like Interpreter - C++ Implementation",
     "desc": "A custom Lisp-like interpreter built from scratch using C++. Explore the power of functional programming paradigms and learn about language design and implementation.",
     "subdesc": "This project showcases the creation of a parser, evaluator, and runtime environment, providing a deep dive into the core concepts of language interpreters.",
      href: 'https://github.com/Shrisha4real/CLOX-interpreter.git',
      texture: '/textures/project/1000024934-01.jpeg',
      logo: '/assets/cpp.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'C++',
          path: '/assets/cpp.png',
        },
       
      ],
    },
    {
      "title": "Voronoi Stippling Generator",
      "desc": "Create stunning stippled images using the Voronoi algorithm implemented with p5.js. Experiment with point distribution and density to generate unique artistic effects.",
      "subdesc": "This interactive web application demonstrates the power of p5.js for creative coding and visual art generation. It allows users to upload images and generate stippled representations.",
      "href": "https://github.com/Shrisha4real/Weighted-Voronoi-Diagram.git",
      texture: '/textures/project/1000024938-01.jpeg',
      logo: '/assets/voronoi.jpeg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'p5.js',
          path: '/assets/p5js.png',
        },
      ],
    },
   
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];