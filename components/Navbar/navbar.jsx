"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function navbar({ children }) {
  const location = usePathname()
    const [theme, setTheme] = useState(true)  // false = sun / true= moon YUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUSYUNUS
    const [isVisible, setIsVisible] = useState(false)
    const [res, setRes] = useState(false)
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const variants = {
      open: { opacity: 1, y: 0 },
      close: { opacity: 0, y: -20 },
    }

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
    return (
        <>
        <aside className="text-[15px] flex justify-between items-center my-5 mx-6 2xl:mx-24 xl:mx-20 lg:mx-16 md:mx-12">
          <div className="">
            <Link href={"/"} className="hover:underline text-white text-lg font-medium">
              yunusdev
            </Link>
          </div>
          <div className="hidden xl:flex 2xl:flex lg:flex gap-4 text-sm items-center">
            <Link href={"/"} className={`${location == "/" ? "text-indigo-50" : ""} hover:text-indigo-50 transition-colors`}>Homepage</Link>
            <Link href={"/about"} className={`${location == "/about" ? "text-indigo-50" : ""} hover:text-white transition-color`}> About</Link>
            <Link href={"/contact"} className={`${location == "/contact" ? "text-indigo-50" : ""} hover:text-white transition-colors`}>Contact</Link>
            <Link href={"/blogs"} className={`${location == "/blogs" ? "text-indigo-50" : ""} hover:text-white transition-colors`}>Blogs</Link>
            <div className="border-r h-8 border-[#191927]" />
            <AnimatePresence>
            {theme ? (
              <>
                <motion.div transition={{duration: .5}} onClick={() => setTheme(theme => !theme)} className="h-8 w-8 hover:from-slate-300/30 transition-all hover:to-slate-500/30 bg-gradient-to-tr from-slate-300/20 to-slate-500/20 pointer-events-none text-slate-500 rounded-full flex items-center justify-center cursor-pointer">
                <i className="fa-sharp fa-solid fa-moon"/>
                </motion.div>
                <div className="opacity-90 tracking-[2px] bg-blue-500 rounded-md px-3 p-1 bg-opacity-10 uppercase text-xs font-medium pointer-events-none"><p className="text-blue-500/50">soon</p></div>
                </>
            ) : (
              <>
                <motion.div transition={{duration: .5}} onClick={() => setTheme(theme => !theme)} className="h-8 w-8 hover:from-yellow-300/30 transition-all hover:to-yellow-500/30 bg-gradient-to-tr from-yellow-300/20 to-yellow-500/20 pointer-events-none text-yellow-500 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fa-sharp fa-solid fa-sun"/>
            </motion.div>
            <div className="opacity-90 tracking-[2px] bg-blue-500 rounded-md px-3 p-1 bg-opacity-10 uppercase text-xs font-medium pointer-events-none"><p className="text-blue-500/50">soon</p></div>
            </>
            )}
            </AnimatePresence>
          </div>

          <div className="flex 2xl:hidden xl:hidden lg:hidden">
            <i onClick={() => setRes(res => !res)} className="text-[22px] cursor-pointer fa-regular fa-bars"/>
            <AnimatePresence>
            {res && (
            <>
            <motion.div variants={variants} initial={{opacity:0, y:-20}} animate={res ? "open" : "close"} exit="close" className="mt-12 w-52 right-6 gap-1 md:right-12 p-2 bg-[#000] rounded-md z-[999] flex flex-col absolute">
              <Link href="/" className={`p-2.5 text-[15px] ${location == "/" ? "" : "hover:"}bg-[#7676b6]/15 rounded`}>Homepage</Link>
              <Link href="/about" className={`p-2.5 text-[15px] ${location == "/about" ? "" : "hover:"}bg-[#7676b6]/15 rounded`}>About</Link>
              <Link href="/contact" className={`p-2.5 text-[15px] ${location == "/contact" ? "" : "hover:"}bg-[#7676b6]/15 rounded`}>Contact</Link>
              <Link href="/blogs" className={`p-2.5 text-[15px] ${location == "/blogs" ? "" : "hover:"}bg-[#7676b6]/15 rounded`}>Blogs</Link>
            <div className="my-1 border border-secondary-bg-color"></div>
            <button className="pointer-events-none p-2.5 flex items-center gap-3"><i className="fa-solid fa-moon"/> <div className="border-l border-secondary-bg-color h-6"></div> <p className="uppercase tracking-[2px] text-blue-500/90 opacity-90 bg-blue-500/20 p-1 px-3 text-xs rounded-md ">soon</p></button>
            </motion.div>
            </>
          )}          
          </AnimatePresence>
</div>
        </aside>

        <div className="mx-6 2xl:mx-24 xl:mx-20 lg:mx-16 md:mx-12 flex flex-col mt-36">
            {children}
        </div>

        <Link href="#" className={`${isVisible ? "flex" : "hidden"} justify-center items-center rounded-full h-10 w-10 cursor-pointer hover:bg-secondary-border-color transition-colors fixed bottom-11 right-8 bg-secondary-bg-color`}>
          <i className="fa-regular fa-chevron-up"/>
        </Link>
        </>
  )
}
