
import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Experience } from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <section className="flex min-h-screen flex-col items-center justify-between p-14 
            bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
                
                <Intro />
                
                <Experience />
                
                <Skills />

                <Projects />
                
                <About />

                <Contact />

            </section>
            

        </Fragment>
    );
}
