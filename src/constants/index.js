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
    loadBalancerLogo,
    cubiclesSample,
    NLPproject,
    BookHaven,
    PehchaanLogo
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
      title: "DevOps",
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
      title: "Software Developer Intern",
      company_name: "Pehchaan.me",
      icon: PehchaanLogo,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      points: [
        "Implemented candidate auto-sourcing on 5+ websites and reduced candidate sourcing time by 80%.",
      ],
    },
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
        "I am currently pursuing B.Tech in Computer Science & Engineering as a pre-final student at IIITS.",
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
      name: "Cubicles",
      description:
        "Developed a job portal with an admin panel, enabling users to search and apply for jobs, explore new concepts, and share knowledge through blogging. Integrated real-time updates with RabbitMQ, optimized querying with GraphQLimproved throughput by 30% and reduced latency by 28%. Set up CI/CD with GitHub Actions, ensuring reliability.",
      tags: [
        {
          name: "React",
          color: "orange-text-gradient",
        },
        {
          name: "Node",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient"
        },
        {
          name: "ShadCN",
          color: "pink-text-gradient"
        },
        {
          name: "Redis",
          color: "green-text-gradient"
        },
        {
          name: "EC2",
          color: "blue-text-gradient"
        },
        {
          name: "RabbitMQ",
          color: "orange-text-gradient"
        },
        {
          name: "RBAC access",
          color: "pink-text-gradient"
        },
        {
          name: "JWT",
          color: "orange-text-gradient"
        },
        {
          name: "SCSS",
          color: "blue-text-gradient"
        },
      ],
      image: cubiclesSample,
      source_code_link: "https://github.com/Cubicles2024/Cubicals-main",
    },
    {
      name: "Dynamic Load Balancer with Horizontal Scaling",
      description:
        "This project is a fully featured dynamic load balancer that supports multiple algorithms for distributing requests across backend servers. It incorporates real-time health checks, autoscaling, and performance monitoring. The load balancer dynamically adjusts server usage based on CPU metrics, response times, and connection counts to optimize traffic distribution and ensure high availability.",
      tags: [
        {
          name: "load balancing algorithms",
          color: "orange-text-gradient",
        },
        {
          name: "health-checks",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "dynamic & static",
          color: "pink-text-gradient"
        },
      ],
      image: loadBalancerLogo,
      source_code_link: "https://github.com/ScaleSync/Scale-Sync_Load-Balancer",
    },
    {
      name: "Statistical Machine Translation Hindi-Telugu",
      description:
        "The goal of this project is to translate sentences from Hindi to Telugu using a Transformer-based model. The model is built from scratch using PyTorch and includes various text preprocessing and feature extraction techniques to enhance translation quality.",
      tags: [
        {
          name: "Hindi-Telugu Translation",
          color: "orange-text-gradient",
        },
        {
          name: "Transformer Model",
          color: "blue-text-gradient",
        },
        {
          name: "NLP Preprocessing",
          color: "green-text-gradient",
        },
        {
          name: "MT",
          color: "pink-text-gradient"
        },
        {
          name: "PyTorch Implementation",
          color: "green-text-gradient"
        },
      ],
      image: NLPproject,
      source_code_link: "https://github.com/NLP-24/Statistical-Machine-Translation-Hindi-Telugu-",
    },
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
        {
          name: "Web design",
          color: "orange-text-gradient"
        },
      ],
      image: AnimatedWebsite,
      source_code_link: "https://github.com/ItsAJ1005/web-application-using-Animations",
    },
    {
      name: "BookHaven",
      description:
        "Efficient C++ project for bookstore management with MySQL. Features: Book & Supplier Management, Order Tracking, Employee & Member Handling, Sales Monitoring. Contribute to enhance this system!",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "orange-text-gradient",
        },
        {
          name: "Object Oriented Programming",
          color: "pink-text-gradient",
        },
        {
          name: "bookshop management project",
          color: "green-text-gradient",
        },
      ],
      image: BookHaven,
      source_code_link: "https://github.com/ItsAJ1005/Book-Haven",
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