"use client"

import React, { useState } from 'react';

export default function Home() {
  const [bgPosition, setBgPosition] = useState('0px 0px');
  const nandleMousMove = (evt: React.MouseEvent<HTMLButtonElement>): void =>  {
    setBgPosition(`${(window.innerWidth - evt.pageX) * 0.03}px ${(window.innerWidth - evt.pageY) * 0.03}px`);
  }
  return (
    <main onMouseMove={nandleMousMove} style={{'backgroundPosition' : bgPosition}} className="bg-[#FFE6E6] flex h-screen items-end bg-pink-paws">
      {/* <div className="border-l-emerald-50 overflow-hidden rotate-12">
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400"></article>
        <article className="w-[300px] h-[350px] rounded-3xl bg-fuchsia-400"></article>
      </div> */}
      <div>
        <h1 className="animate-slide font-lilita font text-8xl">MY</h1>
      </div>
    </main>
  )
}
