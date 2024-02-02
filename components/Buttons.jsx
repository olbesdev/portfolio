'use client'

import { Chicle } from "next/font/google";
import Link from "next/link";



const ButtonAnimated = ({children}) => {
    return (
      <>
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      <span className='absolute w-auto inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3a3ea6_0%,#7779e0_50%,#c7fbff_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
        {children}
      </span>
    </button>
    </>
  );
};
  
  export default ButtonAnimated;