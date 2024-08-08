import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Hero from '@/components/Contact/hero'
import Form from '@/components/Contact/form'
import Bottom from '@/components/Contact/bottom'
export default function page() {
  return (
   <Navbar>
    <Hero />
    <Form />
    <Bottom />
   </Navbar>
  )
}
