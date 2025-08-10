import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armando's Portfolio",
  description: "Página portafolio de Armando?",
  openGraph: {
    title: "Portafolio de Armando?",
    description: "Página portafolio de Armando?",
    images: "/profile/profile-photo.jpg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body  className="bg-[#252728]">
        {children}
      </body>
    </html>
  );
}
