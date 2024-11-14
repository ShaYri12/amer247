import React from 'react'
import img from '/public/assets/need.svg'
import Heading from '@/components/shared/common/heading'
import Image from 'next/image'
import SubHeading from '@/components/shared/common/subHeading'


type Props = {}
const Countries = [
    { name: ' United Kingdom' },
    { name: 'Australia' },
    { name: ' Europe' },
    { name: ' Canada' },
    { name: ' USA' },
]
const Needs = (props: Props) => {

    return (
        <div>
            <div className="md:py-20 py-10   flex justify-center  flex-wrap items-center w-full">
                <div data-aos="zoom-in" className="lg:w-1/2 full lg:px-32 md:px-10 px-5 space-y-5">
                    <Heading text='One Stop Shop for all your Immigration Needs' />
                    <SubHeading text='With our unrivalled knowledge experience and expertise we will guide you through each step of the way.
Our well-trained and refined immigration experts will skilfully guide you through your immigration process to any country you aspire to settle' styles='!text-black ' />
                    <Heading text='Countries we serve in' />
                    <div className="flex gap-2 lg:flex-col flex-wrap flex-row">
                        {Countries.map((country , i)=>(
                        // eslint-disable-next-line react/jsx-key
                            <div data-aos="zoom-in" key={i} className="flex items-center lg:gap-5 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M17.8508 31.6283C17.3842 31.6283 16.9392 31.4667 16.5792 31.1633L8.19083 24.07C7.78917 23.73 7.54583 23.2567 7.50583 22.7333C7.46583 22.2117 7.6325 21.7083 7.9775 21.31L10.1892 18.7633C10.8925 17.955 12.1342 17.86 12.9542 18.5533L17.1875 22.1317L28.0592 9.08001C28.7492 8.25501 29.9858 8.13668 30.8192 8.81168L33.4458 10.94C33.8558 11.2717 34.1075 11.7417 34.1592 12.2633C34.2108 12.785 34.0525 13.2917 33.7158 13.6933L19.3708 30.9183C19.0325 31.3233 18.5558 31.5733 18.0275 31.6183C17.9692 31.6267 17.9092 31.6283 17.8508 31.6283Z" fill="#FF512F" />
                            </svg>
                            <p className="text-lg font-medium">{country.name}</p>
                        </div>
                        ))}
                    </div>

                </div>
                <div className="lg:w-1/2 w-full relative flex justify-center items-center">
                    <div className="lg:w-1/2 w-3/4 absolute py-5 z-20">
                        <div className="bg-black w-[97%] py-4 px-5 text-white text-lg font-medium">
                            First Immigration company affiliated by Government of UAE
                        </div>
                        <div className="bg-primary w-[20%] h-[90%] absolute right-0 bottom-1 -z-10"></div>
                    </div>
                    <Image src={img} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Needs