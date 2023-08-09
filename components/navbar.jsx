import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Montserrat } from "next/font/google";

const montsserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
  });

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-transparent w-full'>
        <Link href="/dashboard" className="flex w-full items-center justify-center gap-4 mb-16 mt-6">
          <div className="relative w-16 h-8 ">
            <Image fill alt="Logo" src="/icon.webp" />
            
          </div>
          <h1 className={cn("text-2xl font-bold", montsserrat.className)}>
            MUSE
          </h1>
        </Link>
        
    </div>
  )
}

export default Navbar