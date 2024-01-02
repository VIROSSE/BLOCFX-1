import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '../../../lib/utils'
import { buttonVariants } from './ui/button'

interface NewsCardProps {
    image: any,
    title: string,
    description: string,
    link: string
    date: string
}

export default function NewsCard({ image, title, description, link, date }: NewsCardProps) {
    return (
        <div className='flex  md:gap-7 flex-wrap md:flex-nowrap md:items-center max-w-7xl' >

            <Image
                src={image}
                alt={title}
                height={320}
                width={320}
                loading='lazy'
                style={{ objectFit: 'cover' }}
                objectPosition='center'
            />
            <div className='flex flex-col text-left gap-4 md:gap-0 lg:gap-4 pl-1 md:pl-0'>
                <p className='font-thin'>{date}</p>
                <div className='flex flex-col'>
                    <p className='font-bold'>{title}</p>
                    <p className=' md:text-sm lg:text-base'>{description}</p>
                </div>
                <div className='mt-2'>
                    <Link
                        href={link}
                        className={cn(
                            buttonVariants({ variant: "default", size: "sm" }),
                            ""
                        )}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
