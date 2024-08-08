import React from 'react'
import White from '../Buttons/white'
export default function form() {
  return (
    <div>
        <section className="p-8 mb-12 bg-secondary-bg-color flex flex-col gap-4 rounded-lg border-t-2 border-t-secondary-border-color">
        <div className="grid grid-col xl:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="grid gap-1">
            <label className="font-semibold text-[15px]">First name</label>
            <input type="text" className="p-2 bg-secondary-border-color border-t-2 border-[#434349] focus:bg-[#434349] transition-colors text-[#a2a2a2] outline-none rounded-lg" placeholder="First name" />
            </div>
            <div className="grid gap-1">
            <label className="font-semibold text-[15px]">Last name</label>
            <input type="text" className="p-2 bg-secondary-border-color border-t-2 border-[#434349] focus:bg-[#434349] transition-colors text-[#a2a2a2] outline-none rounded-lg" placeholder="Last name" />
            </div>
        </div>
        <div className="grid gap-1">
            <label className="font-semibold text-[15px]">E-Mail</label>
            <input type="email" className="p-2 bg-secondary-border-color border-t-2 border-[#434349] focus:bg-[#434349] transition-colors text-[#a2a2a2] outline-none rounded-lg" placeholder="E-Mail name" />
            </div>
            <div className="grid gap-1">
            <label className="font-semibold text-[15px]">Text area</label>
            <textarea rows={4} className="bg-secondary-border-color outline-none rounded-lg border-t-2 border-[#434349] p-2 resize-none text-[#a2a2a2] focus:bg-[#434349] transition-colors" placeholder="Message"></textarea>
            </div>
            <div className="mt-4">
                <White href={"#"}>Submit</White>
            </div>
    </section>
    </div>
  )
}
