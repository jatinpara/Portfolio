import React from 'react'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
  <h1 className="text-center text-4xl font-bold">
    About <span className="text-purple-500">Me</span>
  </h1>
  <div className="flex justify-center mt-6">
    <div className="w-full max-w-7xl px-6 lg:px-8">
      <p className="text-lg sm:text-2xl text-neutral-500 leading-relaxed">
        {ABOUT_TEXT}
      </p>
    </div>
  </div>
</div>

    
)
}

export default About