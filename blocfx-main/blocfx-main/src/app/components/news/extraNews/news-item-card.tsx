import Image from 'next/image'
import React from 'react'

import MiniLogo from '../../../../../public/icons/mini-logo.svg'
import ExtraNews from '../../../../../public/banners/extra-news-bg.jpg'
import { MoreVertical } from 'lucide-react'
import Link from 'next/link'

interface NewsItemCardProps {
    image: any
    title: string,
    des: string
    newsId: string
}

export default function NewsItemCard({ image, title, des, newsId }: NewsItemCardProps) {
    return (
        <Link href={`/news/${newsId}`} className='flex gap-3 md:gap-10 flex-wrap md:flex-nowrap  max-w-7xl w-full hover:shadow-md p-3' >
            <div className='flex gap-3 md:gap-10 flex-wrap md:flex-nowrap md:items-center w-full ' >

                <div className='max-w-2xl md:max-w-sm'>
                    <Image
                        src={image}
                        alt={"news"}
                        loading='lazy'
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='flex flex-col text-left gap-4 md:gap-0 lg:gap-4 pl-1 md:pl-0'>
                    <div className='flex items-center gap-4 w-full  justify-between'>
                        <div className='flex items-center gap-4'>
                            <Image
                                src={MiniLogo}
                                alt={"MiniLogo"}
                                loading='lazy'
                                style={{ objectFit: 'cover' }}
                                height={40}
                            />
                            <p className='font-aktifoa-light'>
                                BLOC FX
                            </p>
                        </div>
                        <div className='justify-end md:hidden'>
                            <MoreVertical />
                        </div>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <p className='font-aktifoa-bold'>{title}</p>
                        <p className=' md:text-sm lg:text-base font-aktifoa line-clamp-3'>{des}</p>
                    </div>
                    <div className='mt-2'>

                    </div>
                </div>

            </div>
            <div className='md:flex hidden'>
                <MoreVertical />
            </div>
        </Link>
    )
}
