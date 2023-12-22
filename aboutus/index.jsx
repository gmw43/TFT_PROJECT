import React from 'react'

import img from '../aboutus/img.png';

const About = () => {
  return (
    <>
      <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-2 text-white border-null p-4 ' style={{ fontFamily: "Roboto Slab, sans-serif" }}>
        <div className='h-screen flex items-center justify-center lg:justify-center'>
          <img className='h-full object-contain' src={img} alt='CEO' />
        </div>

        <div className='text-black text-left '>
          <h1 className='text-4xl font-semibold my-4'>Heading for this components</h1>
          <p className='leading-loose'>Duis accumsan libero nunc, vel hendrerit nisl accumsan ac. Nam aliquet, erat et semper sagittis, purus augue sollicitudin ipsum, in blandit ipsum dolor sed magna. Suspendisse leo purus, fringilla eu nulla maximus, rhoncus molestie ante.</p>
          <div>
            <div className='my-4'>
              <h3 className='text-2xl'>Masters in Management</h3>
              <h2 className='my-2 text-3xl'>MBA</h2>
              <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora</p>
            </div>
            <div className='my-4'>
              <h3 className='text-2xl'>Masters in Management</h3>
              <h2 className='my-2 text-3xl'>MBA</h2>
              <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Masters in Management</h3>
            <h2>MBA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora</p>
          </div>
          <div>
            <h3>Masters in Management</h3>
            <h2>MBA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default About