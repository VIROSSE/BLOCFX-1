import React from 'react'
import Image from 'next/image'
import { cn } from '../../../../../lib/utils'

interface TeamCardProps {
    className?: string
    name: string
    role: string
    image: any
}

export default function TeamCard({ className, name, role, image }: TeamCardProps) {
    return (
        <div className={cn('bg-[#010202] grid flex-col text-white text-left rounded-xl shadow-md', className)}>
            <div className='grid flex-col max-w-[18rem] px-5 items-start pt-5  '>
                <h1 className=' font-aktifoa-bold'>{name}</h1>
                <p className='font-aktifoa-light text-sm max-w-[10rem]'>
                    {role}
                </p>
            </div>
            <div className='flex justify-end relative pl-8 '>
                <Image
                    src={image}
                    alt='team background'
                    style={{ objectFit: 'cover' }}
                    height={400}
                    loading='lazy'
                    className='rounded-xl'
                />
            </div>
        </div>
    )
}
