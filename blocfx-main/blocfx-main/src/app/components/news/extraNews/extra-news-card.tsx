import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

interface ExtraNewsCardProps {
    image: any,
    title: string,
    newsId: string
}

export default function ExtraNewsCard({ image, title, newsId }: ExtraNewsCardProps) {
    return (
        <Link
            href={`news/${newsId}`}
            className='relative flex items-center hover:shadow-md'>
            <div className='max-w-2xl md:max-w-xs h-[170px] w-[170px] sm:h-[240px] sm:w-[240px] lg:h-[200px] lg:w-[290px] xl:h-[240px] xl:w-[300px] '>
                <div className='absolute h-full w-full bg-gray-900/30 z-40'></div>
                <Image
                    src={image}
                    alt='news'
                    loading='lazy'
                    style={{ objectFit: 'cover' }}
                    fill
                />
            </div>
            <div className='font-bold pl-4 flex max-w-[14rem] text-left font-aktifoa  text-white absolute z-50  overflow-hidden'>
                <p className='truncate '>
                    {title}
                </p>
            </div>
        </Link>
    )
}
