import React from 'react'
import p1 from '/public/assets/partners/partner1.svg'
import p2 from '/public/assets/partners/partner2.svg'
import p3 from '/public/assets/partners/partner3.svg'
import p4 from '/public/assets/partners/partner4.svg'
import p5 from '/public/assets/partners/partner5.svg'
import p6 from '/public/assets/partners/partner6.svg'
import Image from 'next/image'

type Props = {}

const Partners = (props: Props) => {
    return (
        <>
            <div className="md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap justify-center items-center relative">
                <div data-aos="zoom-in" className="flex flex-wrap justify-center items-center">
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p1} alt=''    className='' /> </div>
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p2} alt=''    className='' /> </div>
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p3} alt=''   className='px-3'  /> </div>
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p4} alt=''   className=''  /> </div>
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p5} alt=''  className=''  /> </div>
                    <div className="md:w-1/3 w-1/2 ">  <Image src={p6} alt=''  className=''  /> </div>
                </div>
            </div>
        </>
    )
}

export default Partners