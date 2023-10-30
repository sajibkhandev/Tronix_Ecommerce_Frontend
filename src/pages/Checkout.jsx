import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'

const Checkout = () => {
  return (
   <Section>
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
    </Container>
   </Section>
  )
}

export default Checkout