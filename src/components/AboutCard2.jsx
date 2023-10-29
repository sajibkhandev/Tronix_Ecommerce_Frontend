import React from 'react'

const AboutCard2 = ({heading,para}) => {
  return (
    <div className='w-w376 rounded-2xl drop-shadow-2xl'>
     <div className='w-full h-h376 bg-primary rounded-t-2xl '></div>
     <div className='bg-white rounded-b-2xl '>
      <h5 className='pt-8 pb-2 text-center text-2xl text-secondary font-pop font-normal'>{heading}</h5>
      <p className='pb-8 text-center text-lg text-primary font-pop font-normal'>{para}</p>
     </div>
    </div>
  )
}

export default AboutCard2