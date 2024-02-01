'use client'
import React, { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import { CardJobs } from './CardJobs'
import { experienceData } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import TimeLineExperience from './TimeLineExperience'


export const Experience = () => {

    
  return (
    <motion.section
      className="scroll-mt-24 mt-24 max-w-[85rem] text-center leading-8 sm:mb-40 text-slate-200 sm:block sm:max-w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience">
      <SectionHeading>My Experience</SectionHeading>
      <div className="text-xl">
            {experienceData.map((experience, index) => (
              <Fragment key={index}>
                <TimeLineExperience {...experience} />
              </Fragment>
            ))}
          </div>
    </motion.section>
  )
}


