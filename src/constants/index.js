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
    year: "Jan 2024 - Present (1 Year 2 months)",
    role: "IT Support Specialist",
    company: "Artech, Banglore,  India - Remote ",
    description: `As an IT Support Specialist at Artech, I ensure seamless IT services for KPMG, specializing in hardware, software, networking, and Java-based application support. Skilled in Windows, SCCM, Citrix, Active Directory, Microsoft Office, and Lakeside SysTrack for system monitoring and issue resolution. Efficient in ServiceNow for troubleshooting, minimizing downtime, and maintaining IT documentation. Collaborates with KPMG’s IT team, supports new implementations, and contributes to training initiatives for enhanced technical proficiency.`,
    technologies: ["Active Directory", "Service Now","SysTrack","Incident Management", ],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    image: project1, 
    description:
"Built a Netflix clone app using React.js for the front-end and Tailwind CSS for responsive design."
+"Integrated Firebase for real-time database management and user authentication. The app allows users"
+"to browse movies, view previews, and search content seamlessly. Employed React Hooks for smooth"
+"state management and interactive user experience.",  
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://netflix-app-clone-three.vercel.app/", 

  },
  {
    title: "Smart Cart Using Store API",
    image: project2, 
    description:
    "This is an e-commerce website offering a dynamic and user-friendly shopping experience. Key features"
    +"in this project includes “Add to Cart” and “Add to Wishlist” functionalities, ensuring easy prod-"
    +"uct management for users, with data persistence through localStorage. Built with HTML, CSS, and"
    +"JavaScript, this app delivers a dynamic, responsive and interactive shopping experience. ",
      technologies: ["HTML", "CSS", "JavaScript"],
      link:"https://smart-cart-using-store-api.vercel.app/",
  },
  {
    title: "Medical Chatbot",
    image: project3,
    description:"Developed a medical chatbot using HTML, CSS, and JavaScript that provides suggestions for various"
    +"health-related queries. The chatbot is designed to in-teract with users and assist them in determining"
    +"their symptoms and providing advice on possible diagnoses or treatment options.",
  technologies: ["HTML", "CSS", "JavaScript"],
  link:"https://tarunkumarreddyk.github.io/MedicalChatBot/",

  },
  {
    title: "Raspberry Pi Based Multi-Language Reader for Blind",
    image: project4, 
    description:"This project, based on a Raspberry Pi, manages camera, "
    +"speaker and LCD peripherals, employing Optical Character Recognition "
    +" It captures well-illuminated English text, ideally in Times New Roman"+
    " font and a font size of at least 24. Upon successful recognition, the system "
    +"announces the content through the speaker. Moreover, it’s adaptable to "
    +"languages like Telugu and Hindi,by using the Text-to- Speech conversion"
    +" empowering visually impaired individuals to access printed material autonomously.",  
      technologies: ["Python", "Raspberry Pi", "OCR"],
      // link:"https://smart-cart-using-store-api.vercel.app/",

  },
];

export const CONTACT = {
  address: "Lakshminarayana Pura, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037",
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
