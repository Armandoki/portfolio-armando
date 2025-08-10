import { GiRecycle } from "react-icons/gi";
import { AboutMeInterface, KnowledgeInterface, ProfessionalCareerInterface, ProjectInterface, StuffsInterface, WorkExperienceInterface } from "../interfaces/interfaces";
import { FaBootstrap, FaCss3Alt, FaDumbbell, FaGithubSquare, FaHtml5, FaJs, FaLinkedin, FaPizzaSlice, FaPython, FaReact } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";

export const stuffs: StuffsInterface[] = [
    { url: "https://www.linkedin.com/in/armando-neira-a700ba1ba/", name: "Linkedin", icon: <FaLinkedin className="text-[#0077B5] h-4 w-4" /> },
    { url: "https://github.com/Armandoki", name: "Git Hub", icon: <FaGithubSquare className="text-[#FFFFFF] h-4 w-4" /> },
    { url: "/docs/cv.pdf", name: "CV", icon: <MdPictureAsPdf className="text-[#FF0000] h-4 w-4" /> },
]

//AGREGAR DESCRIPCIONES POR MI
export const work_experience: WorkExperienceInterface[] = [
    {
        link: "",
        company: "Latitur",
        job: "Desarrollador Front End",
        type: "Full Time",
        when: "Nov. 2024",
        image: "/icons/latitur.jpg",
        description: `Trabajé en el desarrollo de nuevas funcionalidades y ajustes para la página web de Latitur, utilizando por sobre todo Nextjs y Tailwind CSS, además de librerías variadas para algunas funcionalidades y componentes.\n\nPor otra parte, también realizamos migraciones de los servicios de Latitur, por lo que me encargué de documentar todas las APIs de la web y sus funcionalidades, además de ajustar las peticiones a los nuevos end-points, cómo también su visualización en la página.\n\nUtilizábamos a su vez uBugTrack para la gestión de las tareas y como principal fuente de comunicación WhatsApp por su versatilidad y disponibilidad.
        `,
        isProfessional: true
    },
    {
        link: "",
        company: "Tottus Chile",
        job: "Reponedor",
        type: "Part Time",
        when: "Sept. 2024 - Nov. 2024",
        image: "/icons/tottus.jpg",
        description: `Encargado de la reposición y organización de productos en góndolas, además de la gestión del stock y revisión de fechas de vencimiento.`,
        isProfessional: false
    },
    {
        link: "",
        company: "Happyland Chile",
        job: "Anfitrión",
        type: "Part Time",
        when: "Jul. 2024 - Ago. 2024",
        image: "/icons/happyland.jpg",
        description: `Encargado de atender y supervisar los juegos, garantizando el orden y la seguridad, además asistía a los usuarios y mantenía la limpieza de la sala.`,
        isProfessional: false
    },
    {
        link: "",
        company: "Full Conectados Ltda",
        job: "FullStack Developer",
        type: "Práctica",
        when: "Ago. 2023 - Nov. 2023",
        image: "/icons/fullconectados.jpg",
        description: `Durante mi práctica profesional en Full Conectados, fui responsable de mejorar y generar nuevos módulos para la página web de su principal cliente Metrogas, trabajando tanto en el front-end como en el back-end.\n\nTambién delegaba tareas QA a mis otros compañeros practicantes para probar los módulos realizados y a su vez generábamos propuestas para futuros módulos con base en los requerimientos del cliente.\n\nY a su vez participábamos en las reuniones diarias y semanales para compartir y hablar de nuestros avances en el proyecto. `,
        isProfessional: true
    },
    {
        link: "",
        company: "Full Conectados Ltda",
        job: "Web Develop Intership",
        type: "Pasantía",
        when: "Sept. 2022 - Ene. 2023",
        image: "/icons/fullconectados.jpg",
        description: `Realice pruebas de QA de caja negra sobre sistema desarrollado para Colbún, como también los informes de pruebas correspondientes en base en los hallazgos.`,
        isProfessional: true
    }
];

export const knowledge: KnowledgeInterface[] = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] h-4 w-4" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] h-4 w-4" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] h-4 w-4" /> },
    { name: "ReactJS", icon: <FaReact className="text-[#61DAFB] h-4 w-4" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-[#06B6D4] h-4 w-4" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] h-4 w-4" /> },
    { name: "NextJS", icon: <RiNextjsFill className="text-black h-4 w-4" /> },
    { name: "Python", icon: <FaPython className="text-white h-4 w-4" /> },
    { name: "Excel", icon: <PiMicrosoftExcelLogoFill className="text-[#008000] h-4 w-4" /> },
    { name: "SQL", icon: <TbSql className="text-[#0064a5] h-4 w-4" /> },
    { name: "SCRUM", icon: <GiRecycle className="text-[#FFD700] h-4 w-4" /> }
];

export const about_me: AboutMeInterface[] = [
    { name: "Videojuegos", icon: <IoGameController className="text-green-700 h-4 w-4" /> }, 
    { name: "Gimnasio", icon: <FaDumbbell className="text-gray-700 h-4 w-4" /> }, 
    { name: "Películas", icon: <BiSolidCameraMovie className="text-blue-900 h-4 w-4" /> }, 
    { name: "Pizzas", icon: <FaPizzaSlice className="text-yellow-600 h-4 w-4" /> }, 
];

export const professional_career: ProfessionalCareerInterface[] = [
    { link: "", institution: "Duoc UC", career: "Ingeniería en Informática", when: "Mar. 2020 - Dic. 2023", image: "/icons/duocuc.jpg" },
    { link: "", institution: "Colegio Balmaceda", career: "Licencia de Enseñanza Media", when: "Mar. 2016 - Dic. 2019", image: "/icons/balmaceda.png" },
]

export const projects: ProjectInterface[] = [
    {
        name: "Your Highlights",
        github: "https://github.com/Armandoki/Your-Highlights",
        link: "",
        image: "/projects/your-highlights.jpg",
        techs: ["html", "css", "bootstrap"],
        description: "Página web para compartir tus mejores jugadas en los videojuegos, realizada como proyecto semestral"
    },
    {
        name: "My Training",
        github: "https://github.com/Armandoki/My-Training",
        link: "",
        image: "/projects/my-training.jpg",
        techs: ["typescript", "html", "sass", "bootstrap", "angular"],
        description: "Aplicación móvil para fomentar la actividad física, realizada como proyecto semestral"
    },
    {
        name: "Music Pro",
        github: "https://github.com/Armandoki/Music-Pro",
        link: "",
        image: "/projects/music-pro.jpg",
        techs: ["html", "css", "js", "bootstrap"],
        description: "Página web para comprar instrumentos musicales, realizada como proyecto semestral"
    },
    {
        name: "Hollow",
        github: "https://github.com/Armandoki/Hollow",
        link: "",
        image: "/projects/hollow.jpg",
        techs: ["css", "js", "html", "bootstrap"],
        description: "Hollow es un pequeño minijuego en donde podrás resolver ejercicios matemáticos de los principales operadores aritméticos"
    },
    {
        name: "Roulette",
        github: "https://github.com/Armandoki/Roulette",
        link: "https://roulette-one-tau.vercel.app",
        image: "/projects/roulette.jpg",
        techs: ["html", "css", "js", "react", "bootstrap"],
        description: "Aplicación para escoger algún valor de manera aleatoria utilizando una ruleta"
    },
    {
        name: "To Do App",
        github: "https://github.com/Armandoki/to-do-app",
        link: "https://to-do-app-olive-tau.vercel.app",
        image: "/projects/to-do-app.jpg",
        techs: ["html", "css", "js", "react", "bootstrap"],
        description: "Aplicación para organizar tareas"
    },
    {
        name: "Primer Portafolio",
        github: "https://github.com/Armandoki/Portafolio-Personal",
        link: "https://armandoki.github.io/Portafolio-Personal/",
        image: "/projects/portafolio.jpg",
        techs: ["html", "css", "js", "react", "bootstrap"],
        description: "Mi primer portafolio creado alguna vez"
    }
]