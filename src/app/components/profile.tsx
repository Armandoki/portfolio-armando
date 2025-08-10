import Image from "next/image";
import Link from "next/link";
import { stuffs } from "../utils/data";

export default function Profile() {
  return (
    <section className="bg-[#252728]">
      <div className="bg-gradient-to-b from-[#101111] to-[#252728]">
        <div className="max-w-5xl mx-auto">
          <Image
            src={"/profile/wallpaper-photo.jpg"}
            alt="Imagen de portada"
            width={2048}
            height={1724}
            className="aspect-32/9 object-cover object-center rounded-b-lg shadow-md"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <Image
            src={"/profile/profile-photo.jpg"}
            alt="Imagen de perfil"
            width={952}
            height={946}
            className="w-40 sm:w-44 object-cover object-center rounded-full border-5 border-[#252728] absolute left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 -top-18  sm:-top-20"
          />
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="w-full sm:w-56 h-24 sm:h-auto"></div>
              <div className="pb-4 sm:pb-9 sm:pt-4">
                <h1 className="text-center sm:text-left text-white text-3xl font-bold text-shadow-md">Armando?</h1>
                <h2 className="text-center sm:text-left text-gray-400 text-xs font-medium text-shadow-md">Desarrollador Front-End</h2>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center sm:justify-between gap-1 pb-4 sm:pb-0 sm:pr-8">
              {stuffs.map((stuff, index) => (
                <Link key={index} href={stuff.url} target="_blank" >
                  <button className="hover:bg-[#4f5152] rounded-md px-4 py-2 flex flex-row justify-between items-center gap-2 cursor-pointer" aria-label={`Ir a ${stuff.name}`}  title={`Ir a ${stuff.name}`}>
                    {stuff.icon}
                    <span className="text-gray-400 text-xs font-medium text-shadow-md">{stuff.name}</span>
                  </button>
                </Link>))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
