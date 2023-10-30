import React from 'react'
import Flex from './Flex'
import Button from './Button'

const ChectoutCard = () => {
  return (
    <div className='pl-8 pb-40'>
        <div className=' w-full border border-solid border-primary px-7'>
            <h4 className='pt-8 pb-12 text-2xl text-secondary font-pop font-semibold text-center'>Your Order Summary</h4>
          <div className='border-b border-solid border-primary  mb-8'>
          <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
               <p className='text-secondary text-lg font-medium font-pop'>1x</p>
                <p className='text-secondary text-lg font-normal font-pop'>USB Speaker Portable</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$100.00</p>
            </Flex>
            <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
               <p className='text-secondary text-lg font-medium font-pop'>1x</p>
                <p className='text-secondary text-lg font-normal font-pop'>Joystick Pro</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$100.00</p>
            </Flex>
            <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
               <p className='text-secondary text-lg font-medium font-pop'>1x</p>
                <p className='text-secondary text-lg font-normal font-pop'>Smartphone 5G</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$100.00</p>
            </Flex>
          </div>
          <div className='border-b border-solid border-primary  mb-8'>
          <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
                <p className='text-secondary text-lg font-normal font-pop'>Subtotal</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$300.00</p>
            </Flex>
            <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
                <p className='text-secondary text-lg font-normal font-pop'>Shipping</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$15.00</p>
            </Flex>
            <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
                <p className='text-secondary text-lg font-normal font-pop'>Tax</p>
               </Flex>
                <p className='text-secondary text-lg font-medium font-pop'>$10.00</p>
            </Flex>
          </div>
          <div className='border-b border-solid border-primary  mb-8'>
          <Flex className='justify-between items-center'>
               <Flex className='gap-x-8 pb-6'>
                <p className='text-secondary text-2xl font-medium font-pop'>Total</p>
               </Flex>
                <p className='text-third text-2xl font-medium font-pop'>$325.00</p>
            </Flex>
         
          </div>
          <h4 className='text-secondary text-2xl font-medium font-pop pb-8'>Payment</h4>
          <Flex className='justify-between pb-14'>
          <Button text="Credit Card" className='px-[18px] py-1.5 hover:bg-black hover:border-black hover:text-white bg-white text-red-500'/>
          <Button text="Bank Transfer" className='px-[18px] py-1.5 hover:bg-black hover:border-black hover:text-white bg-white text-red-500'/>
          <Button text="Paypal" className='px-[18px] py-1.5 hover:bg-black hover:border-black hover:text-white bg-white text-red-500'/>
          </Flex>
          <Button text="Checkout" className='w-full mb-3 '/>
          <Button text="Back to Cart" className='w-full mb-3 bg-white text-red-500 hover:bg-red-400 hover:text-white border-white'/>
        </div>
    </div>
  )
}

export default ChectoutCard