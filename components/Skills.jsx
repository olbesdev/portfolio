'use client'
import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { skillData } from '@/lib/data'
import { animate, motion } from 'framer-motion'



const Skills = () => {

  

  return (
  
    <section  className='scroll-mt-24 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 h-screen'
    initial={{opacity:0, y: 100}}
    animate={{opacity:1, y: 0}}
    transition={{delay: 0.175}}
    id='skills'>
        <SectionHeading>My Skills</SectionHeading>
          <ul>
            {
              skillData.map((skill, index) => (
                <motion.li key={skill.name} className='inline-block px-3 py-2 mx-2 my-2 text-md font-semibold text-gray-800
                 rounded-md bg-slate-200'
                 initial={{ y: -100, opacity: 0 }}
                 animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 } }
                }
                >
                  {skill.name}
                </motion.li>
              ))
            }
          </ul>
    </section>
  
  )
}

export default Skills