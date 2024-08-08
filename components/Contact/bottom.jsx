import React from 'react'

export default function bottom() {
    const info = [
        {
            title: "Phone Number",
            value: "0530 482 16 28",
            fa: "fa-solid fa-phone"
        },
        {
            title: "Discord",
            value: "yunusemre7733",
            fa: "fa-brands fa-discord"
        },
        {
            title: "E-Mail",
            value: "yunusemres0001@gmail.com",
            fa: "fa-solid fa-envelope"
        },
    ]
  return (
    <div className="overflow-hidden">
    <section className="grid grid-col gap-6 mb-12  z-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
        {info.map((item, key) => (
            <div key={key} className="p-4 flex flex-col gap-1 rounded-lg cursor-pointer hover:bg-secondary-border-color transition-colors bg-secondary-bg-color border-t-2 border-secondary-border-color relative overflow-hidden">
                <div className="bg-indigo-50 blur-[300px]  absolute inset-0 pointer-events-none rounded-lg"></div>
                <div className="flex items-center gap-3">
                    <i className={`${item.fa} text-[19px] text-[#7676b6]`}/>
                    <p className="text-white font-medium ">{item.title}</p>
                </div>
                <div>
                    <p className="text-[15px]">{item.value}</p>
                </div>
            </div>
        ))}
    </section>
    </div>
  )
}
