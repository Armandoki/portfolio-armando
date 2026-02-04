"use client"

import Image from "next/image"
import { projects } from "../utils/data"
import { useState } from "react"
import { FaGithubSquare } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


export default function Projects() {

    const [indexProject, setIndexProject] = useState<number>(0)

    function nextProject() {
        setIndexProject(prev => {
            if (prev + 1 >= projects.length) {
                return 0
            } else {
                return prev + 1
            }

        });
    }

    function previousProject() {
        setIndexProject(prev => {
            if (prev - 1 < 0) {
                return projects.length - 1
            }
            else {
                return prev - 1
            }
        });
    }

    function selectProject(index: number) {
        setIndexProject(index)
    }

    return (
        <>
            <div className="relative group overflow-hidden">
                <div className="flex transition-transform duration-450"
                    style={{ transform: `translateX(-${indexProject * 100}%)` }}>



                    {projects.map((project, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative px-1">
                            <div className="bg-[#1c1c1d] rounded-lg shadow-md flex flex-col p-1 pb-0 mt-2 mb-2">
                                <Image
                                    src={project.image}
                                    alt={`Imagen de ${project.name}`}
                                    width={1024}
                                    height={1024}
                                    className="text-white rounded-md rounded-b-none aspect-21/9 object-cover"
                                />
                                <div className="p-2">
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-white text-base font-medium line-clamp-1">{project.name}</span>
                                        <div className="flex justify-between gap-2">
                                            {project.link &&
                                                <Link href={project.link} target="_blank">
                                                    <button className="hover:bg-[#4f5152] rounded-md px-2 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`Ir a la página de ${project.name}`} title={`Ir a la página de ${project.name}`}>
                                                        <TbWorldWww className="text-[#0077B5] h-5 w-5" />
                                                    </button>
                                                </Link>
                                            }
                                            {project.github &&
                                                <Link href={project.github} target="_blank">
                                                    <button className="hover:bg-[#4f5152] rounded-md px-2 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`Ir al repositorio de ${project.name}`} title={`Ir al repositorio de ${project.name}`}>
                                                        <FaGithubSquare className="text-[#FFFFFF] h-5 w-5" />
                                                    </button>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-xs line-clamp-3 font-medium text-justify pt-1 h-14">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row gap-2 pb-1">
                                        {project.techs.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button onClick={previousProject} className="bg-[#1c1c1d] hover:bg-[#4f5152] rounded-md p-1 cursor-pointer w-10 flex justify-center" aria-label="Retroceder un proyecto" title="Retroceder un proyecto">
                    <IoIosArrowBack className="text-[#FFFFFF] h-4 w-4" />
                </button>
                <div className="flex flex-row gap-2">
                    {projects.map((projects, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => { selectProject(index) }}
                                className={`h-2 w-2 ${index === indexProject ? "bg-white" : "bg-[#4f5152]"} rounded-full cursor-pointer`}
                                aria-label={`Ir a ${projects.name}`}
                                title={`Ir a ${projects.name}`}
                            />
                        )
                    })}
                </div>
                <button onClick={nextProject} className="bg-[#1c1c1d] hover:bg-[#4f5152] rounded-md p-1 cursor-pointer w-10 flex justify-center" aria-label="Avanzar un proyecto" title="Avanzar un proyecto">
                    <IoIosArrowForward className="text-[#FFFFFF] h-4 w-4" />
                </button>
            </div>
        </>
    )
}