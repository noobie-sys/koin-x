import React from 'react'
import Navbar from './_components/Navbar'
import AdditinalCard from './_components/RightNav/AdditionalCard'
import TrendingCard from './_components/RightNav/trendingCard'

const RootLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='w-full h-full bg-[#EEF2F5]'>
      <Navbar />
      <main className='relative '>
      {children}
      </main>
      </div>
  )
}

export default RootLayout