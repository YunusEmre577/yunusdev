import React from 'react'
import skills from "./skills.json"
export default function middle() {
  return (
    <section className="flex flex-col gap-4 mb-12">
        <h1 className="text-2xl text-white font-semibold">Skills and tools</h1>
        <div className="flex justify-center items-center">
<div className="h-52 blur-[250px] mt-[500px] pointer-events-none z-10 flex w-20 absolute bg-indigo-50"/>
</div>
        <div className="grid grid-cols gap-6 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
            {skills.map((item, index) => (
                <div key={index} className={`border-t-2 border-t-secondary-border-color bg-secondary-bg-color hover:bg-secondary-border-color cursor-pointer transition-colors p-4 rounded-lg flex items-center gap-3`}>
                        <img src={`https://skillicons.dev/icons?i=${item.img}`} />
                        <p className="text-white font-medium text-lg">{item.title}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
