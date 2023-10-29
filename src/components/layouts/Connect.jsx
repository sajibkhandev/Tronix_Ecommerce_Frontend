import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import {FaInstagram,FaFacebookSquare,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'

const Connect = () => {
  return (
    <Section className='pt-5'>
        <Container>
            <Flex className='justify-between items-center border-b border-solid border-primary'>
                <Flex className='w-1/2 gap-x-8 text-primary text-xl mb-5'>
                  <FaInstagram/>
                  <FaFacebookSquare/>
                  <FaTwitter/>
                  <FaLinkedin/>
                </Flex>
                <div className='w-1/2 flex justify-end gap-x-8'>
                <div className='flex gap-x-4 items-center'>
                  <BsTelephone className='text-third'/>
                  <p className=' text-lg text-secondary font-normal font-pop'>+12 345 6789 0</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                  <HiOutlineMail className='text-third'/>
                  <p className=' text-lg text-secondary font-normal font-pop'>support@tronix.com</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                  <FiUser className='text-third'/>
                  <p className=' text-lg text-secondary font-normal font-pop'>Account</p>
                </div>
                </div>
            </Flex>
        </Container>
    </Section>
  )
}

export default Connect