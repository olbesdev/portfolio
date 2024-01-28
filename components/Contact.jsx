//'use client'
import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { BsArrowRight } from 'react-icons/bs'


const Contact = () => {
  return (
      <section
          id="contact"
          className="scroll-mt-24 max-w-[64rem] text-center leading-8 sm:mb-40">

          <SectionHeading>Contact me</SectionHeading>
          <div className=" max-w-[64rem] text-start border-spacing-1 border-slate-200 border-l-lime-50 leading-8 sm:mb-40">
              <form method='POST' action="" className="flex justify-center min-w-36 w-96 mt-3">
                
                <div className="bg-blue-950 p-4 rounded-lg">
                  <div className="relative bg-inherit">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-100 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Your name"
                    />

                    <label
                        className="absolute cursor-text left-2 -top-3 text-sm text-gray-500 bg-inherit 
                        mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 
                        peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm 
                        transition-all">
                        Name
                    </label>
                </div>

                <div className="relative bg-inherit mt-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-100 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Your email"
                  />
                
                  <label
                      
                      
                      className="absolute cursor-text left-3 -top-3 text-sm text-gray-500 bg-inherit 
                      mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 
                      peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm 
                      transition-all">
                      Email
                  </label>
                </div>

                <div className="relative bg-inherit mt-6">
                  <textarea
                      type="text"
                      id="comment"
                      name="message"
                      className="peer bg-transparent h-36 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-100 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Your email"
                      cols="30"
                      rows="10"
                  >
                  </textarea>
                
                  <label
                      className="absolute cursor-text left-3 -top-3 text-sm text-gray-500 bg-inherit 
                      mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 
                      peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm 
                      transition-all">
                      Write a comment
                  </label>

                  <div className="group cursor-pointer flex justify-center bg-blue-800 rounded text-gray-200 hover:text-gray-50 transition ease-in-out duration-200">
                  Send me 
                    <span aria-hidden="true" className="flex items-center translate-x-0 group-hover:translate-x-2 
                    transition-transform ease-in-out duration-200 px-1"> <BsArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
      </section>
          );
}


export default Contact

