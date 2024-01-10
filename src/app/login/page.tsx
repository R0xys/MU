"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion"
import myLogo from "../../../public/images/my-logo.svg";
import PhoneInput from 'react-phone-input-2';

export default function Login() {
  const [bgPosition, setBgPosition] = useState('0px 0px');

  const nandleMousMove = (evt: React.MouseEvent<HTMLButtonElement>): void =>  {
    setBgPosition(`${(window.innerWidth - evt.pageX) * 0.03}px ${(window.innerWidth - evt.pageY) * 0.03}px`);
  }

  return (
    <main onMouseMove={nandleMousMove} style={{'backgroundPosition' : bgPosition}} className="bg-[#FFE6E6] flex h-screen justify-between overflow-hidden px-6 bg-pink-paws">
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
        <Swiper autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true,}} slidesPerView={3} modules={[Mousewheel, Autoplay]} mousewheel={true} loop={true}  direction={'vertical'} className="border-l-emerald-50 overflow-visible rotate-12 2xl:ml-80 xl:ml-52 lg:ml-32 flex flex-col w-[320px] h-[120%] translate-y-[-100px]">
          <SwiperSlide className="bg-fly-heart bg-[length:256px_256px] bg-[right_bottom_-82px] bg-no-repeat flex flex-col items-center w-[300px] h-[350px] hover:scale-105 transition-transform rounded-3xl backdrop-blur-[3px] border-[1px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-8 border-[rgba(255,255,255,0.18)] bg-[rgba(190,24,93,0.3)] m-3">
            <h2 className='text-[#ffffff] drop-shadow-[2px_2px_0_#ec4899] mb-9 text-3xl'>Одно сообщение - столько эмоций</h2>
          </SwiperSlide>
          <SwiperSlide className="bg-hearts bg-[length:256px_256px] bg-[right_bottom_-62px] bg-no-repeat w-[300px] h-[350px] hover:scale-105 transition-transform rounded-3xl backdrop-blur-[3px] border-[1px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-8 border-[rgba(255,255,255,0.18)] bg-[rgba(190,24,93,0.3)] m-3">
            <h2 className='text-[#ffffff] drop-shadow-[2px_2px_0_#ec4899] mb-9 text-3xl'>Дарите любовь своим близким</h2>
          </SwiperSlide>
          <SwiperSlide className="bg-security bg-[length:256px_256px] bg-[right_bottom_-28px] bg-no-repeat w-[300px] h-[350px] hover:scale-105 transition-transform rounded-3xl backdrop-blur-[3px] border-[1px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-8 border-[rgba(255,255,255,0.18)] bg-[rgba(190,24,93,0.3)] m-3">
            <h2 className='text-[#ffffff] drop-shadow-[2px_2px_0_#ec4899] mb-9 text-3xl'>Ваши секреты останутся только вашими</h2>
          </SwiperSlide>
          <SwiperSlide className="bg-family bg-[length:256px_256px] bg-[right_bottom_-45px] bg-no-repeat w-[300px] h-[350px] hover:scale-105 transition-transform rounded-3xl backdrop-blur-[3px] border-[1px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-8 border-[rgba(255,255,255,0.18)] bg-[rgba(190,24,93,0.3)] m-3">
            <h2 className='text-[#ffffff] drop-shadow-[2px_2px_0_#ec4899] mb-9 text-3xl'>Один мессенджер для всей семьи</h2>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <div className='w-96 flex flex-grow justify-center items-center flex-col mr-28 ml-24'>
        {/* <h1 className="font-lilita text-center font text-8xl mb-7">MY</h1> */}
        <Image alt='cat lie on my' className='mb-6 ml-4' src={myLogo} />
        <form action="#" method='post' className=' w-96 flex flex-col items-center gap-y-4'>
          <PhoneInput country={'ru'} countryCodeEditable={false} />
          {/* <input placeholder='Номер телефона' type="tel" className='w-full border-[#ec4899] border-4 backdrop-blur-[3px] rounded-2xl placeholder:text-[#ec489a67] text-[14px] bg-[rgba(190,24,93,0.12)] px-4 py-3 outline-none' /> */}
          <button type='submit' className='w-full border-[#ec4899] border-4 rounded-2xl text-[#f9a8d4] bg-[#be185d] hover:bg-[#b11657] transition mt-2 px-4 py-3 outline-none'>Войти</button>
        </form>
        <Link href={'/signup'} className='text-center transition hover:text-[#ac4771] text-[#d3568a] mt-3'>Регистрация</Link>
      </div>
    </main>
  )
}
