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
  sajag,
  agprop,
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
  sajagweb,
  jobit,
  tripguide,
  mdmcapp,
  assamPayBg,
  mdmcWebBg,
  xtrainBg,
  infoBg,
  xijunaBg,
  threejs,
  github,
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
    title: "Lead Flutter Developer",
    company_name: "AGPROP",
    icon: agprop,
    iconBg: "#383E56",
    date: "Dec 2023 -  Present",
    points: [
      "Lead Flutter development team for mobile apps, ensuring efficient design and development.",
      "Collaborated with cross-functional teams for project success, such as designers and product managers, to define project goals.",
      "Implemented best practices like code reviews, testing, and continuous integration to guarantee the reliability and scalability of applications.",
      "Developed SaaS Mobile App for Propvision & Broker Network and improved app performance.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "May 2023 -  Nov 2023",
    points: [
      "Creating three separate applications in Flutter for Assam Pay, Xtrain, Xi Juan and Info 365 would involve a significant amount of code and design work, which is beyond the scope of a short response.This applications is available both android & iOS.",
      "Lead developers in these projects, development, and maintenance of Flutter-based mobile applications.",
      "I have created differant type of flutter app like weather app, caculator app and reminder app",
      "I have user differant type of state management technique,",
      "Set up CI/CD pipelines in these projects.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company_name: "My Data My Consent",
    icon: mdmc,
    iconBg: "#383E56",
    date: "Nov 2021 - April 2023",
    points: [
      "Senior Flutter frontend Developer for seamless mobile and web user-friendly experiences.",
      "Used Flutter for efficient cross-platform development to optimize code for performance and scalability.",
      "Implemented responsive designs for Mobile & Web App improved accessibility and engagement, collaborating with backend developers for seamless communication.",
      "Developet MVP of the Mobile App, Web Portal and Admin Portal and Desktop App.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Bigscal",
    icon: bigscal,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Oct 2021",
    points: [
      "Aspiring Flutter Developer seeking internship to enhance skills, transition to part-time role, and contribute to innovative projects for continuous growth.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to code reviews and actively participated in team meetings to enhance project understanding.",
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
    name: "Sajag Infotech",
    description:
      "Developing a Standard Company Responsive Website, leveraging HTML and CSS to bring this vision to life. This endeavor aimed to encapsulate modern web design principles, ensuring seamless .responsiveness across various devices.This project not only honed my technical skills in front-end development but also  significance of user experience.",
    tags: [
      {
        name: "Website",
        color: "blue-text-gradient",
        link: "https://sajaginfotech.com/",
      },
    ],
    image: sajagweb,
    source_code_link: "https://github.com/mydatamyconsent",
    source_code_image: github,
  },
  {
    name: "My Data My Consent",
    description:
      "Creating an Android and iOS application from scratch, I utilized Flutter's cross-platform capabilities to build a transformative product aimed at revolutionizing data organization and sharing. By seamlessly integrating cutting-edge technology and intuitive design, millions of users can now effortlessly manage and exchange their data in a secure environment.  ",
    tags: [
      {
        name: "App store ||",
        color: "blue-text-gradient",
        link: "https://apps.apple.com/us/app/my-data-my-consent/id1564979998",
      },
      {
        name: "Play store",
        color: "blue-text-gradient",
        link: "https://play.google.com/store/apps/details?id=app.mdmc&hl=en-IN",
      },
    ],
    image: mdmcapp,
    source_code_link: "https://github.com/mydatamyconsent",
    source_code_image: mdmc,
  },
  {
    name: "MDMC Web",
    description:
      "Developing the My Data My Consent Company Info Website using Flutter Web. Concurrently, the Company Admin Portal, developed within the Flutter framework, emerges as a powerful tool for managing users and overseeing key operations. From user authentication to toggling settings, the portal provides administrators with seamless control over various aspects of the platform.",
    tags: [
      {
        name: "Website",
        color: "blue-text-gradient",
        link: "https://mydatamyconsent.com/en-us",
      },
    ],
    image: mdmcWebBg,
    source_code_link: "https://github.com/itsVivekVaghani/g_pay_app",
    source_code_image: github,
  },
  {
    name: "Assam Pay",
    description:
      "Developed Assam Pay, a secure Fintech App, simplifying digital payments, recharges, bill payments, and financial management. Leveraged robust developer skills to create a user-friendly interface and implement cutting-edge security features for seamless and secure transactions",
    tags: [
      {
        name: "App store ||",
        color: "blue-text-gradient",
        link: "https://apps.apple.com/in/app/assam-pay-commission-app/id6452722373",
      },
      {
        name: "Play store",
        color: "blue-text-gradient",
        link: "https://play.google.com/store/apps/details?id=com.assampay.app",
      },
    ],
    image: assamPayBg,
    source_code_link: "https://github.com/itsVivekVaghani/g_pay_app",
    source_code_image: github,
  },

  {
    name: "X Train",
    description:
      "Created X Train, a fitness app with daily workout routines, reminders, and premium features. Leveraged strong developer skills to ensure a seamless in-app purchase system for premium content. Implemented personalized user profiles for tracking fitness history, catering to users at all fitness levels.",
    tags: [
      {
        name: "App store ||",
        color: "blue-text-gradient",
        link: "https://apps.apple.com/gb/app/xtrain-fitness-plans-tracker/id6469987896",
      },
      {
        name: "Play store",
        color: "blue-text-gradient",
        link: " https://play.google.com/store/apps/details?id=com.app.xtrain",
      },
    ],
    image: xtrainBg,
    source_code_link: "https://github.com/mydatamyconsent",
    source_code_image: mdmc,
  },
  {
    name: "Info 365",
    description:
      "Developed Info365, a versatile document management app, emphasizing strong developer skills.Tailored for diverse user roles, it efficiently maintains documents and organizes business information securely. Implemented robust features for users to manage, share, collaborate, and access information seamlessly, showcasing expertise in creating a sophisticated and user-friendly platform.",
    tags: [
      {
        name: "App store ||",
        color: "blue-text-gradient",
        link: "https://apps.apple.com/us/app/info365/id6479615098",
      },
      {
        name: "Play store",
        color: "blue-text-gradient",
        link: " https://play.google.com/store/apps/details?id=com.app.info365",
      },
    ],
    image: infoBg,
    source_code_link: "https://github.com/mydatamyconsent",
    source_code_image: mdmc,
  },
  {
    name: "Xi Juan",
    description:
      "Developing Xi Juan Dating Application and Also I have implementing App features like as Post View and sharing, Firebase Cloud Messaging, Push Notification and Dynamic Linking etc. Also I have Set up CI/CD Pipelines in this Project. ",
    tags: [
      {
        name: "Play store",
        color: "blue-text-gradient",
        link: "https://play.google.com/store/apps/details?id=com.app.xijuan",
      },
    ],
    image: xijunaBg,
    source_code_link: "https://github.com/mydatamyconsent",
    source_code_image: mdmc,
  },
];

export { services, technologies, experiences, testimonials, projects };
