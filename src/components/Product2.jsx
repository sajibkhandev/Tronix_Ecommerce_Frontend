import React from 'react'

const Product2 = ({heading}) => {
  return (
    <div>
        <div className='w-w512 h-h611 border border-solid border-primary rounded-b-3xl mb-6'>
            <div className='w-full h-h376 bg-primary relative'>
            <div className='absolute top-[25px] right-[25px] z-10 w-[130px] py-2 rounded-lg text-white text-lg font-medium text-center font-pop bg-[#BB6BD9]'>25% OFF</div>
            </div>
            <div className='flex flex-col items-center pt-8'>
            <h5 className='text-2xl text-secondray font-pop font-normal pb-2'>{heading}</h5>
            <div className='flex gap-x-2 items-center pb-8'>
                <p className='text-2xl text-primary font-normal font-pop line-through'>$29.99</p>
                <p className='text-3xl text-third'>-</p>
                <p className='text-2xl text-third font-medium font-pop'>$19.99</p>
            </div>
            <div className='flex justify-between w-w312 pb-2'>
                <p className='text-lg text-secondary font-normal font-pop'>Available: 10 </p>
                <p className='text-lg text-secondary font-normal font-pop'>Sold: 5 </p>
            </div>
            <div className='w-w312 h-h10 bg-primary rounded'>
                <div className='w-1/2 h-full bg-third rounded'></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Product2