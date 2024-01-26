'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

export const About = () => {
  return (
      <section className="flex mt-28 min-h-screen text-slate-200 font-normal">
          <motion.div
              className="scroll-mt-24 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.175 }}
              id="about">
              <SectionHeading>About me</SectionHeading>
              <p className="mb-3">
                  Since I was very young, I have always had a passion for
                  computers, I thank my grandfather who bought me the first AT
                  286 computer. Years passed and each one of them I learned
                  something new about computing but in me I wanted to know all
                  the possible areas.
              </p>

              <p className="mb-4">
                  When I was a teenager I only thought about computers, I was
                  not interested in anything else, which led me to teach myself
                  how to repair this equipment, how it worked, what each
                  component did and how to repair it. I dedicated many years to
                  doing this work until my time came... Go to university.
              </p>

              <p className="mb-4">
                  I started learning about web development, I started learning
                  about programming, I really liked PHP, but without guidance at
                  that time I started the other way around, through the backend.
                  It became very difficult for me to understand and then after
                  several years, I took some money I had saved and enrolled in a
                  Full-Stack Web Developer course.
              </p>

              <p className="mb-4">
                  Between work, family, and household duties, I always set aside
                  time to learn more every day. I took some savings and signed
                  up for a platform that promised to be a developer in 1 year
                  and that you would get a job in just days, and as you already
                  know... It was a lie. The classes were somewhat exciting at
                  the beginning but when you enter the world of development you
                  realize that what they explained to you in class was just an
                  introduction to this very deep world. But this did not dull my
                  desire to move forward, to continue learning and in forums,
                  pages and videos they tell you &quot;Read the
                  documentation&quot; and that &apos;s what I did. Read, read
                  and read.
              </p>

              <p className="mb-4">
                  Right now, without fear of success, I am looking for projects
                  where I can begin to learn and develop my knowledge that I
                  have acquired over 2 years. Salary? Sometimes for me it is
                  irrelevant, I just want to enter this world of development and
                  lose my fears, streamline my mind and have the opportunity to
                  demonstrate that with effort and studies you can reach the
                  stars.
              </p>
          </motion.div>
      </section>
  );
}
