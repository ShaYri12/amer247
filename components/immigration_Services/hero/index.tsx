import Image from 'next/image'
import React from 'react'
import bg from '/public/assets/immigrationServicesbg.svg'
import SubHeading from '@/components/shared/common/subHeading'
import Button from '@/components/shared/common/Button'

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className=" md:min-h-screen h-full w-full ">
                <div className="flex flex-wrap lg:h-screen  justify-center items-center  relative ">
                   
                    <div data-aos="zoom-in" className="md:w-2/6 w-[90%]  md:space-y-4  bg-white  relative lg:top-[20%] xl:top-[5%] top-20 lg:left-[10%] z-10 md:p-5 p-2">
                        <div className=" space-y-4 md:py-5 py-2 px-5 text-xl md:text-4xl font-bold underline-offset-4 text-black ">
                            <p className="underline decoration-primary">THE GLOBAL AXIS </p>
                            <p className="">IMMIGRATION SERVICES</p>
                        </div>
                        <SubHeading text='We are team of well-trained and refined immigration experts to guide youthrough your immigration process to any country you aspire to settle.'styles='!text-black '/>
                        <Button label='GET STARTED' />
                    </div>
                    <div data-aos="zoom-in" className="md:w-4/6 w-full bg-black md:h-screen md:relative   absolute">
                       <Image src={bg} alt='' className='w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero