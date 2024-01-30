import React from "react";
import { projectData } from '@/lib/data'
import Image from "next/image";

const Project = ({site, title, company, date, description, website, imgUrl, technologies}) => {
    return (
        <section className="bg-gray-100 h-auto max-w-[42rem] border border-black/5 
        overflow-hidden sm:pr-8"
        >
            <h3 className="text-2xl font-semibold">{site}</h3>
            <h4 className="text-lg text-gray-700">{title}</h4>
            <h5 className="text-lg text-gray-500">{company}</h5>
            <p className="text-lg text-gray-500">{date}</p>
            <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2">
                {technologies.map((tech, index) => (
                    <li className="bg-blue-950 px-3 py-1 text-[0.7rem] uppercase
                    tracking-wider text-white font-semibold rounded-full"
                    key={index}
                    >#{tech}</li>
                    ))}
            </ul>
            <Image src={imgUrl} alt="Proyect I worked on" quality={95} />




        </section>
    )
};

export default Project;
