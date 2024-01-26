import React from 'react'
import { experienceData } from '@/lib/data'

const ItemList = () => {
  const { id, company, startDate, endDate, description } = experienceData[0]
  return (
    <div key={id}>
        <h1>{company}</h1>
        <p>{startDate} - {endDate}</p>
        <p>{description}</p>
    </div>
  )
}
console.log(experienceData[0])

export default ItemList