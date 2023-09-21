import React from 'react'
import Image from 'next/image'
import arrow from '../../../public/images/PolygonArrow.png'

const SearchDetail = () => {
  return (
    <div>
        <div className='flex flex-row w-[328px] justify-between font-500 mt-[15px] '>
      <p className='underline  underline-offset-1 '>Used Cars For Sale</p>
      <span className='transform translate-y-[6px]'><Image src={arrow}/></span>
      <p className='underline underline-offset-1'>Schenectady,NY</p>
      </div>
      <div className='flex flex-row justify-between mt-[10px]'> 
        <p className='text-[28px]'>
        <span className='font-semibold'>Used - Clear</span> : 2020 Mercedes-Benz S550 in Washington, DC.
        </p>
        <div className='text-[14px]'>
        <button className='mr-[10px] w-[139px] border-[1px] border-solid border-black rounded-2xl p-[5px]'>Set Notification</button>
        <button className='w-[114px] border-[1px] border-solid border-black rounded-2xl p-[5px]'>Save Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchDetail
