import Image from 'next/image'
import React from 'react'

interface DebitItemCardProps {
    image: any,
    title: string,
    description: React.ReactNode
}

export default function DebitItemCard({ image, description, title }: DebitItemCardProps) {
    return (
        <div className='flex gap-3 lg:gap-8 max-w-xl flex-col lg:flex-row'>
            <div className='items-center lg:items-start flex flex-col '>
                < Image
                    src={image}
                    alt={title}
                    height={45}
                    className='hidden lg:block'
                    loading='lazy'
                />
                <Image
                    src={image}
                    alt={title}
                    height={25}
                    className=' lg:hidden'
                    loading='lazy'
                />
                <p className='font-aktifoa  text-base lg:text-2xl'> {title}</p>
            </div >
            <div className='font-aktifoa-light text-xs xl:text-base sm:text-sm'>
                {description}
            </div>
        </div >
    )
}
