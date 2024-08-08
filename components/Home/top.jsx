import React from 'react'
import White from '../Buttons/white'
export default function top() {
  return (
    <section className="mb-80">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="absolute pointer-events-none h-64 z-10 w-24 blur-[200px] bg-indigo-50"></div>
            <badge className="p-1.5 translate-y-2 text-[13px] bg-gradient-to-br from-blue-400/5 to-blue-500/10 text-opacity-70 px-3 rounded-full text-indigo-500">Full stack developer</badge>
            <h1 className="text-[64px] xl:text-[102px] 2xl:text-[105px] lg:text-[99px] md:text-[80px] leading-[1] bg-clip-text text-transparent bg-gradient-to-br from-[#e2e2f1] to-[#8c8ccc] font-bold">Yunus Emre Gün</h1>
            <p className="max-w-3xl">Hello, my name is Yunus Emre. I am 13 years old and I was born in Balıkesir. I am currently in the 9th grade and I have a great interest in computer science and software development.</p>
        <div className={"flex gap-3"}>
            <White href="/blogs">See my blogs</White>
        </div>
        </div>
    </section>
  )
}
