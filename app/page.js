
import Intro from "@/components/Intro";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <section className="flex min-h-screen flex-col items-center justify-between p-14 
                bg-gradient-to-t from-blue-700 from-10% via-blue-800 via-40% to-gray-800 to 100%">

                <Intro />

            </section>
        </Fragment>
    );
}
