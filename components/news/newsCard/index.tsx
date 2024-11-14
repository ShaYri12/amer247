import Heading from '@/components/shared/common/heading';
import React from 'react';
import post from '/public/assets/post.svg';
import Image from 'next/image';
import SubHeading from '@/components/shared/common/subHeading';

type Props = {
    blog: {
        id: number;
        title: string;
        slug: string;
        content: string;
    };
};

const NewsCard: React.FC<Props> = ({ blog }) => {
    // Splitting content into words

    return (
        <>
            <div className="w-full relative space-y-4">
                <div className="border-l-[8px] border-black pl-10">
                    <Heading text={blog.title} styles="!text-2xl" />
                </div>
                <Image src={post} alt="" />
                <SubHeading text={blog?.content} styles="!border-0 !pl-0" />
            </div>
        </>
    );
};

export default NewsCard;
