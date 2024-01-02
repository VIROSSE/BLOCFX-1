import Image from 'next/image'
import React from 'react'

interface TeamMemberCardProps {
    image: any,
    title: string,
    description: string
}

export default function TeamMemberCard({ image, title, description }: TeamMemberCardProps) {
    return (
        <div className='flex flex-col justify-center w-full items-center gap-3'>
            <div className='flex items-center  justify-center gradient-background rounded-full '>
                <Image
                    src={image}
                    alt="profile"
                    height={160}
                    width={160}
                    loading='lazy'
                    className='rounded-full p-1'
                    style={{ objectFit: 'cover' }}

                    objectPosition='center'
                />
            </div>
            <div className='grid max-w-[12rem]  gap-1 '>
                <p className='font-extrabold'> {title}</p>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}
