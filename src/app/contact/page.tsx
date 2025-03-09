"use client"

import { ContactMeSection } from '@/components'
import React from 'react'
import Navbar from '@/components/ui/Navbar'
const page = () => {
  return (
    <div className="min-h-screen bg-beige flex flex-col items-center justify-center px-6">
		<Navbar/>
        <ContactMeSection/>
    </div>
  )
}

export default page