import ChpcForm from '@/components/uiComponents/component/ChpcForm'
import React from 'react'

function page() {
  return (
    <div className='text-center flex flex-col gap-8'>
      <b className='text-2xl text-black/80'>Create Home Page Carousel</b>
      <ChpcForm />
    </div>
  )
}

export default page