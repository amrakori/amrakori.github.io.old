import React from 'react';
import Image from 'next/image'
import amrakoriLogo from '../assets/amrakoriLogotransparent.png';

export default function Intro() {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-purple-darkest border-solid border-4">
      <div className="container px-5 h-screen">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="object-scale-down h-48 w-full">
            <Image src={amrakoriLogo} alt="Amrakori Logo"/>
            <h1 className="text-gray-50 lg:text-6xl sm:text-6xl title-font font-medium mb-4">
                Amrakoro Design Studio
            </h1>
          </div>
          {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
        </div>
      </div>
    </section>
  )
}