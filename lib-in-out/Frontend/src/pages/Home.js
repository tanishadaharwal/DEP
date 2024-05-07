import React from 'react'
import IDScan from './IDScan'
export default function Home() {
  return (
    <div className='bg-blue-300 h-16 w-full'>
    <h1 className='text-center pt-4 text-2xl font-semibold '>Welcome to Library Entry Exit System</h1>
    <IDScan/>
    </div>
  )
}
