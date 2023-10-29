import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import Image from './Image'

const AboutCard = ({src,heading,para}) => {
  return (
    <div className='w-w376'>
        <Image src={src} className='mx-auto'/>
        <h6 className='pt-8 pb-2 text-2xl text-secondary font-medium font-pop text-center'>{heading}</h6>
        <p className='text-lg text-primary font-normal font-pop text-center'>{para}</p>
        
    </div>
  )
}

export default AboutCard