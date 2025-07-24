import Herosection from '@/components/sections/Herosection'
import Historie from '@/components/sections/Historie'
import LatestPosts from '@/components/sections/LatestPosts'
import Onas from '@/components/sections/Onas'
import UpcomingEvents from '@/components/sections/UpcomingEvents'
import React from 'react'

function page() {
  return (
    <>
    <Herosection />
    <Historie />
    <Onas />
    <LatestPosts />
    <UpcomingEvents />
    </>
  )
}

export default page