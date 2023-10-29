import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import productIcon1 from '../assets/productIcon1.png'
import productIcon2 from '../assets/productIcon2.png'
import productIcon3 from '../assets/productIcon3.png'

import {AiFillStar} from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'

const ProductDetails = () => {
  return (
    <Section className='pt-24'>
        <Container>
            <Flex >
                <div className='w-1/2'>
                    <Image src={product1} className='pb-5'/>
                    <Flex className='gap-x-8 justify-center'>
                    <Image src={product2} />
                    <Image src={product3} />
                    <Image src={product4} />
                    </Flex>
                </div>
                <div className='w-1/2 pl-24'>
                    <Flex  className=' pt-10 pb-5 items-center justify-between'>
                       <div className='flex items-center'>
                       <h6 className='text-secondary text-lg font-pop font-medium mr-3'>5.0</h6>
                        <div className='flex gap-x-0.5'>
                        <AiFillStar className='text-2xl text-yellow-500'/>
                        <AiFillStar className='text-2xl text-yellow-500'/>
                        <AiFillStar className='text-2xl text-yellow-500'/>
                        <AiFillStar className='text-2xl text-yellow-500'/>
                        <AiFillStar className='text-2xl text-yellow-500'/>
                        </div>
                        <div className='flex ml-5'>
                            <p className='text-lg text-primary font-pop font-normal border-r border-solid border-primary pr-4 mr-4'>Review (12)</p>
                            <p className='text-lg text-primary font-pop font-normal'>Sold 99</p>
                        </div>
                       </div>
                        <div className='flex gap-x-3 items-center '>
                            <BsFillHeartFill className='text-2xl text-third'/>
                            <h5 className='text-secondary text-lg font-medium font-pop'>Add to Wishlist</h5>
                        </div>

                    </Flex>
                    <h4 className='text-4xl text-secondary font-pop font-normal pb-4'>Wireless Microphone</h4>
                    <Flex className='gap-x-5 items-center pb-12'>
                        <h3 className='text-4xl text-black font-bold font-pop'>$29.00</h3>
                        <p className='text-lg text-primary font-normal font-pop line-through'>$99.00</p>
                        <button className='text-lg text-third font-medium font-pop px-3 py-2 border border-solid border-third rounded-lg'>Save 50%</button>
                    </Flex>
                    <Flex className='gap-x-8 pb-8'>
                        <div className='flex gap-x-4 items-center'>
                            <Image src={productIcon1}/>
                            <h6 className='text-lg text-secondary font-normal font-pop'>Free Delivery</h6>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <Image src={productIcon2}/>
                            <h6 className='text-lg text-secondary font-normal font-pop'>Available Voucher</h6>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <Image src={productIcon3}/>
                            <h6 className='text-lg text-secondary font-normal font-pop'>In Stock</h6>
                        </div>
                    </Flex>
                    <div className='border-t border-solid border-primary'>
                        <h4 className='text-lg text-secondary font-medium font-pop pb-4 pt-8 '>Description</h4>
                        <p className='text-lg text-primary font-normal font-pop'>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p>

                    </div>
                   <Flex className='justify-between pt-24'>
                   <Flex className='gap-x-3 items-center'>
                        <h4 className='text-primary text-lg font-medium font-pop mr-4'>Quantity</h4>
                        <button className='px-6 py-3 text-black  rounded-lg text-2xl bg-primary mr-4'>-</button>
                        <span className='text-2xl text-third'>1</span>
                        <button className='px-6 py-3 text-white rounded-lg text-2xl bg-third ml-4'>+</button>
                    </Flex >
                    <Flex className='gap-x-4'>
                    <button className='text-third text-lg font-pop font-normal bg-white py-3 px-8 rounded-lg hover:bg-third border border-solid border-third hover:text-white duration-500'>Chat</button>
                    <Button text="Add to Cart"/>
                    </Flex>
                   </Flex>
                </div>

            </Flex>
        </Container>
    </Section>
  )
}

export default ProductDetails