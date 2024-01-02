import Image from 'next/image'
import React from 'react'

interface VisionFeatureCardProps {
    image: any;
    title: string
    des: string
}

export default function VisionFeatureCard({ image, title, des }: VisionFeatureCardProps) {
    return (
        <div className='flex items-center justify-center flex-col gap-2'>
            <Image
                src={image}
                alt='vision rank'
                height={90}
                loading='lazy'
            />
            <h1 className=' font-aktifoa-bold'>{title}</h1>
            <p className='font-aktifoa  text-center'>
                {des}
            </p>
        </div>
    )
}
