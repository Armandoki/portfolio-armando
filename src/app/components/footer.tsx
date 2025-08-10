"use client"

import Link from "next/link";
import { stuffs } from "../utils/data";

export default function Footer() {

    const date = new Date().getFullYear()

    return (
        <section className="bg-[#252728]">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center sm:items-stretch p-4 py-2">
                    <div className="flex flex-row justify-between items-center">
                        <span className="hidden sm:block text-white font-medium text-shadow-md">{`© ${date} Armando?`}</span>
                        <div className="flex flex-row justify-between gap-2">
                            {stuffs.map((stuff, index) => (
                                <Link key={index} href={stuff.url} target="_blank" >
                                    <button className="rounded-md px-2 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`Ir a ${stuff.name}`} title={`Ir a ${stuff.name}`}>
                                        {stuff.icon}
                                        <span className="text-gray-400 text-xs font-medium text-shadow-md hover:underline">{stuff.name}</span>
                                    </button>
                                </Link>))
                            }
                        </div>
                    </div>
                    <span className="block sm:hidden text-white font-medium text-shadow-md">{`© ${date} Armando?`}</span>
                </div>
            </div>
        </section>
    );
}
