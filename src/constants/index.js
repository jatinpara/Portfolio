import chattyImage from '../assets/projects/chattyImage.png'
import socializerImage from '../assets/projects/socializerImage.png'
import vegDelightImage from '../assets/projects/vegDelightImage.png'
import jobFinderImage from '../assets/projects/jobFinderImage.png'
import bloggItImage from '../assets/projects/bloggItImage.png'

export const HERO_CONTENT = "Aspiring MERN stack developer passionate about building dynamic and responsive web applications. Skilled in MongoDB, Express.js, React, and Node.js, with a strong focus on writing clean, efficient code and creating seamless user experiences.";

export const ABOUT_TEXT = "I am a full-stack developer with a focus on building clean and efficient web applications using the MERN stack—MongoDB, Express.js, React, and Node.js. I enjoy learning new technologies and improving my skills to create better user experiences. My interest in development started with curiosity about how websites work, and I continue to explore and refine my approach to coding. Outside of development, I like experimenting with new tools and staying updated with industry trends.Apart from development designing is also one of my hobbies to keep my creativity up."; 


export const PROJECTS = [
    {
        title: "Chatty - Real-Time Chat App",
        image: chattyImage, 
        description:
          "A modern real-time messaging platform built with the MERN stack, Socket.io, and TailwindCSS, offering secure authentication and seamless chat experience.",
        technologies: [
          "React.js",
          "TailwindCSS",
          "Daisy UI",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT Authentication",
          "Socket.io",
          "Zustand",
        ],
        link:"https://chatty-39pn.onrender.com",
        github:'https://github.com/jatinpara/Chatty'
      },
      {
        title: "Socializer - Social Networking Platform",
        image: socializerImage,
        description:
          "A modern social networking platform enabling users to connect, share moments, and engage with content seamlessly.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "PostgreSQL",
          "Prisma",
          "Clerk",
          "UploadThing",
        ],
        link:"https://socializer-beige.vercel.app",
        github:'https://github.com/jatinpara/Socializer'
      },
    {
      title: "VegDelight - Food Ordering Platform",
      image: vegDelightImage, 
      description:
        "A modern food ordering platform with a user-friendly frontend, secure backend, and an admin panel for efficient system management.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "JWT",
        "bcrypt",
      ],
      github:'https://github.com/jatinpara/VegDelight'
    },
    
      {
        title: "BloggIt - Blogging Platform",
        image: bloggItImage, 
        description:
          "A lightweight blogging platform that allows users to upload, view, and manage blogs online with admin capabilities.",
        technologies: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "React Toastify",
          "Node.js",
          "Express.js",
          "MongoDB",
    
        ],
        github:'https://github.com/jatinpara/BloggIt'
      },
      {
        title: "JobFinder - Job Board Platform",
        image: jobFinderImage,
        description:
          "A full-stack job board application connecting job seekers and employers with features like job search, job applications, and dashboards.",
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT Authentication",
          "Multer",
          "Cloudinary",
        ],
        github:'https://github.com/jatinpara/Job_Portal'
      },



    ];

export const CONTACT = {
  email: "jparashar2002@gmail.com",
};