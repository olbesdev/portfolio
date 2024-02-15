'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Divider = () => {
  return (
    <motion.div className='bg-gray-200 my-24 h-24 w-1 rounded-full hidden sm:block'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.3}}
    >

    </motion.div>
  )
}

export default Divider
