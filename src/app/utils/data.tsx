import { GiRecycle } from "react-icons/gi";
import { AboutMeInterface, KnowledgeInterface, ProfessionalCareerInterface, ProjectInterface, StuffsInterface, WorkExperienceInterface } from "../interfaces/interfaces";
import { FaAngular, FaBootstrap, FaCss3Alt, FaDumbbell, FaGithubSquare, FaHtml5, FaJs, FaLinkedin, FaPizzaSlice, FaPython, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiBlender, SiCanva, SiIonic, SiSpringboot, SiSupabase, SiTypescript } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";

export const stuffs: StuffsInterface[] = [
    { url: "https://www.linkedin.com/in/armando-neira-a700ba1ba/", name: "Linkedin", icon: <FaLinkedin className="text-[#0077B5] h-4 w-4" /> },
    { url: "https://github.com/Armandoki", name: "Git Hub", icon: <FaGithubSquare className="text-[#FFFFFF] h-4 w-4" /> },
    { url: "/docs/armando-neira-cv.pdf", name: "CV", icon: <MdPictureAsPdf className="text-[#FF0000] h-4 w-4" /> },
]

//AGREGAR DESCRIPCIONES POR MI
export const work_experience: WorkExperienceInterface[] = [
    {
        link: "",
        company: "Arkenco",
        job: "Desarrollador Front End",
        type: "Part Time",
        when: "May. 2026",
        image: "/icons/arkenco.jpg",
        description: `Principalmente desarrollando nuevas funcionalidades, ajustes y diseños para el CRM de Arkenco, utilizando principalmente React y Tailwind CSS, además de algunas librerías de React como Prime React.`,
        isProfessional: true
    },
    {
        link: "",
        company: "MASS Chile",
        job: "Operador de Tienda",
        type: "Full Time",
        when: "Feb. 2026",
        image: "/icons/mass.png",
        description: `Encargado de la atención a clientes, resolución de consultas y apoyo durante la venta, manejo de caja y cobro de productos, reposición y orden de productos en sala, control básico de stock, apoyo en la organización de mercadería y mantención del orden, limpieza y correcta presentación del local.`,
        isProfessional: false
    },
    {
        link: "",
        company: "Latitur",
        job: "Desarrollador Front End",
        type: "Full Time",
        when: "Nov. 2024 - Sept. 2025",
        image: "/icons/latitur.jpg",
        description: `Trabajé en el desarrollo de nuevas funcionalidades y ajustes para la página web de Latitur, utilizando principalmente NextJS y Tailwind CSS, además de algunas librerías de React, logre además reducir el tiempo de carga realizando peticiones en paralelo, mejorando su visual con skeletons y precargando archivos estáticos obteniendo a su vez una mejor puntuación en Lighthouse.\n\nPor otra parte, también realizamos migraciones de los servicios de Latitur, por lo que me encargué de documentar todas las APIs conectadas al Front End y sus funcionalidades, además de ajustar las peticiones a los nuevos endpoints de Strapi, cómo también configurar los componentes para su correcta visualización.`,
        isProfessional: true
    },
    {
        link: "",
        company: "Tottus Chile",
        job: "Reponedor",
        type: "Part Time",
        when: "Sept. 2024 - Nov. 2024",
        image: "/icons/tottus.jpg",
        description: `Encargado de la reposición y organización de productos en góndolas, gestión del stock, actualización de flejes, revisión de fechas de vencimiento y atención a clientes.`,
        isProfessional: false
    },
    {
        link: "",
        company: "Happyland Chile",
        job: "Anfitrión",
        type: "Part Time",
        when: "Jul. 2024 - Ago. 2024",
        image: "/icons/happyland.jpg",
        description: `Responsable de atender y supervisar las atracciones, garantizando el orden y la seguridad de los participantes, como también asistir a los clientes y mantener el orden y limpieza del recinto.`,
        isProfessional: false
    },
    {
        link: "",
        company: "Full Conectados Ltda",
        job: "FullStack Developer",
        type: "Práctica",
        when: "Ago. 2023 - Nov. 2023",
        image: "/icons/fullconectados.jpg",
        description: `Responsable de mejorar y generar nuevos módulos para la web de su principal cliente Metrogas, trabajando tanto en el Front End donde utilizamos NextJS y Bootstrap como también en el Back End que estaba construido en .NET.\n\nDelegue a su vez tareas de QA a mis otros compañeros practicantes para probar los módulos realizados y a su vez generábamos propuestas para futuros módulos con base en los requerimientos del cliente.`,
        isProfessional: true
    },
    {
        link: "",
        company: "Full Conectados Ltda",
        job: "Web Develop Intership",
        type: "Pasantía",
        when: "Sept. 2022 - Ene. 2023",
        image: "/icons/fullconectados.jpg",
        description: `Encargado de realizar pruebas de caja negra (QA) sobre sistema desarrollado para Colbún, como también sus respectivos informes de prueba en base a los hallazgos.`,
        isProfessional: true
    }
];

export const knowledge: KnowledgeInterface[] = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] h-4 w-4" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] h-4 w-4" /> },
    { name: "SASS", icon: <FaSass className="text-[#CC6699] h-4 w-4" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] h-4 w-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] h-4 w-4" /> },
    { name: "ReactJS", icon: <FaReact className="text-[#61DAFB] h-4 w-4" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-[#06B6D4] h-4 w-4" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] h-4 w-4" /> },
    { name: "NextJS", icon: <RiNextjsFill className="text-white h-4 w-4" /> },
    { name: "VueJS", icon: <FaVuejs className="text-[#41B883] h-4 w-4" /> },
    { name: "Python", icon: <FaPython className="text-white h-4 w-4" /> },
    { name: "Excel", icon: <PiMicrosoftExcelLogoFill className="text-[#008000] h-4 w-4" /> },
    { name: "Power BI", icon: <VscGraph className="text-[#F9D087] h-4 w-4" /> },
    { name: "SQL", icon: <TbSql className="text-[#0064a5] h-4 w-4" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#34B27B] h-4 w-4" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F] h-4 w-4" /> },
    { name: "SCRUM", icon: <GiRecycle className="text-[#FFD700] h-4 w-4" /> },
    { name: "Blender", icon: <SiBlender className="text-[#EA7600] h-4 w-4" /> },
    { name: "Canva", icon: <SiCanva className="text-[#07B9CE] h-4 w-4" /> }
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

export const projects: ProjectInterface[] = [ //DE JPG A PNG en images
    {
        name: "Roulette",
        github: "https://github.com/Armandoki/Roulette",
        link: "https://roulette-one-tau.vercel.app",
        image: "/projects/roulette.png",
        techs: [<FaReact className="text-[#61DAFB] h-4 w-4" key={"react"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Aplicación para escoger algún valor de manera aleatoria utilizando una ruleta"
    },
    {
        name: "To Do App",
        github: "https://github.com/Armandoki/to-do-app",
        link: "https://to-do-app-olive-tau.vercel.app",
        image: "/projects/to-do-app.png",
        techs: [<FaReact className="text-[#61DAFB] h-4 w-4" key={"react"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Aplicación para organizar tareas"
    },
    {
        name: "Weather App",
        github: "https://github.com/Armandoki/weather-app",
        link: "https://weather-app-dusky-two-12.vercel.app",
        image: "/projects/weather-app.png",
        techs: [<FaVuejs className="text-[#41B883] h-4 w-4" key={"vuejs"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Aplicación simple para ver el tiempo en tu locación"
    },
    {
        name: "MKPlace",
        github: "",
        link: "https://mkplace-five.vercel.app/",
        image: "/projects/mkplace.png",
        techs: [<RiNextjsFill className="text-white h-4 w-4" key={"nextjs"} />, <RiTailwindCssFill className="text-[#06B6D4] h-4 w-4" key={"tailwind"} />, <SiSupabase className="text-[#34B27B] h-4 w-4" key={"supabase"} />],
        description: "Marketplace para estudiantes de una misma institución"
    },
    {
        name: "Primer Portafolio",
        github: "https://github.com/Armandoki/Portafolio-Personal",
        link: "https://armandoki.github.io/Portafolio-Personal/",
        image: "/projects/portafolio.png",
        techs: [<FaReact className="text-[#61DAFB] h-4 w-4" key={"react"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Mi primer portafolio creado alguna vez"
    },
    {
        name: "Your Highlights",
        github: "https://github.com/Armandoki/Your-Highlights",
        link: "",
        image: "/projects/your-highlights.png",
        techs: [<FaHtml5 className="text-[#E34F26] h-4 w-4" key={"html"} />, <FaCss3Alt className="text-[#1572B6] h-4 w-4" key={"css"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Página web para compartir tus mejores jugadas en los videojuegos, realizada como proyecto semestral"
    },
    {
        name: "My Training",
        github: "https://github.com/Armandoki/My-Training",
        link: "",
        image: "/projects/my-training.png",
        techs: [<FaAngular className="text-[#DD0031] h-4 w-4" key={"angular"} />, <SiIonic className="text-[#3880FF] h-4 w-4" key={"angular"} />, <FaSass className="text-[#CC6699] h-4 w-4" key={"sass"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Aplicación móvil para fomentar la actividad física, realizada como proyecto semestral"
    },
    {
        name: "Music Pro",
        github: "https://github.com/Armandoki/Music-Pro",
        link: "",
        image: "/projects/music-pro.png",
        techs: [<FaHtml5 className="text-[#E34F26] h-4 w-4" key={"html"} />, <FaCss3Alt className="text-[#1572B6] h-4 w-4" key={"css"} />, <FaJs className="text-[#F7DF1E] h-4 w-4" key={"js"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Página web para comprar instrumentos musicales, realizada como proyecto semestral"
    },
    {
        name: "Hollow",
        github: "https://github.com/Armandoki/Hollow",
        link: "",
        image: "/projects/hollow.png",
        techs: [<FaHtml5 className="text-[#E34F26] h-4 w-4" key={"html"} />, <FaCss3Alt className="text-[#1572B6] h-4 w-4" key={"css"} />, <FaJs className="text-[#F7DF1E] h-4 w-4" key={"js"} />, <FaBootstrap className="text-[#7952B3] h-4 w-4" key={"bootstrap"} />],
        description: "Hollow es un pequeño minijuego en donde podrás resolver ejercicios matemáticos de los principales operadores aritméticos"
    },
]

