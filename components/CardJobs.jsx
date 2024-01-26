
import React from 'react'
import { experienceData } from '@/lib/data'
import Link from 'next/link'



export const CardJobs = ({
    id, 
    company, 
    title, 
    startDate, 
    endDate, 
    description, 
    linkweb, }) => { 

  return (
<div className="max-w-sm rounded overflow-hidden shadow-lg" id={id}>

  <div className="px-6 py-4">
    <div className=" text-slate-100 font-bold text-2xl mb-2">{company}</div>
    <p className="text-gray-200 text-base">
      {title}
    </p>
    <p className="text-gray-200 text-base">
      {startDate} - {endDate}
    </p>
    <p className="text-gray-200 text-base">
      {description}
    </p>
    <Link href={{linkweb}}>
      {linkweb}
    </Link>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  
    )
}
