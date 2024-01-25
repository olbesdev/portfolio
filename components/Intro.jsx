'use client'
import { personalData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import TextShine from './TextChine'


const Intro = () => {

    const { name, description } = personalData[0]
    return (
        <section
        id="#home"
        className="scroll-mt-24 mb-28 max-w-[50rem] text-center sm:mb-0
        ">
            <div className="flex items-center justify-center mt-8">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                        className="h-48 w-48 rounded-full border-[0.35rem] border-gray-100 shadow-xl hover:scale-105 
                        transition-all duration-500 ease-in-out"
                        src={`/profile.png`}
                        alt="profile image"
                        priority={true}
                        width={192}
                        height={192}
                        />
                    </motion.div>
                </div>
            </div>

            <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leanding[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <span className="text-2xl font-bold text-slate-200">
                Hello 🖐, I &apos; m {name},{" "}
            </span>

            <span className="text-2xl text-slate-200">I &apos; am a {description}</span>
            </motion.h1>

            <motion.div
            className="flex flex-col justify-center items-center gap-2 px-4 sm:flex-row text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.5,
            }}
            >
                    <Link
                    href="#contact"
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                    online-none focus:scale hover:scale-105 transition-all duration-200 ease-in-out
                    hover:bg-gray-950 active:scale-100 ">
                        <div className='flex items-center  relative '
                        >
                            <div className='flex items-center'>
                                <TextShine>Contact me here </TextShine><BsArrowRight className="mx-2 opacity-80" />
                            </div>
                            
                            
                        </div>
                    </Link>
                        <a
                        className="bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full
                        online-none focus:scale hover:scale-105 transition-all duration-200 ease-in-out
                        hover:bg-white hover:text-gray-950 active:scale-100 hover:cursor-pointer border-gray-200 border-2 text-sm sm:text-lg md:2xl bg-[length:250%_100%] 
                        ">
                        Download CV
                            <HiDownload className="opacity-80 sm:text-lg md:2xl" href="/CV.pdf" download />
                        </a>

                        <a
                        className="bg-white text-gray-700 px-4 py-4 flex items-center gap-2 text-[1.45rem] rounded-full ocus:scale hover:scale-105 transition-all 
                        duration-200 ease-in-out hover:bg-white hover:text-gray-950 active:scale-100 hover:cursor-pointer"
                        href="https://linkedin.com/in/olbesdev"
                        target="_blank">
                            <BsLinkedin />
                        </a>

                        <a
                        className="bg-white text-gray-700 px-4 py-4 flex items-center gap-2 text-[1.45rem] rounded-full ocus:scale hover:scale-105 transition-all 
                        duration-200 ease-in-out hover:bg-white hover:text-gray-950 active:scale-100 hover:cursor-pointer"
                        href="https://github.com/olbesdev"
                        target="_blank">
                            <FaGithubSquare />
                        </a>
            </motion.div>
            <TextShine />
        </section>
    );
}

export default Intro


