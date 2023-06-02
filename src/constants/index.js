import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  bigscal,
  mdmc,
  assampay,
  freelancer,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Android & iOS App Development",
    icon: mobile,
  },
  {
    title: "Flutter Web Development",
    icon: backend,
  },
  {
    title: "Flutter Desktop App Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Android",
    icon: mobile,
  },
  {
    name: "Web",
    icon: web,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Bigscal Technologies Pvt. Ltd.",
    icon: bigscal,
    iconBg: "#383E56",
    date: "March 2021 - Oct 2021",
    points: [
      "Learning and Pratise about flutter framework and dart languages.",
      "I have Create difference type flutter sample widgets.",
      "Implementing responsive design both android and iOS.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company_name: "My Data My Consent",
    icon: mdmc,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - March 2023",
    points: [
      "Developing and maintaining web applications using Flutter Framework.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed 200+ Mobile App screen with Rest and Graph QL API Integration for Android and iOS App.",
      "Responsible for deciding a State-Management like Provider, Bloc pattern etc with different kind of architecture.",
    ],
  },
  {
    title: "Android App Developer",
    company_name: "Assam Pay",
    icon: assampay,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "I have create Assam pay android app this like Gpay App.",
      "Include Mobile Recharge, Fund Transfer and Add Fund etc.",
    ],
  },
  {
    title: "App Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "I Have Create Aviator Predictor App and Bass Reward App.",
      "I have create firebase data base and also work as firebase authentication in Flutter App",
    ],
  },
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
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Data My Consent",
    description:
      "Transform the way you organize and share your data. Join millions of people and businesses and be empowered to experience the global right to data privacy. Decide what data you would like to share, with whom and for how long.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mydatamyconsent",
  },
  {
    name: "Songster App",
    description:
      "Capture your photo and set your photo in your favorite songs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Assam Pay",
    description:
      "This app same as money transfer and mobile recharge app but featurs are differents. App is show to your money transefer report and account reports and mobile recharge reports.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/itsVivekVaghani/g_pay_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
