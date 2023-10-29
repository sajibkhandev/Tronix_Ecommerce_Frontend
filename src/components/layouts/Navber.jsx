import React from 'react'
import Section from '../Section'
import Flex from '../Flex'
import Container from '../Container'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'

import {BiSearch} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {PiShoppingCart} from 'react-icons/pi'

const Navber = () => {
  return (
    <Section className='py-8'>
      <Container>
        <Flex>
          <div className='w-2/12'>
            <Image src={logo}/>
          </div>
          <div className='w-6/12'>
            <ul className='flex gap-x-12 h-full items-center justify-center'>
              <List text="Home"/>
              <List text="About"/>
              <List text="Product"/>
              <List text="Blog"/>
              <List text="Contact"/>
            </ul>
          </div>
          <div className='w-4/12 relative'>
            <input type='text' className='w-full  bg-four py-2.5 px-8 rounded-lg placeholder:text-lg placeholder:font-normal placeholder:font-pop' placeholder='Search here'/>
            <button className='bg-third absolute p-3 top-0 right-0 rounded-r-lg'><BiSearch className='text-white text-xl'/></button>
          </div>
          <Flex className='w-2/12 flex justify-end gap-x-8 items-center'>
            <PiShoppingCart className='text-2xl'/>
            <HiOutlineMail className='text-2xl'/>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default Navber