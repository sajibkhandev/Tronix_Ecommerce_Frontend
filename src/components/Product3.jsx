import React from 'react'
import Button from './Button'

const Product3 = ({heading}) => {
  return (
    <div>
        <div className='w-w376 h-h602 border border-solid border-primary  rounded-b-3xl mb-6 '>
          <div className='w-full h-h376 bg-primary relative'>
          <div className='absolute top-[25px] right-[25px] z-10 w-[65px] py-2 rounded-lg text-white text-lg font-medium text-center font-pop bg-[#2D9CDB]'>New</div>
          <div className='absolute top-[80px] right-[25px] z-10 w-[65px] py-2 rounded-lg text-white text-lg font-medium text-center font-pop bg-[#BB6BD9]'>-10% Off</div>
          </div>
          <div className='flex flex-col items-center pt-8'>
            <h5 className='text-2xl text-secondray font-pop font-normal pb-2'>{heading}</h5>
            <div className='flex gap-x-2 items-center pb-8'>
                <p className='text-2xl text-primary font-normal font-pop line-through'>$29.99</p>
                <p className='text-3xl text-third'>-</p>
                <p className='text-2xl text-third font-medium font-pop'>$19.99</p>
            </div>
            <Button text="Add to Cart"/>
           
            </div>
        </div>
    </div>
  )
}

export default Product3