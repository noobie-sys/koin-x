import React from 'react'
import TrendingCarousel from './Carousel'

const TrendingData = () => {
  return (
    <div className='w-full  bg-white p-10 mt-10 rounded-lg'>
        <h1 className='mb-10 text-xl font-bold  tracking-wide'>Trending Coins</h1>
       <TrendingCarousel />
    </div>
  )
}

export default TrendingData