import React from 'react'
import White from '../Buttons/white'
export default function bottom() {
  return (
    <section className="p-5 flex flex-col items-center gap-3 border-t-2 border-secondary-border-color bg-secondary-bg-color rounded-lg mb-12">
        <div className="absolute h-16 w-16 blur-[175px] pointer-events-none bg-indigo-50"></div>
        <h1 className="text-xl font-semibold text-white">Would you like to work the me?</h1>
        <White className={"w-fit"} href="/contact">Contact</White>
    </section>
  )
}
