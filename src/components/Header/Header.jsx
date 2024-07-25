import React from 'react'
import SiteBg from "../../assets/images/site-bg.png"
import SiteLogo from "../../assets/images/logo.png"
import HeaderItem from '../HeaderItem/HeaderItem'
import HeaderImg from '../../assets/images/header-img.png'
import Button from '../../components/HeaderBtn/HeaderBtn'
const Header = () => {
  return (
    <>
    <header className='relative'>
                <img src={SiteBg} className='absolute top-0 -z-10 opacity-5 w-screen' alt='site-bg'/>
      <div className='flex flex-col w-[1239px] mx-auto '>
            <div className='flex items-center pt-[19px] pb-[27px] justify-between'>
                <div className='flex justify-between items-center'>
                <img src={SiteLogo} alt="site-logo" />
                </div>
                <ul className='flex gap-[32px] text-[#757575] relative'>
                <div className="absolute -top-4 left-[50%] capitalize bg-red text-white text-center bg-[#E7462D] leading-[14px] font-bold text-[8px] px-[9px] py-[3px] rounded-[8px] ">hot</div>
                  <HeaderItem item={"Home"}/>
                  <HeaderItem item={"About"}/>
                  <HeaderItem item={"Promotions"}/>
                  <HeaderItem item={"Blogs"}/>
                  <HeaderItem item={"Contact Us"}/>
                </ul>
                <div className='w-[215px] flex justify-between items-center'>
                  <p className='font-bold'>Masuk</p>
                  <button className='w-[147px] bg-[#8BAC3E] text-white py-[10px] text-[14px] rounded-[25px]'>Daftar Sekarang</button>
                </div>
            </div>
            <div className='flex gap-[99px]'>
              <div className='w-[482px] mt-[156px]'>
                <h1 className='text-[#8BAC3E] text-[64px] font-medium leading-[64px]'>Good Food Us Good Mood</h1>
                <p className='text-[#757575] mt-[32px] w-[458px] text-[18px] font-normal leading-[29px]'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                <div className='flex gap-[17px] mt-[32px]'>
                <Button extraStyle={"w-[147px] py-[10px] text-white bg-[#8BAC3E] rounded-[25px] font-medium"}>Daftar Sekarang</Button>
                <Button extraStyle={"bg-[#F2F2F2] w-[98px] py-[10px] rounded-[25px] shadow-md text-[14px] font-medium"}>About Us</Button>
                </div>
              </div>
                <img src={HeaderImg} alt="fead"  className=''/>
            </div>
      </div>
    </header>
    </>
  )
}

export default Header
