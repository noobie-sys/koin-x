import React from 'react'
import Navbar from './_components/Navbar'

const RootLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <main>

      {children}
      </main>
      </div>
  )
}

export default RootLayout