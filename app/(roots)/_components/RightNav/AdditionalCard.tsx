import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AdditinalCard = () => {
  return (
    <div className='w-80  bg-[#0052FE] rounded-2xl flex flex-col items-center p-10'>
      <div className='mx-auto w-full flex justify-center items-center flex-col'>
        <h1 className='text-slate-50 font-medium text-lg text-center md:px-4'>Get Started with KoinX for Free</h1>
        <p className='text-xs text-center text-white pt-4 tracking-wide'>With our range of feautres that you can equip for free, KoinX allows you to be more educated and aware of your tak reports.</p>
      </div>
      <div className='hidden md:block w-52 h-52 relative'>
        <Image src={'/work.png'} alt='Get started for free' width={200} height={200} className='object-contain' />
      </div>
      <div>
        <Button className='bg-white text-black' variant={'default'}>Get started for FREE <ArrowRight className='w-4 h-4 ml-4' /></Button>
      </div>
    </div>
  )
}

export default AdditinalCard