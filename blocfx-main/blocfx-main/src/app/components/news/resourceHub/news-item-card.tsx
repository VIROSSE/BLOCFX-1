import Image from 'next/image'
import React from 'react'

interface NewsItemCardProps {
    image: any
    title: string,
    des: string,
    date: string
}

export default function NewsItemCard({ image, title, des, date }: NewsItemCardProps) {
    return (
        <div className='flex gap-3 md:gap-7 flex-wrap md:flex-nowrap md:items-center max-w-7xl' >

            <div className='max-w-2xl md:max-w-xs'>
                <Image
                    src={image}
                    alt={"news"}
                    loading='lazy'
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='flex flex-col text-left gap-4 md:gap-0 lg:gap-4 pl-1 md:pl-0'>
                <p className='font-aktifoa-light'>{date}</p>
                <div className='flex flex-col'>
                    <p className='font-aktifoa-bold'>{title}</p>
                    <p className=' md:text-sm lg:text-base font-aktifoa'>{des}</p>
                </div>
                <div className='mt-2'>

                </div>
            </div>
        </div>
    )
}
