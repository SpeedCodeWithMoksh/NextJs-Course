import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className='shadow-md flex flex-wrap justify-center items-center p-4 mb-10 sticky top-0 z-50 bg-white'>
        <ul className='flex'>
            <li className='mx-3 cursor-pointer'>Home</li>
            <li className='mx-3 cursor-pointer'>About</li>
            <li className='mx-3 cursor-pointer'>Blogs</li>
            <li className='mx-3 cursor-pointer'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default navbar