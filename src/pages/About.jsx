import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Image from '../components/Image'
import aboutBanner from '../assets/aboutBanner.png'
import AboutCard from '../components/AboutCard'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import AboutCard2 from '../components/AboutCard2'
import {FaAngleRight} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {
  let data=useSelector((state=>(state.breadcrumbs.previous)))
  let location=window.location.pathname.replace("/","")
  
  return (
    <Section>
      <Container>
        <Flex className='gap-x-4 items-center pt-12'>
          <p className='text-primary cursor-pointer '><Link to={`${data=="Home"?"/":`/${data}`}`}>{data}</Link></p>
          <FaAngleRight className='text-primary'/>
          <p className='first-letter:uppercase text-third cursor-pointer '>{location}</p>
        </Flex>
        <div className='pt-12 pb-20'>
              <Heading text="About Tronix" className='pb-8 text-center '/>
              <p className='w-[1056px] text-center  mx-auto text-lg text-secondary font-pop font-normal'>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</p>
        </div>
        <Image src={aboutBanner}/>
        <Heading text="Why Choosing Us" className='pt-40 pb-20 text-center'/>
        <Flex className="justify-between pb-">
          <AboutCard src={card1} heading="54 Brands" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
          <AboutCard src={card2} heading="Fast Delivery" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
          <AboutCard src={card3} heading="COD Service" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
          <AboutCard src={card4} heading="100% Original Products" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
        </Flex>
        {/* Team start */}
        <div className='py-40'>
        <Heading text="Our Team" className='text-center pb-8'/>
        <p className='w-[626px] text-center  mx-auto text-lg text-secondary font-pop font-normal pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
        <Flex className='justify-between'>
          <AboutCard2 heading="Sam Alabama" para="Team Member"/>
          <AboutCard2 heading="Athen Kamsia" para="Team Member"/>
          <AboutCard2 heading="Jack Lentera" para="Team Member"/>
          <AboutCard2 heading="Ahmad Pucelle" para="Team Member"/>

        </Flex>
        </div>
        {/* Team end */}
      </Container>
    </Section>
  )
}

export default About