import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Product1 = ({price,heading}) => {
  return (
    <div>
        <div className='w-w512 h-h290 flex rounded-r-[36px] border-solid border border-primary mb-12'>
            <div className='w-[240px] bg-primary'>
                <div className='w-w64 h-h64 rounded-full flex justify-center items-center bg-third text-white text-lg font-pop font-normal m-6'>NEW</div>
                </div>
            <div className='flex flex-col justify-center mx-auto p-9'>
                <h5 className='text-secondary text-2xl font-normal font-pop'>{heading}</h5>
                <p className='text-black text-2xl font-bold font-pop pt-2'>${price}</p>
                <div className='flex gap-x-4 pt-4'>
                <div className='flex gap-x-1 items-center '>
                <AiFillStar className='text-2xl text-yellow-500'/>
                    <p className='border-r border-solid border-primary pr-4 text-lg text-primary font-pop font-normal'>5.0</p>
                </div>
                    <p className=' text-lg text-primary font-pop font-normal'>Sold 99</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product1