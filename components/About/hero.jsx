import React from 'react'

export default function hero() {
  return (
    <section className="-translate-y-20 flex flex-col items-center justify-center">
        <div className="absolute h-lvh w-32 blur-[600px] bg-indigo-50 pointer-events-none"></div>
        <div className="flex flex-col items-center text-center">
        <h1 className="text-[60px] text-transparent font-bold bg-clip-text bg-gradient-to-br to-[#8c8ccc] from-[#e2e2f1]">About me</h1>
        <p className="max-w-6xl">Hello! My name is Yunus Emre GÜN. I'm 13 and I was born in the Balıkesir. My goal is to become a computer engineer and I am working hard towards this. I go to high school and I'm in the 9th grade. You can see my information below.</p>
        </div>  
    </section>
  )
}
