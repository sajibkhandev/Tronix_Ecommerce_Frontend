import React, { useState } from 'react'
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
import Product2 from '../components/Product2'

import q1 from '../assets/q1.png'
import q2 from '../assets/q2.png'
import q3 from '../assets/q3.png'
import q4 from '../assets/q4.png'
import q5 from '../assets/q5.png'
import q6 from '../assets/q6.png'
import quality from '../assets/quality.png'
import Product3 from '../components/Product3'
import Product4 from '../components/Product4'
import Product5 from '../components/Product5'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let [second,setScond]=useState("")
  let [minute,setMinute]=useState("")
  let [hour,setHour]=useState("")
  let [day,setDay]=useState("")

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          backgroundColor: currentSlide === i ? 'red' : 'white',
          display: 'inline-block',
          margin: '0 5px',
        }}
      />
    ),
  };

 function countdown(){
  let current=new Date().getTime()
  let deadline=new Date('2023-11-10T00:00:00')
  let now=deadline-current
  let s=Math.floor(now/1000)
  let m=Math.floor(s/60)
  let h=Math.floor(m/60)
  let d=Math.floor(h/24)
  s%=60
  m%=60
  h%=24

  setScond(s=(s<10)?"0"+s:s)
  setMinute(m=(m<10)?"0"+m:m)
  setHour(h=(h<10)?"0"+h:h)
  setDay(d=(d<10)?"0"+d:d)
 }
 setTimeout(countdown,1000)
 
  
  return (
    
    <>
    {/* Banner part start */}
    <Section className='pb-20 pt-8'>
      <Container>
        <Flex className='gap-x-5'>
          <div className='w-8/12'>
          <Slider {...settings}>
          <div>
          <Image src={banner1}/>
          </div>
          <div>
          <Image src={banner1}/>
          </div>
          <div>
          <Image src={banner1}/>
          </div>
          <div>
          <Image src={banner1}/>
          </div>
          <div>
          <Image src={banner1}/>
          </div>
          <div>
          <Image src={banner1}/>
          </div>
        </Slider>
            
          </div>
          <div className='w-4/12  flex flex-col justify-between'>
            <Image src={banner2}/>
            <Image src={banner3}/>
          </div>
        </Flex>
      </Container>
    </Section>
    {/* banner part end */}
    {/* New arrival start */}
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
    {/* New arrival end */}
    {/* Flash Sale start */}
    <Section>
      <Container>
        <Flex>
          <div className='w-1/2 flex gap-x-10 items-center'>
            <h4 className='text-[56px] text-secondary font-mon font-bold'>Flash Sale</h4>
            <div className='flex gap-x-6'>
              <div className='w-[80px] h-[80px] border border-solid border-secondary rounded-2xl flex justify-center items-center flex-col'>
                <p className='text-2xl text-third font-bold font-pop'>{hour}</p>
                <p className='text-lg text-primary font-normal font-pop'>Hrs</p>
              </div>
              <div className='w-[80px] h-[80px] border border-solid border-secondary rounded-2xl flex justify-center items-center flex-col'>
                <p className='text-2xl text-third font-bold font-pop'>{minute}</p>
                <p className='text-lg text-primary font-normal font-pop'>Min</p>
              </div>
              <div className='w-[80px] h-[80px] border border-solid border-secondary rounded-2xl flex justify-center items-center flex-col'>
                <p className='text-2xl text-third font-bold font-pop'>{second}</p>
                <p className='text-lg text-primary font-normal font-pop'>Sec</p>
              </div>

            </div>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
          <p className='text-2xl text-third font-normal font-pop'>View All</p>
          </div>
        </Flex>
        <Flex className='justify-between pt-14'>
          <Product2 heading="Wireless Headphone"/>
          <Product2 heading="Air Purifier"/>
          <Product2 heading="Bluetooth Printer"/>
        </Flex>
      </Container>
    </Section>
    {/* Flash Sale end */}
    {/* Quality Start */}
    <Section>
      <Container>
        <Flex className='justify-between px-28 py-40'>
          <Image src={q1}/>
          <Image src={q2}/>
          <Image src={q3}/>
          <Image src={q4}/>
          <Image src={q5}/>
          <Image src={q6}/>
          
        </Flex>
        <Image src={quality} className="pb-40"/>
      </Container>
    </Section>
    {/* Quality end */}
    {/* Feature Product start */}
    <Section>
      <Container>
        <Flex className='justify-between pb-5'>
          <Product4/>
         <div>
          <Flex className='justify-between'>
          <SubHeading text='Featured Products' className='pb-10'/>
          <p className='text-2xl text-third font-normal font-pop'>View All</p>
          </Flex>
          <Flex className='gap-x-8'>
            <Product3 heading="Wireless Microphone"/>
            <Product3 heading="Smart Watch New Series"/>
            <Product3 heading="Camera HD + Lens"/>
          </Flex>

         </div>
        </Flex>
      </Container>
      
    </Section>
    {/* Feature Product end*/}
    {/* Top Product start */}
    <Section className='py-40'>
      <Container>
        <Flex className='justify-between pb-8'>
          <SubHeading text="Top Rated Product"/>
          <p className='text-2xl text-third font-normal font-pop'>View All</p>
        </Flex>
        <Flex className='justify-between pb-5'>
          <Product5 heading='BsFillHeartFill'/>
          <Product5 heading='Smart TV HD'/>
          <Product5 heading='Surveillance Camera'/>
          <Product5 heading='Joystick Pro'/>
        </Flex>
      </Container>
      
    </Section>
    {/* Top Product end*/}
    </>
  )
}

export default Home