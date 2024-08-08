import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

export default function white({href, className, children, ...props}) {
    const clas = classNames("p-2.5 bg-white font-medium rounded-full text-brand-color px-5 hover:bg-white/80 active:bg-white/70", className)
  return (
    <Link href={href} className={clas} {...props}>{children}</Link>
  )
}
