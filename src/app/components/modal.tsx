"use client"
import { LuX } from "react-icons/lu";
import { ModalWorkExperienciaInterface } from "../interfaces/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModalWorkExperiencie({ dataModal, setDataModal }: ModalWorkExperienciaInterface) {

    const [onClose, setOnClose] = useState<boolean>(false)

    useEffect(() => {
        if (dataModal.show) {
            // Al abrir: bloqueamos el scroll
            document.body.style.overflow = "hidden";
        }
        else {
            // Al cerrar (función de limpieza): devolvemos el scroll
            document.body.style.overflow = "unset";
        }

    }, [dataModal.show]);

    useEffect(() => {
        if (onClose) {
            setTimeout(() => {
                setDataModal({ data: null, show: false })
                setOnClose(false)
            }, 150)
        }

    }, [onClose])


    if (dataModal.show && dataModal.data) {
        return (
            <div className="flex flex-col justify-center items-center w-vh h-vh fixed top-0 right-0 left-0 bottom-0 bg-black/75">
                <div className={`bg-[#1c1c1d] border-2 border-[#252728] rounded-md w-11/12 sm:w-xl shadow-md ${onClose ? "animate-zoom-out" : "animate-zoom-in"} animate-duration-150`}>
                    <div className="flex justify-end px-2 pt-2">
                        <button onClick={()=>{setOnClose(true)}} aria-label="Cerrar modal"><LuX className="text-gray-300 h-6 w-6 cursor-pointer" /></button>
                    </div>
                    <div className="mb-6">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Image
                                src={dataModal.data.image}
                                alt={`Logo de ${dataModal.data.company}`}
                                width={1024}
                                height={1024}
                                className="text-white h-18 w-18 rounded-full aspect-1/1 object-cover shadow-md"
                            />
                            <div className="flex flex-col items-center text-center mx-4">
                                <h2 className="text-white text-3xl font-medium text-shadow-md">{dataModal.data.company}</h2>
                                <small className="text-gray-400 text-xs text-shadow-md pt-1">{dataModal.data.when}</small>
                                <span className="text-white text-sm font-medium text-shadow-md">{dataModal.data.job} ({dataModal.data.type})</span>
                            </div>
                        </div>
                        <p className="whitespace-pre-line m-4 p-4 rounded-md text-gray-300 text-xs text-justify bg-[#252728] shadow-md">
                            {dataModal.data.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}