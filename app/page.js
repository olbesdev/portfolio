import { Fragment } from "react";

import  { About }  from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import { Experience } from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <Fragment>
            <section className="flex min-w-1 min-h-screen flex-col items-center justify-between p-14 
            bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
                
                <Intro />

                <Divider />
                
                <Experience />
                
                <Skills />

                <Projects />
                
                <About />

                <Contact />

            </section>
            

        </Fragment>
    );
}
