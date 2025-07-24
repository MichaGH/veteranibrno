import Navbar from '@/components/ui/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <>
    <Navbar />
    <main className="font-playfair-display">
        { children }
    </main>
    </>
  )
}

export default Layout