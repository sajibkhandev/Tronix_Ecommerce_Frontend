import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import footerIcon1 from '../../assets/footerIcon1.png'
import footerIcon2 from '../../assets/footerIcon2.png'
import footerIcon3 from '../../assets/footerIcon3.png'
import visa from '../../assets/visa.png'
import master from '../../assets/master.png'
import paypal from '../../assets/paypal.png'

import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FaInstagram} from 'react-icons/fa'
import List from '../List'

const Footer = () => {
  return (
   <Section className='bg-six pt-20'>
    <Container>
      <Flex>
        <div className='w-6/12'>
          <Image src={logo}/>
          <p className='w-[381px] text-lg text-secondary font-normal font-pop pt-4 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
          <div className='flex gap-x-2 items-center pb-4'>
                  <BsTelephone className='text-third'/>
                  <p className=' text-lg text-secondary font-normal font-pop'>+1234567890</p>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <HiOutlineMail className='text-third'/>
                  <p className=' text-lg text-secondary font-normal font-pop'>lovia@support.com</p>
                </div>
        </div>
        <div className='w-2/12 pb-32'>
          <h2 className='text-2xl text-secondary font-mom font-bold pb-8'>Company</h2>
          <ul className='flex flex-col gap-y-4'>
          <List text="About"/>
          <List text="Products"/>
          <List text="Contact"/>
          <List text="Blog"/>
          <List text="Careers"/>
          </ul>
        </div>
        <div className='w-2/12'>
        <h2 className='text-2xl text-secondary font-mom font-bold pb-8'>Information</h2>
          <ul className='flex flex-col gap-y-4'>
          
          <List text="Help Center"/>
          <List text="Payment Methods"/>
          <List text="Return & Refund"/>
          <List text="Privacy Policy"/>
          </ul>
        </div>
        <div className='w-2/12'>
        <h2 className='text-2xl text-secondary font-mom font-bold pb-8'>Follow Us</h2>
          <ul className='flex justify-between'>
            <Image src={footerIcon1}/>
            <Image src={footerIcon2}/>
            <Image src={footerIcon3}/>
           
          </ul>
        </div>

      </Flex>
      <Flex className='border-t border-solid border-primary'>
        <div className='w-1/2 py-11'>
          <p className='text-secondary text-sm font-normal font-pop '>Copyright © 2021 Tronix. All Right Reseved</p>
        </div>
        <div className='w-1/2 py-11 gap-x-4 flex justify-end'>
          <Image src={master}/>
          <Image src={visa}/>
          <Image src={paypal}/>
        </div>
      </Flex>
    </Container>
   </Section>
  )
}

export default Footer