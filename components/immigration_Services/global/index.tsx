import Image from 'next/image'
import React from 'react'
import img from '/public/assets/global.svg'
import img2 from '/public/assets/consultant.svg'
import img3 from '/public/assets/arab man 1 1.svg'
import Heading from '@/components/shared/common/heading'
import SubHeading from '@/components/shared/common/subHeading'
import CustomLink from '@/components/shared/common/customLink'

type Props = {}
const Countries = [
    { name: ' Residency by Investment.' },
    { name: 'Citizenship by Investment.' },
    { name: ' Permanent Residency for skilled professionals.' },
    { name: ' Work Permit.' },
    { name: ' Sponsorship Visa' },
    { name: ' Visit/Tourist Visa.' },
    { name: ' Immigration Refusals.' },
]
const WhyGlobal = (props: Props) => {
    return (
        <div>
            <div className="md:py-20 py-10 lg:px-40 md:px-10 px-5  flex justify-center flex-wrap  items-center w-full">
                <div data-aos="zoom-in" className="lg:w-1/2 full">
                    <Image src={img} alt='' className='w-3/4'/>
                </div>
                <div data-aos="zoom-in" className="lg:w-1/2 full space-y-5">
                    <Heading text='Why work with The Global Axis'/>
                    <SubHeading text='We have 21 years of collective experience in immigration to Canada, the United States of America, the United Kingdom, Australia, Canada, European countries and Caribbean.Our services are trusted and guaranteed. The Global Axis stands behind our dedication, commitment and word to processing all our customers’ immigration files. At the Global Axis, our immigration consultants help clients achieve their immigration goals and objectives. We are the best immigration consultant in the United Arab Emirates. When it comes to offering top-notch solutions and services to complex immigration problems, no other consultants in the country are close to us.' styles='!border-primary !text-black'/>
                </div>
            </div>

            <div className="md:py-20 py-10 lg:px-40 md:px-10 px-5  flex justify-center flex-wrap  items-center w-full">
              
                <div data-aos="zoom-in" className="lg:w-1/2 full space-y-5">
                    <Heading text='Our immigration consultants help with :' styles='w-3/4' />
                    <div className="flex gap-1 lg:flex-col flex-wrap flex-row">
                        {Countries.map((country, i) => (
                            // eslint-disable-next-line react/jsx-key
                            <div key={i} className="flex items-center lg:gap-5 gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M17.8508 31.6283C17.3842 31.6283 16.9392 31.4667 16.5792 31.1633L8.19083 24.07C7.78917 23.73 7.54583 23.2567 7.50583 22.7333C7.46583 22.2117 7.6325 21.7083 7.9775 21.31L10.1892 18.7633C10.8925 17.955 12.1342 17.86 12.9542 18.5533L17.1875 22.1317L28.0592 9.08001C28.7492 8.25501 29.9858 8.13668 30.8192 8.81168L33.4458 10.94C33.8558 11.2717 34.1075 11.7417 34.1592 12.2633C34.2108 12.785 34.0525 13.2917 33.7158 13.6933L19.3708 30.9183C19.0325 31.3233 18.5558 31.5733 18.0275 31.6183C17.9692 31.6267 17.9092 31.6283 17.8508 31.6283Z" fill="#FF512F" />
                                </svg>
                                <p className="text-md font-medium">{country.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-aos="zoom-in" className="lg:w-1/2 full">
                    <Image src={img2} alt='' className='w-3/4' />
                </div>
            </div>
            
            <div className="md:py-20 py-10   flex justify-center  flex-wrap items-center w-full">
                <div data-aos="zoom-in" className="lg:w-1/2 w-full  amerServices flex justify-center items-center">
                    <Image src={img3} alt='' className='w-1/2' />
                </div>
                <div data-aos="zoom-in" className="lg:w-1/2 full lg:px-32 md:px-10 px-5 space-y-5">
                    <Heading text='Contact Global Axis Now!' />
                    <div className="">
                        <h1 className="md:text-[20px] text-[12px] font-semibold text-black pb-2">Address</h1>
                        <p className="text-grey1 md:text-lg text-[12px] font-medium pb-2"> Bank Street Building - M11 Khalid Bin Al Waleed Rd - Al Mankhool - Dubai</p>
                        
                    </div>
                    <div className="space-y-2">
                        <h1 className="md:text-[20px] text-[12px] font-semibold text-black pb-2">CONTACT INFO</h1>
                        <CustomLink label='E: info@amer247.com' href='/' styles='!lg:text-lg !text-[12px] ' iconStyles='hidden' />
                        <CustomLink label='+971 4 546 8555 / +971 50 564 4132' href='/' styles='!lg:text-lg !text-[12px] ' iconStyles='hidden' />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default WhyGlobal
