"use client"

import Link from 'next/link';
import React, { useState } from 'react';

export default function Signin() {
  const [bgPosition, setBgPosition] = useState('0px 0px');
  const nandleMousMove = (evt: React.MouseEvent<HTMLButtonElement>): void =>  {
    setBgPosition(`${(window.innerWidth - evt.pageX) * 0.03}px ${(window.innerWidth - evt.pageY) * 0.03}px`);
  }
  return (
    <main onMouseMove={nandleMousMove} style={{'backgroundPosition' : bgPosition}} className="bg-[#FFE6E6] flex h-screen justify-between overflow-hidden px-6 bg-pink-paws">
      <div className="border-l-emerald-50 rotate-12 ml-48 h-[120%] translate-y-[-100px] overflow-auto">
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400 opacity-30 blur-sm m-3"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400 opacity-30 blur-sm m-3"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400 opacity-30 blur-sm m-3"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400 opacity-30 blur-sm m-3"></article>
      </div>
      <div className='w-96 flex justify-center items-stretch flex-col mr-16'>
        <h1 className="font-lilita text-center font text-8xl mb-7">MY</h1>
        <form action="#" method='post' className='flex flex-col items-center gap-y-4'>
          <input type="text" className='w-full border-white opacity-30 border-4 rounded-2xl bg-[#ff90f9] px-4 py-3 outline-none' />
          <input type="text" className='w-full border-white opacity-30 border-4 rounded-2xl bg-[#ff90f9] px-4 py-3 outline-none' />
          <button type='submit' className='w-full border-white border-4 rounded-2xl bg-[#ff90f9] px-4 py-3 outline-none'>Войти</button>
        </form>
        <Link href={'/signup'}>Зарегистрироваться</Link>
      </div>
    </main>
  )
}
