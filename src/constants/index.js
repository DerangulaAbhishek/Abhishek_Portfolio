import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer with a knack for building robust and scalable web applications. Proficient in Java, Spring, React.js, MySQL, HTML, CSS, and JavaScript, I take a hands-on approach to problem-solving and software development. Committed to delivering seamless user experiences, optimizing performance, and driving business growth through innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a solid foundation in technologies like React.js, Java, MySQL, Spring Framework, and Firebase, I continuously strive to learn and adapt to new challenges. My journey in web development is driven by curiosity and a commitment to delivering high-quality solutions. I thrive in collaborative environments and enjoy solving complex problems to achieve impactful results.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - Jan 2024",
    role: "Full-Stack Developer Intern",
    company: "Kodnest ",
    description: ` Developed a Song Application using [Technologies Used], focusing on both front-end and back-end development. Worked on implementing features like [e.g., user authentication, song upload, playlist management] while ensuring a seamless user experience. Collaborated with a team to enhance application performance, troubleshoot issues, and optimize functionality.`,
    technologies: ["Java", "Spring Framework", "React.js", "MySQL", "HTML", "CSS","JavaScript"],
  },

  {
    year: "Jan 2024 - Present (1.5 Years)",
    role: "Java Developer",
    company: "Artech, Banglore,  India - Onsite ",
    description: `Developed and deployed end-to-end web applications using Java, Spring Boot, and Thymeleaf, handling both front-end and back-end components. Conducted unit/integration testing, managed CI/CD pipelines, and supported production releases with RPC implementation and post-deployment optimizations. Collaborated with teams for code reviews, external integration testing, and client feedback to ensure high-quality, scalable solutions.`,
    technologies: ["Spring Boot", "Thymeleaf","Java","JUnit" ],
  },
];

export const PROJECTS = [
    {
    title: "Smart Cart Using Store API",
    image: project2, 
    description:
    "This is an e-commerce website offering a dynamic and user-friendly shopping experience. Key features"
    +"in this project includes “Add to Cart” and “Add to Wishlist” functionalities, ensuring easy prod-"
    +"uct management for users, with data persistence through localStorage. Built with HTML, CSS, and"
    +"JavaScript, this app delivers a dynamic, responsive and interactive shopping experience. ",
      technologies: ["HTML", "CSS", "JavaScript"],
      link:"https://derangulaabhishek.github.io/Smart_Shoping/",
  },
  {
    title: "Medical Chatbot",
    image: project3,
    description:"Developed a medical chatbot using HTML, CSS, and JavaScript that provides suggestions for various"
    +"health-related queries. The chatbot is designed to in-teract with users and assist them in determining"
    +"their symptoms and providing advice on possible diagnoses or treatment options.",
  technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://derangulaabhishek.github.io/Smart_Shoping/",

  },
  {
    title: "Tune Song",
    image: project4,
    description:"Built a full-stack music streaming application using Java, Spring Boot, and MySQL, implementing secure role-based access control for admin and user roles.Designed and developed RESTful APIs to enable seamless interaction between the front-end and back-end components.Integrated Razorpay for secure payment processing and subscription management.Created a responsive and user-friendly UI using HTML, CSS, and JavaScript, ensuring a smooth music experience across all devices.",
  technologies: ["HTML", "Java","MYSQL","Spring Boot","CSS", "JavaScript"],
    link:"https://github.com/DerangulaAbhishek/Tunehub_app",

  },
  {
    title: "Developed Test Cases for Application (Manual Testing)",
    image: project5,
    description:"Worked on manual testing by developing detailed test cases based on test scenarios for a CRM application. Executed test cases to ensure functional and UI accuracy, and used JIRA to track bugs and monitor testing progress for efficient issue resolution.",
  technologies: ["Jira"],
    link:"",

  }
  
  
];

export const CONTACT = {
  address: "Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037",
  phoneNo: "9014018225",
  email: "abhishekderangula1305@gmail.com",
};

export const EDUCATION = [
  {
    year: "2019 - 2023",
    degree: "B.Tech in Chamical Engineeering",
    institution: "Jawaharlal Nehru Technological University Anantapur College of Engineering, Anantapur",
    percentage: "72.7%",
  },
  {
    year: "2017 - 2019",
    degree: "Intermediate",
    institution: "Narayana Junior College, Anantapur",
    percentage: "96%",
  },
  {
    year: "2016 - 2017",
    degree: "Secondary Education",
    institution: "Sri Chaitanya School, Anantapur",
    percentage: "98%",
  },
];

// export const STRENGTHS = [
//   "Self-motivated",
//   "Team Player",
//   "Multi-Tasking",
//   "Creative Thinking",
// ];

// export const CERTIFICATIONS = [
//   "Certified in Java Full Stack Development - Wipro TalentNext",
//   "Front-End Development Certification - Udemy",
// ];

// export const TOOLS_TECHNOLOGIES = {
//   programmingLanguages: ["Java", "JavaScript"],
//   webDevelopment: ["HTML", "CSS", "JavaScript", "React.js"],
//   frameworks: ["Spring Framework"],
//   versionControl: ["Git", "GitHub"],
//   tools: ["VS Code", "PyCharm", "Eclipse"],
// };
