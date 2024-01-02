import Image from 'next/image'
import React from 'react'

import SafeIcon from '../../../public/icons/safe.png'

interface ApplyingItemCardProps {
    description: string
}

export default function SafeItemCard({ description }: ApplyingItemCardProps) {
    return (
        <div className='flex items-center'>
            <div className='flex rounded-full'>
                <Image
                    src={SafeIcon}
                    alt='safe'
                    width={240}
                    loading='lazy'
                    className='xs:hidden md:hidden lg:block'
                />
                <Image
                    src={SafeIcon}
                    alt='safe'
                    width={130}
                    loading='lazy'
                    className='hidden xs:block lg:hidden'
                />

            </div>
            <div className='flex flex-col gap-4 -ml-2 md:-ml-0'>
                <p className='font-aktifoa-light text-[0.8rem] sm:text-base max-w-sm md:max-w-xl'> {description}</p>
            </div>
        </div>
    )
}
