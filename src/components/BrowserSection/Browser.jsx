import React from 'react'
import BrowserItem from '../BrowserItem/BrowserItem'
import Button from '../HeaderBtn/HeaderBtn'


const Browser = () => {
  return (
    <>
    <section className='browser-section'>
      <div className='container w-[1239px] mx-auto mt-[64px]'>
        <h2 className='text-[#333333] text-[38px] font-medium'>Browser Our Category</h2>
        <h3 className='text-[#8BAC3E] text-[38px] font-medium'>Receipt</h3>
           <BrowserItem />
           <div className='justify-end flex gap-[13px] mt-[46px]'>
           <Button extraStyle={"w-[113px] py-[10px] text-white bg-[#8BAC3E] rounded-[25px] font-medium"}>PREV</Button>
           <Button extraStyle={"w-[113px] py-[10px] text-white bg-[#8BAC3E] rounded-[25px] font-medium"}>NEXT</Button>
           </div>
      </div>
    </section>
    </>
  )
}

export default Browser
