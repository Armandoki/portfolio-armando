"use client"

import Image from "next/image";
import { useState } from "react";
import { WorkExperienceInterface } from "../interfaces/interfaces";
import ModalWorkExperiencie from "./modal";
import { about_me, knowledge, professional_career, work_experience } from "../utils/data";
import Projects from "./projects";


export default function Main() {
    const [dataModal, setDataModal] = useState<{ data: WorkExperienceInterface | null, show: boolean }>({ data: null, show: false })

    return (
        <section className="bg-[#1c1c1d]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 pb-8">
                    <div className="flex flex-col gap-4 order-2 sm:order-1">

                        <div className="bg-[#252728] px-2 py-2 rounded-md shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Experiencia Profesional</h3>
                            <div className="flex flex-col justify-around mt-2 gap-2 max-h-64 overflow-y-auto scrollbar-none">
                                {work_experience.map((item, index) =>
                                    item.isProfessional &&
                                    <div key={index} className="bg-[#1c1c1d] hover:bg-[#4f5152] h-20 rounded-lg shadow-md flex flex-row items-center p-1 gap-2 sm:gap-3 cursor-pointer" onClick={() => { setDataModal({ data: item, show: true }) }}>
                                        <Image
                                            src={item.image}
                                            alt={`Logo de ${item.company}`}
                                            width={1024}
                                            height={1024}
                                            className="text-white h-18 w-18 rounded-md aspect-1/1 object-cover"
                                        />
                                        <div className="flex flex-col mr-2">
                                            <span className="text-gray-400 text-xs font-medium line-clamp-1">{item.when}</span>
                                            <span className="text-white text-base font-medium line-clamp-1">{item.company}</span>
                                            <span className="text-gray-400 text-xs font-medium mr-1 line-clamp-1">{item.job} ({item.type})</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-[#252728] px-2 py-2 rounded-md shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Otras Experiencias</h3>
                            <div className="flex flex-col justify-around mt-2 gap-2 max-h-60 sm:max-h-64 overflow-y-auto scrollbar-none">
                                {work_experience.map((item, index) =>
                                    !item.isProfessional &&
                                    <div key={index} className="bg-[#1c1c1d] hover:bg-[#4f5152] h-20 rounded-lg shadow-md flex flex-row items-center p-1 gap-2 sm:gap-3 cursor-pointer" onClick={() => { setDataModal({ data: item, show: true }) }}>
                                        <Image
                                            src={item.image}
                                            alt={`Logo de ${item.company}`}
                                            width={1024}
                                            height={1024}
                                            className="text-white h-18 w-18 rounded-md aspect-1/1 object-cover"
                                        />
                                        <div className="flex flex-col mr-2">
                                            <span className="text-gray-400 text-xs font-medium line-clamp-1">{item.when}</span>
                                            <span className="text-white text-base font-medium line-clamp-1">{item.company}</span>
                                            <span className="text-gray-400 text-xs font-medium mr-1 line-clamp-1">{item.job} ({item.type})</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-[#252728] px-2 py-2 rounded-md sm:max-h-max shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Acerca de Mí</h3>
                            <p className="text-gray-400 text-xs font-medium text-center pt-3 pb-2">Me considero una persona tranquila, con gustos simples e introvertida 🦝</p>
                            <div className="flex flex-wrap justify-around my-2">
                                {about_me.map((item, index) =>
                                    <button key={index} className="hover:bg-[#4f5152] rounded-md px-2 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`${item.name}`}>
                                        {item.icon}
                                        <span className="text-gray-400 text-xs font-medium text-shadow-md">{item.name}</span>
                                    </button>)}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 order-1 sm:order-2">

                        <div className="bg-[#252728] px-2 py-2 rounded-md sm:max-h-max shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Educación</h3>
                            <div className="flex flex-col justify-around mt-2 gap-2 max-h-60 sm:max-h-64 overflow-y-auto scrollbar-none">
                                {professional_career.map((item, index) =>
                                    <div key={index} className="bg-[#1c1c1d] h-20 rounded-lg shadow-md flex flex-row items-center p-1 gap-2 sm:gap-3">
                                        <Image
                                            src={item.image}
                                            alt={`Logo de ${item.career}`}
                                            width={1024}
                                            height={1024}
                                            className="text-white h-18 w-18 rounded-md aspect-1/1 object-cover"
                                        />
                                        <div className="flex flex-col mr-2">
                                            <span className="text-gray-400 text-xs font-medium line-clamp-1">{item.when}</span>
                                            <span className="text-white text-base font-medium line-clamp-1">{item.institution}</span>
                                            <span className="text-gray-400 text-xs font-medium mr-1 line-clamp-1">{item.career}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-[#252728] px-2 py-2 rounded-md sm:max-h-max shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Conocimientos</h3>
                            <div className="flex flex-wrap justify-around mt-2">
                                {knowledge.map((item, index) =>
                                    <button key={index} className="hover:bg-[#4f5152] rounded-md px-2 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`${item.name}`}>
                                        {item.icon}
                                        <span className="text-gray-400 text-xs font-medium text-shadow-md">{item.name}</span>
                                    </button>)}
                            </div>
                        </div>


                        <div className="bg-[#252728] px-2 py-2 rounded-md sm:max-h-max shadow-md">
                            <h3 className="text-left text-gray-300 text-xl font-medium text-shadow-md pl-1">Mis Proyectos</h3>
                            <Projects />
                        </div>

                    </div>
                </div>
            </div>
            <ModalWorkExperiencie dataModal={dataModal} setDataModal={setDataModal} />
        </section>
    );
}
