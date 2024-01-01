import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  tshirt,
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
  aws,
  full,
  data1,
  reactjs1,
  chat1,
  algowiz,
  threejs,
  smsspam,
  
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
    title: "Reactjs",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend/Full Stack Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: reactjs1,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    // company_name: "Tesla",
    icon: data1,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "As a data analyst, I collect, clean, and interpret data sets in order to answer questions or support decision-making.",
       "I use a variety of software and programming languages, such as Excel, SQL, Python, and R, to manipulate and visualize data.",
        "I also communicate my findings and recommendations to stakeholders using clear and concise reports and presentations.",
    ],
  },
  {
    title: "Cloud Developer",
    // company_name: "Shopify",
    icon: aws,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "As a cloud developer, I use AWS services and tools to design, develop, test, and deploy cloud-based solutions that meet the needs and expectations of my clients.",
       "I have experience with various AWS technologies, such as EC2, S3, Lambda, DynamoDB, CloudFormation, CloudFront, and more.", 
       "I also use AWS Developer Tools, such as CodeCommit, CodeBuild, CodeDeploy, and CodePipeline, to automate and streamline the development and delivery process.",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    icon: full,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Chatverse",
    description:
      "A Dynamic chatting website made to communicate with each other wihtout any hassle",
    tags: [
      {
        name: "react-redux",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "CSS/Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: chat1,
    source_code_link: "https://github.com/AkarshanGupta/chat",
  },
  {
    name: "Algowiz",
    description:
      "It is a dyanmic web apllication which is used to learn about variopus algorihtm",
    tags: [
      {
        name: "react-vite",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: algowiz,
    source_code_link: "https://github.com/AkarshanGupta/AlgoWiz",
  },
  {
    name: "smsspamClassifier",
    description:
      "It is website in which when a text is inputted then it predicates whether it is spam or not.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyternotebook",
        color: "green-text-gradient",
      },
      {
        name: "Steamlit",
        color: "pink-text-gradient",
      },
    ],
    image: smsspam,
    source_code_link: "https://github.com/AkarshanGupta/sms-spam-detection",
  },
  {
    name: "ThreadedArtisy",
    description:
      "A 3D website for thsirt designing which is easy to understand and it also have inbuilt ai if you ever get stucked somewhere.",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "OpenaiAPI",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/AkarshanGupta/3D-TShirt-Designer",
  },
];



export { services, technologies, experiences, projects };
