import React from 'react'
import Image from './Image'
import Flex from './Flex'
import reviewImage from '../assets/reviewImage.png'
import {AiFillStar} from 'react-icons/ai'

const Review = ({user}) => {
  return (
    <div className='mb-8' >
        <Flex className='gap-x-4 pb-6'>
            <Image src={reviewImage}/>
            <div>
                <h5 className='text-lg text-secondary font-pop font-medium pb-2'>{user}</h5>
                <div className='flex gap-x-4 items-center'>
                    <p className='text-lg text-third font-pop font-medium'>5.0</p>
                    <AiFillStar className='text-2xl text-yellow-500'/>
                    <AiFillStar className='text-2xl text-yellow-500'/>
                    <AiFillStar className='text-2xl text-yellow-500'/>
                    <AiFillStar className='text-2xl text-yellow-500'/>
                    <AiFillStar className='text-2xl text-yellow-500'/>
                    <p className='text-lg text-primary font-pop font-normal'>1 Month Ago</p>
                </div>
            </div>
        </Flex>
        <p className='text-lg text-secondary font-pop font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    </div>
  )
}

export default Review