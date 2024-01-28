'use client'
import React, { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import { CardJobs } from './CardJobs'
import { experienceData } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'


export const Experience = () => {

    
  return (
    <motion.section
      className="scroll-mt-24 mt-24 max-w-[45rem] text-center leading-8 sm:mb-40 text-slate-200"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience">
      <SectionHeading>My Experience</SectionHeading>
      <div className="text-2xl">
            {experienceData.map((experience) => (
              <Fragment key={experience.id}>
                <div className="mt-12">
                  <div className="mb-8 border-2 border-spacing-2 p-16">
                    <div className="text-3xl mb-4 text-slate-50 font-semibold">
                      {experience.company}
                    </div>
                    <div className="text-xl mb-2 text-gray-200 font-semibold">
                      {experience.title}
                    </div>
                    <p className="text-sm mb-2 text-gray-200">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p className="text-sm text-gray-200">
                      {experience.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={experience.linkweb}
                        className="text-sm px-5 py-4 font-semibold text-slate-200 rounded-full border border-spacing-1 border-white focus:scale 
                        hover:bg-slate-200 hover:scale-105 hover:text-blue-900 hover: transition-all hover:duration-200 hover:ease-in-out"
                        target="_blank">
                        Get to know them
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
    </motion.section>
  )
}


