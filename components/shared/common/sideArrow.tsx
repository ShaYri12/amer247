'use client'
import Image from 'next/image'
import React from 'react'
import text from '/public/assets/SCROLL FOR MORE.svg'
import arrow from '/public/assets/arrow.svg'

type Props = {}

const SideArrow = (props: Props) => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <button className='md:flex hidden flex-col items-center justify-center gap-4 ' onClick={scrollDown}>
        <Image src={text} alt='' className='w-1/5' />
        <Image src={arrow} alt='' className='w-3/4 hover:scale-105 transition-all divide-fuchsia-300' />
      </button>
    </>
  );
}

export default SideArrow;
