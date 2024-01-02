import Image from 'next/image'
import React from 'react'
import EyeIcon from '../../../../../public/icons/eye.svg'
import CommunicateIcon from '../../../../../public/icons/communicate.svg'
import Link from 'next/link'

interface RelatedNewsCardProps {
    image: any,
    title: string,
    views: number,
    comments: number
    newsId: string
}


export default function RelatedNewsCard({ image, title, views, comments, newsId }: RelatedNewsCardProps) {
    return (
        <Link href={`/news/${newsId}`} className='grid hover:shadow-md hover:cursor-pointer'>
            <div className='flex h-[20rem] relative'>
                <Image
                    src={image}
                    alt={title + 1}
                    style={{ objectFit: 'cover' }}
                    loading='lazy'
                    fill
                />
            </div>
            <div className='border font-aktifoa p-8 space-y-5 grid border-t-0'>
                <p >{title}</p>
                <div className='grid'>
                    <div className='border-t pt-5 flex items-center gap-5 '>
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={EyeIcon}
                                alt='view'
                                height={20}
                            />
                            <p>{views}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={CommunicateIcon}
                                alt='communicate'
                                height={20}
                            />
                            <p>{comments}</p>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}
