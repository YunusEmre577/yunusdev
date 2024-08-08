import Link from 'next/link'
import React from 'react'

export default function footer() {
  return (
    <footer className="mb-12 flex items-center gap-3">
        <Link href="/" className="hover:underline text-lg font-semibold text-white">yunusdev</Link>
        <div className="border-r h-8 border-[#272730]"></div>
        <p className="text-[15px]">&copy; 2024 All rights reserved.</p>
    </footer>
  )
}
