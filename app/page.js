
import Intro from "@/components/Intro";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <section className="flex min-h-screen flex-col items-center justify-between p-24 
                bg-gradient-to-b from-teal-100 from-5% via-cyan-50 via-60% to-white to-100%">

                <Intro />

            </section>
        </Fragment>
    );
}
