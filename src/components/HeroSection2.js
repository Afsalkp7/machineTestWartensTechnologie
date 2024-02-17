 import React from 'react'

const HeroSection2 = () => {
    return (
      
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://res-console.cloudinary.com/dzvvpbnai/thumbnails/v1/image/upload/v1708166398/bWFwX3M5aWlzdw==/as_is')"}}>
      <div className='grid grid-cols-2 gap-0'>
                <div className='col-span-1 bg-blue-300 bg-opacity-50'></div>
                <div className='col-span-1 '> 
                    <img src='https://orionstudyabroad.com/static/website/images/about/2.jpg'/>
                </div>
                <div className='col-span-1 bg-gray-800 h-48 relative'>
                    <img className='absolute my-12 ml-3' src='https://orionstudyabroad.com/static/website/images/headset.svg'/>
                    <h1 className='absolute my-28 ml-3 text-white font-semibold' >Life changing support by Orion</h1>
                </div>
                <div className='col-span-1 bg-blue-300 bg-opacity-50'></div>
                <div className='col-span-1 bg-blue-300 bg-opacity-50'></div>
                <div className='col-span-1 '>
                <img src='https://orionstudyabroad.com/static/website/images/about/1.jpg'/>
                </div>
            </div>
      </div>
      
    </div>
           
          
    )
}

export default HeroSection2