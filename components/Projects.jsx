'use client'
import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { projectData } from '@/lib/data'
import { Fragment } from 'react'
import { motion } from 'framer-motion'





const Projects = () => {
  return (
        <motion.section className='scroll-mt-24 mt-2 max-w-[45rem] text-center leading-8 sm:mb-40'
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y: 0}}
        transition={{delay: 0.175}}
        id='projects'
        >
            <SectionHeading>My Projects</SectionHeading>
                <div className='mt-24 max-w-[45rem] text-start border-spacing-1 border-slate-900 border-l-lime-50 leading-8 sm:mb-40'>
                {projectData.map((project, index) => (
                    <Fragment key={index}>
                        <div className='mb-3 mt-4'>
                            <h3 className='text-2xl font-semibold text-slate-100'>{project.title}</h3>
                            <p className='text-sm text-gray-200'>
                                {project.date}
                            </p>
                        <p className='mb-4 text-slate-100'>{project.description}</p>
                        <p className='mb-4 text-slate-100'>{project.technologies}</p>
                        <div className='flex justify-center'>
                            <a className='bg-white text-gray-700 px-5 py-2 flex items-center gap-2 text-[1rem] rounded-full focus:scale hover:scale-105 transition-all 
                            duration-200 ease-in-out hover:bg-slate-900 hover:text-slate-100 hover:font-semibold active:scale-100 hover:cursor-pointer' 
                            href={`${project.website}`} target='_blank'>Visit Web Site</a> 
                        </div>
                        </div>
                    </Fragment>
                ))} 
                </div>
        </motion.section>
        )
}

export default Projects