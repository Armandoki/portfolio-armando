import { JSX } from "react"

export interface StuffsInterface {
    url: string
    name: string
    icon: JSX.Element
}

export interface WorkExperienceInterface {
    link: string
    company: string
    job: string
    type: string
    when: string
    image: string
    description: string
    isProfessional: boolean
}

export interface ModalWorkExperienciaInterface {
    dataModal: { data: WorkExperienceInterface | null, show: boolean }
    setDataModal: React.Dispatch<React.SetStateAction<{ data: WorkExperienceInterface | null, show: boolean }>>;
}

export interface KnowledgeInterface {
    name: string
    icon: JSX.Element
}

export interface AboutMeInterface {
    name: string
    icon: JSX.Element
}

export interface ProfessionalCareerInterface {
    link: string
    institution: string
    career: string
    when: string
    image: string
}

export interface ProjectInterface {
    link: string
    github: string
    name: string
    techs: string[]
    image: string
    description: string
}