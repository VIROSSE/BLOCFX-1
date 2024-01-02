import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FeaturesCardProps {
    image: any,
    title: string,
    description: string,
    link: string,
}

export default function FeaturesCard({ image, title, description, link }: FeaturesCardProps) {
    return (
        <div className='flex flex-row sm:flex-col  sm:justify-between items-center'>
            <div className='flex -ml-10 sm:ml-0'>
                <Image
                    src={image}
                    alt={title}
                    height={200}
                    width={200}
                    style={{ objectFit: 'cover' }}
                    objectPosition='center'
                    loading='lazy'
                />
            </div>

            <div className='flex flex-col  sm:-mt-9 text-left sm:text-center'>
                <div className='grid max-w-[12rem] gap-1'>
                    <p className='font-bold font-aktifoa-bold'> {title}</p>
                    <p className='text-xs font-aktifoa-light max-w-[10.5rem] '>{description}</p>
                </div>
                <Link href={link} className='underline mt-2 md:mt-9 font-aktifoa'>
                    Learn more
                </Link>
            </div>
        </div>
    )
}
