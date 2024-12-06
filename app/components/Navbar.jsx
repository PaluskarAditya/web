import { Button } from '@/components/ui/button'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-black/80 p-2 backdrop-blur-lg flex justify-center z-20 items-center fixed top-0 left-0 right-0'>
      <Button variant={"primary"} className='bg-transparent text-white'>
        <a href='#'>Home</a>
      </Button>
      <Button variant={"primary"} className='bg-transparent text-white'>
        <a href='#about'>About</a>
      </Button>
      <Button variant={"primary"} className='bg-transparent text-white'>
        <a href='#services'>Services</a>
      </Button>
      <Button variant={"primary"} className='bg-transparent text-white'>
        <a href='#contact'>Contact</a>
      </Button>
    </div>
  )
}
