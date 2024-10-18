export const METADATA = {
  author: "Vrushali Shah",
  title: "Portfolio | Vrushali Shah",
  description:
    "Vrushali Shah is passionate about leveraging technology to solve real-world problems, particularly in software and web development, data science, and machine learning. I enjoy finding innovative solutions that drive efficiency and optimize business processes, and I am always eager to dive into projects related to data analysis and project management.",
  siteUrl: "https://www.vrushalishah.me/",
  keywords: [
    "Vrushali Shah",
    "Software Developer",
    "Machine learning Enthusiast",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
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
  "A data-driven Machine Learning Engineer",
  "A results-oriented Project Manager",
  "A network-savvy engineer with deep ARP protocol expertise",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: vrushalishah.1228@gmail.com ",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vrushalishah28/",
  },
  {
    name: "github",
    url: "https://github.com/vrushalishah2812",
  },

];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "python",
    "C"
    //,"C++"
  ],
  librariesAndFrameworks: [
    "Django",
    "MySQL",
    "MongoDB",
    "NumPy",
    //"Pandas",
    //"Matplotlib",
    "Tableau",
    //"MediaPipe",
    "OpenCV"
    //,"RNN",
    //"CNN",
    //"Seaborn"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Data Science Salaries Analysis",
    image: "/projects/project-bg.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "/projects/tech/project-bg.png",
    gradient: ["#F14658", "#DC2537"],
    //url: "https://shubh73-airbnb.vercel.app/",
    tech: ["Tableau", "MySql", "Python", "vscode"],
  },
  {
    name: "Big Data Regression Model for Forecasting Math Performance in Arizona ",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Implemented Regression modeling using Machine Learning techniques",
    gradient: ["#FFA62E", "#EA4D2C"],
    //url: "https://shubh73-medium.vercel.app/",
    tech: ["Python", "Regresion Model", "ml", "Data Mining", "vscode"],
  },
  {
    name: "Virtual Gym Using AI Pose Estimation.",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Developed a fitness app addressing COVID-19 challenges",
    gradient: ["#000066", "#6699FF"],
    //url: "https://shubh73-inshorts.netlify.app/",
    tech: ["AI Pose Estimation", "Mediapipe", "Python", "OpenCV", "vscode"],
  },
  {
    name: "Smart Attendance System",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Solution to automate attendance management",
    gradient: ["#142D46", "#2E4964"],
    //url: "https://github.com/shubh73/tesla",
    tech: ["MySQL", "Arduino IDE" , "Python" ,"Machine Learning", "vscode"],
  },
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
      title: "ERP Project Manager",
      description:
        "successful implementation of the NetSuite ERP system",
      content: (
        <div className="Implementation of Netsuite ERP System">
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Led the successful implementation of NetSuite ERP, boosting operational efficiency by 25% and migrating 5+ years of SAP data seamlessly. Integrated Magento with NetSuite using Celigo, automating order management and inventory sync across systems.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          ERP Project Manager Intern
        </div>
      ),
    },
/*   {
      title: "Evolution",
    description:
      "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    }
  */
  /*  {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    }, */
  ], 
  /*
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
*/
}