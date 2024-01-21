import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <section
                id="$home"
                className="flex min-h-screen flex-col items-center justify-between p-24 
                bg-gradient-to-bl from-indigo-200 from-10% via-sky-100 via-30% to-emerald-200 to-90%">
                <div className="flex flex-col items-center b">
                    <h1 className="text-4xl font-bold mt-4">OlbesDev</h1>
                    <p className="text-xl text-center mt-4">
                        Full Stack Developer
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="https://olbesdev.xyz"></a>
                </div>
            </section>
        </Fragment>
    );
}
