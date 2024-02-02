
import React, { Fragment } from 'react'
import  SectionHeading  from '@/components/SectionHeading'
import Project from '@/components/Project'
import { projectData } from '@/lib/data'

const Projects = () => {
  return (
    <section id='projects' className='pt-24'>
      <SectionHeading>My Projects</SectionHeading>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 lg:gap-12'
        
        >
            {projectData.map((project, index) => (
                <Fragment key={index}>
                    <Project {...project} />
                </Fragment>
            ))}
        </div>
    </section>
  )
}

export default Projects
