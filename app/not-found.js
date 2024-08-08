import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import White from '@/components/Buttons/white'
export default function Custom404() {
  return (
    <Navbar>
        <div className="flex flex-col gap-3 justify-center items-center text-center">
            <div className="absolute h-52 w-20 rounded-full blur-[200px] bg-indigo-50"></div>
        <h1 className="text-[70px] leading-[1] font-bold bg-clip-text text-transparent bg-gradient-to-br to-[#8c8ccc] from-[#e2e2f1]">Oops.</h1>
        <h2 className="text-[60px] leading-[1] font-mono tracking-[3px] text-red-300/70">404</h2>
        <p className="">Page is not found. This page probably deleted or page is not.</p>
        <White href={"/"}>Homepage</White>
        </div>
    </Navbar>
  )
}
