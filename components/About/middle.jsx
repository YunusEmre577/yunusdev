"use client";
import React from 'react'
import { useState } from 'react'
import works from "./workareas.json"
import time from "./timeline.json"
export default function middle() {
  const [shows, setShows] = useState({type: "works"}) 

  return (
    <div className="-translate-y-12 flex flex-col gap-12 items-center">
        <div className="flex gap-4 flex-wrap justify-center items-center">
            <button onClick={() => setShows({type: "works"})} className={`p-2.5 ${shows.type == "works" ? "bg-[#6868ab] hover:bg-[#6868ab]/85" : "bg-secondary-border-color/90 hover:bg-secondary-border-color/70"} transition-colors rounded-md text-white px-4`}>My work areas</button>
            <button onClick={() => setShows({type: "timeline"})} className={`p-2.5 ${shows.type == "timeline" ? "bg-[#6868ab] hover:bg-[#6868ab]/85" : "bg-secondary-border-color/90 hover:bg-secondary-border-color/70"} transition-colors rounded-md text-white px-4`}>Timeline</button>
            <button onClick={() => setShows({type: "partners"})} className={`p-2.5 ${shows.type == "partners" ? "bg-[#6868ab] hover:bg-[#6868ab]/85" : "bg-secondary-border-color/90 hover:bg-secondary-border-color/70"} transition-colors rounded-md text-white px-4`}>Partners</button>
        </div>
        <div>
        <div className="grid grid-col xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {shows.type == "works" && works.map((item, index) => (
            <div key={index} className="bg-secondary-bg-color border-t-2 border-secondary-border-color p-6 hover:bg-secondary-border-color transition-colors cursor-pointer rounded-lg">
              <div className="flex items-center gap-3">
                <i className={`${item.fa} text-[19px] text-[#7676b6]`}/>
                <p className="text-[15px] text-white font-medium">{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="">
          {shows.type == "timeline" && time.map((item, index) => (
            <div key={index} className="flex items-center my-4">
              <div className="-translate-y-11 mr-12 flex flex-col gap-3 justify-center items-center">
                <div className={`border-l border-secondary-border-color h-20 ${item.isLast && ""}`}></div>
                <div className="h-8 w-8 flex justify-center items-center bg-[#7676b6]/20 rounded-full">
                <i className={`${item.fa} text-[18px] text-[#7676b6]`}/>
                </div>
              </div>
              <div className="w-10 h-10 bg-[#7676b6]/20 text-[#7676b6] flex items-center justify-center rounded-full">
                <i className={item.fa}/>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div> 
          ))}
        </div>
        {shows.type == "partners" && <>
        <div className="">
          <p>Not found.</p>
        </div>
        </>}
        </div>
    </div>
  )
}
