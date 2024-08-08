import React from 'react'

export default function hero() {
  return (
    <section className="-translate-y-20 flex flex-col items-center justify-center">
        <div className="absolute h-lvh w-32 blur-[600px] bg-indigo-50 pointer-events-none"></div>
        <div className="flex flex-col items-center text-center">
        <h1 className="text-[60px] text-transparent font-bold bg-clip-text bg-gradient-to-br to-[#8c8ccc] from-[#e2e2f1]">Contact</h1>
        <p className="max-w-6xl">You can contact me by filling out the form below or you can reach me using the information below.</p>
        </div>  
    </section>
  )
}
