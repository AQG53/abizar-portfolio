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

export const clientReviews = [
  {
    id: 1,
    name: 'Ayesha Khan',
    position: 'Co-Founder at PakGrocer',
    img: 'assets/review1.png',
    review:
      'Working with Abizar was a game changer for our online grocery platform. He modernized our site with a clean UI and real-time features that our users love. His dedication and technical skill really stood out.',
  },
  {
    id: 2,
    name: 'Ali Raza',
    position: 'Founder of Learnify',
    img: 'assets/review2.png',
    review:
      'Abizar helped us scale our edtech platform for thousands of students across Pakistan. From secure login to smooth video integration, his work was top-notch. Truly a professional who understands both code and user experience.',
  },
  {
    id: 3,
    name: 'Hira Malik',
    position: 'Project Manager at Truckistan Logistics',
    img: 'assets/review3.png',
    review:
      'We needed someone who could understand our complex logistics workflows and turn them into a reliable web app. Abizar handled everything from backend APIs to frontend dashboards. Highly recommended!',
  },
  {
    id: 4,
    name: 'Umar Siddiqui',
    position: 'CEO of BizzMart.pk',
    img: 'assets/review4.png',
    review:
      'From idea to execution, Abizar was fully involved in building our e-commerce platform. His full-stack knowledge and problem-solving mindset helped us launch faster than expected.',
  },
];


export const myProjects = [
  {
    title: 'Notely - Your Personal Notes App',
    desc: 'A sleek, web-based note-taking app built with the MERN stack, designed to keep your thoughts organized and accessible.',
    subdesc: 'Users can easily create, edit, and delete notes in a secure and intuitive interface. Whether its study material, to-do lists, or quick thoughts — Notely makes sure your ideas are always just a click away.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
    backgroundColor: '#162A1B',             // deep greenish background
    border: '0.2px solid #1D3623',          // dark green border
    boxShadow: '0px 0px 60px 0px #30AA4D4D', // green glow (semi-transparent)
  },

    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.png',
      },
    ],
  },
  {
    title: 'Chattr - Live Video/Messaging App',
    desc: 'Chattr is a real-time messaging and video calling app designed for language learners. Built with the MERN stack and powered by Stream.io, it lets users securely connect, add friends, and collaborate through live conversations.',
    subdesc:
      'Whether you are learning a new language or helping others improve, Chattr creates a global space for meaningful communication with privacy and ease.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [7, -8, 0] : isTablet ? [7, -6, 0] : [12, -7, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [7, 2, 0] : isTablet ? [7, 1, 0] : [11, 5, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-45, 10, 0] : isTablet ? [-65, 10, 0] : [-55, 9, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -5, -10] : [-20, -15, -15],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Elevvo Pathways',
    pos: 'Frontend Developer',
    duration: 'July 2025 - August 2025',
    title: "Worked as a Frontend Developer where I built responsive and user-friendly websites using React, HTML, CSS, and JavaScript. Created modern UIs, collaborated with designers, and integrated APIs to deliver clean and functional web experiences.",
    icon: '/assets/elevvopaths.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'E-Write Solutions',
    pos: 'Creative Writer',
    duration: 'May 2023 - Aug 2023',
    title: "Wrote compelling and well-structured E-Books based on client-provided chapter-by-chapter ideas. High client retention by iterating on customer feedback and working on after-sales service. Adapted to various writing styles to implement continiously changing client requirements",
    icon: '/assets/ewritesols.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Hybrid Tech',
    pos: 'Customer Service Representative',
    duration: 'Jan 2021 - Dec 2021',
    title: "Developed strong communication skills by convincing potential customers to buy online platform services. Maintained structured and error-free sales records in Excel with attention to detail. Improved sales by 8% during my shift by strategically selling and ensuring every customer is satisfied with the service.",
    icon: '/assets/hybridtech.png',
    animation: 'salute',
  },
];