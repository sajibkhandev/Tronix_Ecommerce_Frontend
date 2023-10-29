import React from 'react'
import Button from './Button'
import {AiFillStar} from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'
import Flex from './Flex'

const Product5 = ({heading}) => {
  return (
    <div>
        <div className='w-w376 h-h619 rounded-3xl p-8 border border-solid border-primary'>
            <div className='w-[313px] h-[313px] bg-primary rounded-3xl'></div>
           
            <div className='flex flex-col items-center pt-8'>
            <h5 className='text-2xl text-secondray font-pop font-normal pb-2'>{heading}</h5>
            <div className=' pb-8'>
                <p className='text-2xl text-third font-medium font-pop'>$1000.00</p>
            </div>
            <div className='flex gap-x-4 pb-6'>
                <div className='flex gap-x-1 items-center '>
                <AiFillStar className='text-2xl text-yellow-500'/>
                    <p className='border-r border-solid border-primary pr-4 text-lg text-primary font-pop font-normal'>5.0</p>
                </div>
                    <p className=' text-lg text-primary font-pop font-normal'>Sold 99</p>
                </div>
            <Flex className='gap-x-7 items-center'>
            <Button text="Add to Cart"/>
            <BsFillHeartFill className='text-2xl text-primary'/>
            </Flex>
            </div>

        </div>
    </div>
  )
}

export default Product5