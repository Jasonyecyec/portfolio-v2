import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { PiFileCSharpFill } from "react-icons/pi";
import { PiFileSql } from "react-icons/pi";
import { AiOutlineDotNet } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Jasonyecyec",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-6 w-6"
        role="img"
        aria-labelledby="github-icon"
      >
        <title id="github-icon">GitHub</title>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    ),
  },
  {
    name: "Mail",
    href: "mailto:jason.yecyec023@gmail.com",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="mail-icon"
      >
        <title id="mail-icon">Mail</title>
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-yecyec-74545a201/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        role="img"
        aria-labelledby="linkedin-icon"
      >
        <title id="linkedin-icon">LinkedIn</title>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jason.yecyec.5",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className="h-7 w-7"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="facebook-icon">Facebook</title>
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
      </svg>
    ),
  },
];

export const experience = [
  {
    date: "APRIL 2025 - Present",
    position: "Software Engineer",
    company: "Smart Contents Co., Ltd.",
    details: [
      "Lead development of client-facing and product web applications, ensuring responsive and efficient UI/UX.",
      "Adapted quickly to backend technologies like FastAPI, delivering key API integrations and backend features.",
      "Collaborated closely with developers and cross-functional teams to ensure seamless API integration and on-time feature delivery.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
    ],
  },
  {
    date: "AUG 2024 - FEB 2025",
    position: "IT Software Developer",
    company: "Radiowealth Finance Company Inc.",
    details: [
      "Developed and maintained scalable code for internal system, adding new modules and fixing bugs.",
      "Revamped a Loan Application Admin System using Laravel and Vue.",
      "Configured and deployed web application on IIS Servers (UAT and Production environments).",
      "ETL Developer – Create and optimized reports using SQL scripts, Excel templates and PL/SQL functions to support data integration, reporting and financial reports presentation.",
    ],
    technologies: ["Laravel", "Vue.js", "JavaScript", "SQL", "AWS"],
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "SQL",
    icon: <PiFileSql />,
  },
  {
    name: "C#",
    icon: <PiFileCSharpFill />,
  },
  {
    name: "break",
    icon: null,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
  },
  {
    name: "ASP.NET",
    icon: <AiOutlineDotNet />,
  },
  {
    name: "break",
    icon: null,
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "DigitalOcean",
    icon: <FaDigitalOcean />,
  },
  {
    name: "REST API",
    icon: <AiFillApi />,
  },
];

export const projects = [
  {
    name: "The Good Neighborhood Cars (TGNC)",
    description:
      "A Smart Contents Co., Ltd. client project - a car inventory management and display system for The Good Neighbor Cars with a modern, user-friendly interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/tgnc.png",
    projectUrl: "https://www.tgnc.jp/",
  },

  {
    name: "Smart Chat AI",
    description:
      "A Smart Contents Co., Ltd. product that automates customer support 24/7/365 using AI. This business chat solution simultaneously improves operational efficiency and customer satisfaction.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/smartchat-ai.png",
    projectUrl: "https://smartchat-ai.smartcontents.co.jp/ja",
  },

  {
    name: "Recruitment Global",
    description:
      "A global recruitment management system for efficient hiring and candidate tracking.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      "Tailwind CSS",
      "ASP.NET Core Web API",
      "Open AI",
      "MySQL",
      "AWS",
    ],
    imageUrl: "/images/global-recruitment.png",
    projectUrl: "https://www.globalrecruitment.site",
  },
  {
    name: "Rental Car (THP Noble Cars)",
    description:
      "A Smart Contents Co., Ltd. client project - a car rental service platform for THP Noble Cars, featuring a seamless booking system and user-friendly interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/rental-car.png",
    projectUrl: "https://thp-rental-car.vercel.app/",
  },
  {
    name: "Poster AI",
    description:
      "A Smart Contents Co., Ltd. client project - an AI-powered poster generation tool for pachinko machines with automated image creation and customization.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/poster-ai.png",
    projectUrl: "#",
  },
  {
    name: "QCU-FMS (Facility Management System)",
    description:
      "A comprehensive system designed to simplify issue reporting, event requests, and service management for Quezon City University. ",
    imageUrl: "/images/qcu-fms.png",
    technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "Open AI"],
    projectUrl: "https://qcu-fms-admin.vercel.app",
  },
];
