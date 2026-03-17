import React from 'react'
import { useState } from 'react'
const images = [
    './3.png',
    './4.png',
    './5.png',
    './6.png',
    './e.png'
]



function Slider() {

    return (
       <>
  <div>
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Slide ${index}`} />
    ))}
  </div>
</>
    )
}

export default Slider
