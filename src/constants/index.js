import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    IIITSlogo,
    C,
    Cpp,
    java,
    bootstrap,
    codingIcon, 
    nirvanaLogo,
    AnimatedWebsite,
    IOTA,
    threejs,
    webDevIcon,
    pastebinIcon,
    SpeakUp,
    everlastingmoments,
    pinIcon,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programming | DSA",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "BlockChain",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name:"BootStrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "C++",
      icon: Cpp,
    },
    {
      name: "JAVA",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "React",
      icon: reactjs,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, classmates, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Java, C, C++ developer",
      company_name: "IIITS",
      icon: codingIcon,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Developing efficient codes using Java, C++ and C.",
        "Hands on experience with Java and C form Indian Institute of Information Technology.",
        "Used C++ for problem solving in CodeForces and implement DSA in LeetCode.",
        "The codes can be found at my GitHub and Pastebin accounts.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Html, CSS, Js and frameworks",
      icon: webDevIcon,
      iconBg: " #E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, classmates, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "BlockChain Development",
      company_name: "IOTA IIITS",
      icon: IOTA,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
          "Grasp the core concepts of blockchain, including decentralized ledgers, consensus algorithms, and smart contracts.",
          "Develop proficiency in creating smart contracts using languages like Solidity, and deploy them on testnets for practical experience.",
          "Learn and apply security best practices in blockchain development to prevent vulnerabilities and ensure robust applications.",          ,
          "Engage in collaborative practices such as version control using Git, participate in open-source projects, and seek feedback from the blockchain development community."      
      ],
    },
    {
      title: "Design Lead",
      company_name: "Nirvana IIITS",
      icon: nirvanaLogo,
      iconBg: "#E6DEDD",
      date: "October 2023 - Present",
      points: [
        "Created many interactive presentations for The Nirvana Club of IIITS.",
        "Designed posters, banners and invitation cards for the club.",
        "Handled photography at multiple events.",
        "Collaboration in event planning and suggesting ideas to my team members",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "#Hobbies                    : Photography, Chess, Photo editing, Web page designing",
      name: "everlastingmoments.oz",
      designation: "",
      company: "Instagram",
      image: everlastingmoments,
    },
    {
      testimonial:
        "I am currently pursuing a B.Tech in Computer Science & Engineering as a sophomore at IIITS.",
      name: "Indian Institute of Information Technology, Sri City",
      designation: "",
      company: "",
      image: IIITSlogo,
    },
    {
      testimonial:
        "Languages known:       English, Hindi, Telugu  .............................................     Location: Hyderabad, Telangana",
      name: "Languages, location",
      designation: "",
      company: "",
      image: pinIcon,
    },
  ];
  
  const projects = [
    {
      name: "Web app using Animations",
      description:
        "This project represents a dynamic and engaging online presence for a multipurpose golf facility. The website reflects these values through a modern and interactive design, incorporating features like a custom cursor, smooth scrolling animations, and visually appealing sections. ",
      tags: [
        {
          name: "Html",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Js",
          color: "green-text-gradient",
        },
        {
          name: "gsap",
          color: "pink-text-gradient"
        },
      ],
      image: AnimatedWebsite,
      source_code_link: "https://github.com/ItsAJ1005/web-application-using-Animations",
    },
    {
      name: "SpeakUp",
      description:
        "Welcome to SpeakUp, a delightful Text to Speech Converter built with HTML, CSS, and JavaScript. This project leverages the 'SpeechSynthesisUtterance' interface of the Web Speech API to transform text into spoken words.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Js",
          color: "pink-text-gradient",
        },
        {
          name: "Web Speech API",
          color: "orange-text-gradient",
        },
      ],
      image: SpeakUp,
      source_code_link: "https://github.com/ItsAJ1005/Text-to-speech-converter",
    },
    {
      name: "Java Projects",
      description:
        "All my Java projects are stored in pastebin.com, I created basic console based applications, transaction management and I/O concepts. You can access them from the top right icon.",
      tags: [
        {
          name: "Java",
          color: "green-text-gradient",
        },
      ],
      image: pastebinIcon,
      source_code_link: "https://pastebin.com/u/ItsAJHarsh/1/UNPnsyLT",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };