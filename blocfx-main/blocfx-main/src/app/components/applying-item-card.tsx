import React from 'react'

interface ApplyingItemCardProps {
    step: number,
    title: string,
    description: string
}

export default function ApplyingItemCard({ step, title, description }: ApplyingItemCardProps) {
    return (
        <div className='flex items-center gap-6'>
            <div className='flex step-border-color rounded-full p-2'>
                <div className='step-gradient-bg w-14 h-14 rounded-full flex justify-center items-center font-aktifoa-bold text-4xl text-black'>
                    {step}
                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl md:text-xl font-cenios'>{title}</h1>
                <p className='font-aktifoa-light text-sm max-w-sm'> {description}</p>
            </div>
        </div>
    )
}
