import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Image from '../components/Image'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import cart from '../assets/cart.png'
import cartImage from '../assets/cartImage.png'
import cartIcon from '../assets/cartIcon.png'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'
import {FaAngleRight} from 'react-icons/fa'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,remove,cartOpen } from '../slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    let cart=useSelector((state)=>(state.cart.cartArray))
    let [total,setTotal]=useState("")
    let dispatch=useDispatch()

    let handleDecrement=(item)=>{
        dispatch(decrement(item))
        dispatch(cartOpen(false))
    }
    let handleIncrement=(item)=>{
        dispatch(increment(item))
        dispatch(cartOpen(false))
    }
    useEffect(()=>{
        let total=0
        cart.map(item=>{
            total+=item.price*item.quantity
        })
        setTotal(total)
    },[cart])
  return (
    <Section className='pt-4 pb-40'>
        <Container>
        <Heading text="Checkout" className='pt-5 pb-16 text-center'/>
        <Flex className='gap-x-16 items-center justify-center'>
            <Flex  className='gap-x-12 items-center'>
                <button className='w-w56 h-h56 border-solid border border-third rounded-full text-third text-xl'>1</button>
                <h4 className='text-third text-2xl font-pop font-medium'>My Cart</h4>
            </Flex>
            <div className='w-[304px] h-[3px] bg-primary'></div>
            <Flex  className='gap-x-12 items-center'>
                <button className='w-w56 h-h56 border-solid border border-third rounded-full text-third text-xl'>2</button>
                <h4 className='text-third text-2xl font-pop font-medium'>Checkout</h4>
            </Flex>
        </Flex>
        <Flex className='pt-16'>
            <div className='w-7/12'>
                <div className='flex gap-x-10 items-center border-solid border-b border-third pb-9'>
                <BsFillCheckSquareFill className='text-third'/>
                <p className='text-primary text-lg font-medium font-pop'>Select All</p>
                </div>
                {cart.map(item=>(
                      <div className='py-10 flex justify-between items-center border-solid border-b border-third'>
                      <div className='flex items-center gap-x-14'>
                      <BsFillCheckSquareFill className='text-third'/>
                      <Image src={cartImage} className='w-[160px]'/>
                      <div >
                          <h5 className='pb-4 text-2xl text-secondary font-normal font-pop'>{item.title}</h5>
                          <p className='pb-10 text-2xl text-third font-meduim font-pop'>{item.price}.00$</p>
                          <div className='flex items-center gap-x-5'>
                              <button onClick={()=>handleDecrement(item)} className=' text-lg py-0.5 px-3 bg-primary text-secondary rounded'>-</button>
                              <span className='text-third text-lg'>{item.quantity}</span>
                              <button onClick={()=>handleIncrement(item)} className=' text-lg text-white py-0.5 px-3 bg-third rounded'>+</button>
      
                          </div>
                      </div>
                      </div>
                      <RxCross1 onClick={()=>dispatch(remove(item))} className='text-third text-xl'/>
                      </div>


                ))}
              
            </div>
            <div className='w-5/12'>
                <div className='pl-24 pt-16'>
                    <div className='border-solid border border-third rounded-lg py-6 flex items-center justify-center gap-x-6 pb-8 mb-8 '>
                        <Image src={cartIcon}/>
                        <h1 className='text-2xl text-secondary font-medimu font-pop'>Have a coupon code?</h1>
                        <FaAngleRight />
                    </div>
                    <div className='border-solid border border-third rounded-lg p-8  '>
                        <h5 className='pb-8 text-2xl text-secondary font-medimu font-pop'>Summary</h5>
                        <div className='flex items-center justify-between pb-12'>
                            <p className='text-lg text-primary font-medimu font-pop'>Total</p>
                            <p className='text-2xl text-third font-medimu font-pop'>{total}.00$</p>
                        </div>
                        <Link to='/checkout'>
                        <Button className='w-full' text="Checkout"/>
                        </Link>
                        <button className='mt-4 w-full text-third text-lg font-pop font-normal bg-white py-3 px-8 rounded-lg border hover:border-third  border-solid duration-500'>Continue Shopping</button>
                    </div>

                </div>
            </div>
        </Flex>
            
            
        </Container>
    </Section>
  )
}

export default Cart