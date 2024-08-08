import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Hero from '@/components/About/hero'
import Middle from '@/components/About/middle'
export default function page() {
  return (
    <Navbar>
        <Hero />
        <Middle />
    </Navbar>
  )
}
