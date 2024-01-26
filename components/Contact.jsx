import React from 'react'
import SectionHeading from '@/components/SectionHeading'


const Contact = () => {
  return (
    <section 
    id='contact' 
    className="scroll-mt-24 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40" 
    >

      <SectionHeading>Contact me</SectionHeading>
        <div className='mb-28 max-w-[45rem] text-start border-spacing-1 border-slate-200 border-l-lime-50 leading-8 sm:mb-40'>
          <form action="" className='block mt-3'>
            <label htmlFor="" className='text-slate-50 font-semibold'>Name</label>
            <input type="text" className='block w-full border-2 border-slate-200 rounded-md p-2 mt-1' />
            <label htmlFor="" className='text-slate-50 font-semibold'>Email</label>
            <input type="email" className='block w-full border-2 border-slate-200 rounded-md p-2 mt-1' />
            <label htmlFor="" className='text-slate-50 font-semibold'>Message</label>
            <textarea name="" id="" cols="30" rows="10" defaultValue="Write text..." className='block w-full border-2 border-slate-200 rounded-md p-2 mt-1'></textarea>
            <button className='bg-slate-400 hover:bg-teal-500 text-white mt-4 font-semibold px-5 py-2 flex items-center gap-2 text-[1rem] rounded-full focus:scale hover:scale-105 transition-all'>Sumbit</button>
          </form>
        </div>
    </section>
  )
}


export default Contact