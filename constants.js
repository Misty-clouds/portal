export const METADATA = {
  author: "Taoheed Adeniji",
  title: "Portfolio | Taoheed Adeniji",
  description:
    "Taoheed Adeniji is a passionate Fullstack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.taoheedadeniji.me/",
  twitterHandle: "@mistyclouds001",
  keywords: [
    "Taoheed Adeniji",
    "Fullstack Engineer",
    "Flutter Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
    language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Professional Fullstack Developer",
  "I develop for the web & mobile",
  "I create beutiful and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: clearclouds.001@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/adeniji-taoheed-3ab6382a4?trk=contact-info",
  },
  {
    name: "github",
    url: "https://github.com/Misty-clouds",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/s",
  },
  {
    name: "twitter",
    url: "https://x.com/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "flutter",    
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [

  {
    name: "Maaher Academy",
    image: "/projects/maaher.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "A tajweed learning app which uses speech recognition for test grades",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/Misty-clouds/Quranic-Arrabic-speech-recognition-flutter",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Africart",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "An art market place, developed using flutter and firebase",
    gradient: ["#F14658", "#DC2537"],
    url:"https://github.com/Misty-clouds/africartv",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "RWP Transcorp",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "A non Emergency transportation Website",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/Misty-clouds/RWP",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },

  {
    name: "Unique Class",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A transportation service landing page",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Misty-clouds/unique1",
    tech: ["react"],
  }
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Orglobal",
      description:
        "Orglobal Tech Network is a dynamic technology company specializing in innovative software solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
Start of the journy        </div>
      ),
    },
    {
      title: "Experience",
      description:
        "Worked as a Junior Developer at Orglobal Tech Network, I contributed to the development and maintenance of web and mobile applications, collaborating with cross-functional teams to deliver high-quality solutions. .",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          junior software Engineer
        </div>
      ),
    }
    
  ],
  AVIATE: [
    {
      title: "CloudsTech",
      description:
        "Cloudstech is an innovative startup I founded, dedicated to providing scalable, cloud-based solutions for businesses.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "As the founder, I led the design and development of applications using Next.js, Flutter, and Node.js, implemented cloud-based systems with Firebase and MongoDB, and collaborated closely with clients to deliver impactful solutions. I also oversaw the companys strategic vision, built a small team of skilled developers, and ensured the successful execution of various projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founding a bussiness
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Freelancing",
      description:
        "As a freelance developer, I have worked with clients from diverse industries to deliver tailored web and mobile solutions. I specialize in creating responsive websites, scalable backend systems, and cross-platform mobile apps using technologies like Next.js, Flutter, Node.js, and Firebase. Through freelancing, I have gained hands-on experience managing end-to-end projects, communicating effectively with clients, and delivering high-quality solutions that meet unique business needs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    }
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
