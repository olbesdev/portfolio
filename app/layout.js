import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "OlbesDev | Full Stack Developer",
    description: "OlbesDev - Full Stack Developer portfolio website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} text-gray-800`}>{children}</body>
        </html>
    );
}
