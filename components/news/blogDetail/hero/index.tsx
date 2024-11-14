import Button from '@/components/shared/common/Button'
import Heading from '@/components/shared/common/heading'
import SubHeading from '@/components/shared/common/subHeading'
import React from 'react'
import SideArrow from '@/components/shared/common/sideArrow'
import CustomLink from '@/components/shared/common/customLink'

type Props = {
    blog: {
        id: number;
        title: string;
        slug: string;
        content: string;
    };
};


const Hero: React.FC<Props> = ({ blog }) => {
    const words = blog.content.split(' ');

    // Selecting first 50 words and joining them back together
    const shortContent = words.slice(0, 50).join(' ');

    return (
        <>
            <div className=" min-h-screen w-full">
                <div className="flex flex-wrap lg:h-screen flex-shrink-0 md:flex-row flex-col justify-center items-center xl:px-32 lg:px-20 md:px-12 pt-24 relative bg-[#F9F9F9] ">
                 
                    <div data-aos="zoom-in" className="lg:w-1/2 w-full px-5 h-full  flex flex-col gap-2 justify-center items-start z-10 py-5">
                        <div className="bg-background py-10 px-5 text-xl md:text-3xl font-semibold underline-offset-4 text-grey1 underline decoration-primary">
                            {blog.title}
                        </div>
                        <SubHeading text={shortContent} styles='w-3/4  !text-grey1' />
                        
                        <p className="text-grey1 text-md font-medium mt-4">Updated on 25-03-2023</p>

                    </div>
                    <div data-aos="zoom-in" className="lg:w-1/2 w-full relative px-5 md:bg-white space-y-4 h-full flex flex-col items-center justify-center" >
                        <Heading text='Table of Contents' styles='!text-2xl'/>
                        <SubHeading text='Read all or quickly jump to a topic by clicking below' styles='!border-0 !pl-0' />

                        <div className="custom-border py-2">
                            <CustomLink label='May I have your exact location, kindly share your' href='/' styles='w-full !border-0 !pl-0' iconStyles='pl-20' /> 
                        </div>
                        <div className="custom-border py-2">
                            <CustomLink label='May I have your exact location, kindly share your' href='/' styles='w-full !border-0 !pl-0' iconStyles='pl-20' />
                        </div>
                        <div className="custom-border py-2">
                            <CustomLink label='May I have your exact location, kindly share your' href='/' styles='w-full !border-0 !pl-0' iconStyles='pl-20' />
                        </div>
                    </div>

                    <div className="absolute right-3 bottom-5"><SideArrow /></div>
                </div>

            </div>
        </>
    )
}

export default Hero