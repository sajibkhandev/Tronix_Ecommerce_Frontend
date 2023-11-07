import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import ChectoutCard from '../components/ChectoutCard'

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
        {/* Buyer info start */}
        <Flex className='pt-20'>
            <div className='w-8/12'>
                <div className='w-full border-b border-solid border-primary pb-8 mb-8'>
                    <h4 className='text-secondary text-lg font-medium font-pop'>Buyer Info</h4>
                </div>
                <Flex className='justify-between flex-wrap'>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="name">First Name</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="name" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="lastname">Last Name</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="lastname" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="Address">Address</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="Address" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="Contact">Contact</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="Contact" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="Country">Country</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="Country" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="City">City</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="City" type="text" />
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="State">State</label>
                        <select className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' name="" id="State">
                            <option value="">Select State</option>
                            <option value="">Dhaka</option>
                            <option value="">Sylhet</option>
                            <option value="">Khulna</option>
                        </select>
                        
                    </div>
                    <div className='w-w48'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="Zip Code">Zip Code</label>
                        <input className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="Zip Code" type="text" />
                    </div>
                    <div className='w-full'>
                        <label className=' text-secondary text-lg font-normal font-pop' htmlFor="Note">Note</label>
                        <textarea className='w-full py-4 px-4 border-primary border-solid border rounded-lg mt-4 mb-8' id="Note" type="text" />
                    </div>
                </Flex>
            </div>
            <div className='w-4/12'>
                <ChectoutCard/>
            </div>
        </Flex>
        {/* Buyer info end */}
    </Container>
   </Section>
  )
}

export default Checkout