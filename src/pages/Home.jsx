import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import SubHeading from '../components/SubHeading'

import Category1 from '../assets/01.png'
import Category2 from '../assets/02.png'
import Category3 from '../assets/03.png'
import Category4 from '../assets/04.png'
import Category5 from '../assets/05.png'
import Category6 from '../assets/06.png'
import Category7 from '../assets/07.png'
import Product1 from '../components/Product1'


const Home = () => {
  return (
    <>
    {/* Banner part start */}
    <Section className='pb-20 pt-8'>
      <Container>
        <Flex className='gap-x-5'>
          <div className='w-8/12'>
            <Image src={banner1}/>
          </div>
          <div className='w-4/12  flex flex-col justify-between'>
            <Image src={banner2}/>
            <Image src={banner3}/>
          </div>
        </Flex>
      </Container>
    </Section>
    {/* banner part end */}
    <Section>
      <Container>
        <SubHeading text="Category" className='mb-14'/>
        <Flex className='justify-between pb-40'>
          <Image src={Category1}/>
          <Image src={Category2}/>
          <Image src={Category3}/>
          <Image src={Category4}/>
          <Image src={Category5}/>
          <Image src={Category6}/>
          <Image src={Category7}/>

        </Flex>
        <Flex className='justify-between'>
        <SubHeading text='New Arrival' className='pb-8'/>
        <p className='text-2xl text-third font-normal font-pop'>View All</p>
        </Flex>
        <Flex className='pb-40 justify-between flex-wrap'>
          <Product1 price="299.00" heading="Smartphone 5G"/>
          <Product1 price="299.00" heading="USB Speaker Portable"/>
          <Product1 price="299.00" heading="Smart TV"/>
        </Flex>
      </Container>
    </Section>
    </>
  )
}

export default Home