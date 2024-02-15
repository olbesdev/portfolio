import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "OlbesDev | Full Stack Developer",
    description: "OlbesDev - Full Stack Developer portfolio website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${montserrat.className} h-[5000px]`}>
                <SpeedInsights />
                <Header />
                {children}
            </body>
        </html>
    );
}
