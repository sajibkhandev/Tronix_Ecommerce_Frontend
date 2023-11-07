import React, { useEffect, useState } from 'react'
import Section from '../Section'
import Flex from '../Flex'
import Container from '../Container'
import Button from '../Button'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'

import {BiSearch} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {PiShoppingCart} from 'react-icons/pi'
import {RxCross1} from 'react-icons/rx'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { page } from '../../slices/breadcrumb'
import cartImage from '../../assets/cartImage.png'
import { increment,decrement,remove } from '../../slices/cartSlice'

const Navber = () => {
  let [open,setOpen]=useState(false)
  let [total,setTotal]=useState(0)
  let cart =useSelector((state=>(state.cart.cartArray)))
  let sajib=useSelector((state)=>(state.cart.cartOpen))
  let dispatch=useDispatch()
  let handleClick=(name)=>{
    dispatch(page(name))

  }
  useEffect(()=>{
    let total=0
    cart.map(item=>{
      total+=item.quantity*item.price

    })
    setTotal(total)
    setOpen(sajib)
  },[cart])
  return (
    <Section className='py-8'>
      <Container>
        <Flex>
          <div className='w-2/12'>
            <Image src={logo}/>
          </div>
          <div className='w-6/12'>
            <ul className='flex gap-x-12 h-full items-center justify-center'>
              <Link onClick={()=>handleClick("Home")} to='/'><List text="Home"/></Link>
              <Link onClick={()=>handleClick("About")}  to='/about'><List text="About"/></Link>
              <Link onClick={()=>handleClick("Product")}  to='/product'><List text="Product"/></Link>
              <div onClick={()=>handleClick("Blog")} > <List text="Blog"/></div>
              <div onClick={()=>handleClick("Contact")} ><List text="Contact"/></div>
            </ul>
          </div>
          <div className='w-4/12 relative'>
            <input type='text' className='w-full  bg-four py-2.5 px-8 rounded-lg placeholder:text-lg placeholder:font-normal placeholder:font-pop' placeholder='Search here'/>
            <button className='bg-third absolute p-3 top-0 right-0 rounded-r-lg'><BiSearch className='text-white text-xl'/></button>
          </div>
          <Flex className='w-2/12 flex justify-end gap-x-8 items-center relative'>
            <PiShoppingCart onClick={()=>setOpen(true)} className='text-2xl relative'/><span className='text-third absolute -top-[3px] right-[45px] text-white  bg-third w-[23px] h-[23px] rounded-full flex justify-center items-center'>{cart.length}</span>
            <HiOutlineMail className='text-2xl'/>
          </Flex>
        </Flex>
        {open&&<div className='w-2/6 h-screen absolute top-0 right-0 bg-[#F4F4F7] z-50 '>
        <Flex className='items-center py-6'>
        <RxCross1  onClick={()=>setOpen(false)} className='text-xl ml-6'/> 
        {cart.length>0?
        <h4 className='text-[26px] text-third font-semibold font-pop text-center mx-auto '>My Cart</h4>
        :
        <h4 className='text-[26px] text-third font-semibold font-pop text-center mx-auto '>Cart is Empty</h4>
        }
        </Flex>
          {cart.map(item=>(
        <li className='list-none py-4 border-y border-solid border-black '>
          <Flex className='items-center justify-between mx-10'>
        <p className='text-third'><BsFillCheckSquareFill/></p>
        <img src={cartImage} alt=""  className='w-[60px] h-[60px]'/>
        <div>
          <h4>{item.title}</h4>
          <p className='text-third'>{item.price} $</p>
          <Flex className='gap-x-3 items-center py-2'>
          
           <button onClick={()=>dispatch(decrement(item))} className='py px-2 bg-primary text-secondary rounded'>-</button>
            <span className='text-third'>{item.quantity}</span>
            <button onClick={()=>dispatch(increment(item))} className='text-white py px-2 bg-third rounded'>+</button>
           
            <li>SubTotal: <span className='text-third'>{item.quantity*item.price} </span>$</li>
          </Flex>
        </div>
        
        <p onClick={()=>dispatch(remove(item))} className='text-third'><RxCross1/></p>
      </Flex></li>
      
          ))}
         {cart.length&& <div className='mt-10 flex justify-center gap-x-6'>
            <Link to='/cart'><Button text="View Cart"/></Link>
           <Link to="/checkout"> <Button text="Checkout"/></Link>
          </div>}
          
          <div className='text-2xl text-seconary font-medium font-pop absolute bottom-5 right-5'>Total: <span className='text-third font-bold'>{total}.00 </span>$</div>

        </div>}
        
      </Container>
    </Section>
  )
}

export default Navber