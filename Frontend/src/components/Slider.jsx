import React, { useEffect } from 'react'
import { useState } from 'react'
const images = [
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/e.png'
]
function Slider() {
    const [next,setNext] = useState(0)
   
     const handleNext =()=>{
         setNext((previousValue)=>{
        if (previousValue == images.length-1){
            return 0
        }
        else{
            return previousValue +1
        }
    })
    //     if (next == images.length-1)
    //         setNext(0)
    //     else{
    //         setNext(next+1)
    //     }
    }
    const handlePre =()=>{
        if (next == 0){
            setNext(images.length-1)
        }
        else{
            setNext(next-1)
        }

    }
   useEffect(() => {
    
    setInterval(handleNext,2000);
   }, [])
   
  return (
    <>
    <div className='absolute w-full mx-auto mt-0 pt-0 overflow-hidden shadow-2xl bg-gray-100 rounded-lg'>
        <div className='mt-0'>
            <button onClick={handleNext} className='absolute right-1 md:right-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10           /* mobile base: 40px */
                   sm:w-12 sm:h-12     /* small tablets: 48px */
                   md:w-14 md:h-14     /* tablets: 56px */
                   lg:w-16 lg:h-16     /* desktops: 64px */
                   bg-white/40 hover:bg-white border-2 rounded-full 
                   flex items-center justify-center
                   text-xl             /* mobile base */
                   sm:text-2xl         /* small tablets */
                   md:text-3xl         /* tablets */
                   lg:text-4xl         /* desktops */
                   font-bold text-gray-700 hover:text-black
                   shadow-lg hover:shadow-2xl hover:scale-110
                   transition-all duration-300"'>
                {'>'}
            </button>
        </div>
        <img src={images[next]} alt='' className='rounded-lg w-full'></img>
        <div className='right_arrow'>
             <button onClick={handlePre}className='absolute left-1 md:left-5  top-1/2 -translate-y-1/2 z-10
                   w-10 h-10           /* mobile base: 40px */
                   sm:w-12 sm:h-12     /* small tablets: 48px */
                   md:w-14 md:h-14     /* tablets: 56px */
                   lg:w-16 lg:h-16     /* desktops: 64px */
                   bg-white/40 hover:bg-white border-2 rounded-full 
                   flex items-center justify-center
                   text-xl             /* mobile base */
                   sm:text-2xl         /* small tablets */
                   md:text-3xl         /* tablets */
                   lg:text-4xl         /* desktops */
                   font-bold text-gray-700 hover:text-black
                   shadow-lg hover:shadow-2xl hover:scale-110
                   transition-all duration-300'>
                {'<'}
            </button>
        </div>

    </div>
    </>
  )
}

export default Slider
