import React from 'react'

import ceo from '../assets/images/law.jpg';

const Ceo = () => {
  return (
    <>
     <div className='w-screen h-screen grid grid-cols-1 lg:grid-cols-2 text-white border-null 'style={{ fontFamily: "Roboto Slab, sans-serif" }}>
      <div className='flex flex-col justify-center  h-screen p-20 bg-[#880010]' >
        <h1 className='text-4xl font-semibold mb-20'>Heading for this components</h1>
        <p className='leading-loose'>Duis accumsan libero nunc, vel hendrerit nisl accumsan ac. Nam aliquet, erat et semper sagittis, purus augue sollicitudin ipsum, in blandit ipsum dolor sed magna. Suspendisse leo purus, fringilla eu nulla maximus, rhoncus molestie ante.</p>
      </div>
      <div className='flex justify-center items-center   h-screen p-10 bg-gray-200'>
        <img className='w-full h-full object-contain' src={ceo} alt='CEO'/>
      </div>
     </div>



    </>
  )
}

export default Ceo