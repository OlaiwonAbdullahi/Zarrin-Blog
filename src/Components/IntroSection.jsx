import React from 'react'
import Image from '/src/assets/IntroImage.png'
import ReadMore from './Buttons/ReadMore'

const IntroSection = () => {
  return (
    <div className='flex justify-between w-full bg-secondary h-2/3 px-12 py-16 w-full'>
        <div className='w-1/2 h-85 text-bg'>
            <p className="font-bold ">Featured Post</p><br />
            <h1 className="text-4xl font-bold">How AI will Change the Future</h1><br />
            <p className="h-8 text-lg">The future of AI will see home robots having enhanced intelligence, increased capacities, and becoming more personal, and possibly cute.
                For example, home robots will overcome navigation, direction.
            </p>

            <br /><br /><br /><br />
            <div>
            <ReadMore />
            </div>
        </div>
        <div className='w-1/3 ps-8'>
            <img src={Image} alt=""  className='h-85 align-middle w-85'/>
        </div>
    </div>
  )
}

export default IntroSection
