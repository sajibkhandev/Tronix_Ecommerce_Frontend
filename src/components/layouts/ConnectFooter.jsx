import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import connectLogo from '../../assets/connectLogo.png'

const ConnectFooter = () => {
  return (
    <Section className='py-16 bg-third'>
        <Container>
            <Flex className='px-20 items-center'>
                <div className='w-7/12 flex items-center gap-x-4'>
                    <Image src={connectLogo}/>
                    <div>
                        <h4 className=' text-5xl text-white font-mon font-bold pb-4'>Join our newsletter now!</h4>
                        <p className='text-lg text-five font-normal font-pop'>Register now and get our latest updates and promos.</p>
                    </div>

                </div>
                <div className='w-5/12 relative'>
                    <input type="text" className='w-full py-5  px-8 rounded-lg placeholder:text-lg placeholder:font-normal placeholder:font-pop' placeholder='Enter your email'/>
                    <button className='absolute top-[6px] right-[8px] py-3  px-8 bg-black rounded-lg text-lg text-white font-pop font-bold'>Join</button>
                </div>

            </Flex>
        </Container>
    </Section>
  )
}

export default ConnectFooter