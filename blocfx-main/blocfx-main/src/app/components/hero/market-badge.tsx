import React from 'react'

interface MarketBadgeProps {
    name: string,
    value: string
}

export default function MarketBadge({ name, value }: MarketBadgeProps) {
    return (
        <div className='flex flex-col items-center justify-center h-36 w-36 text-center rounded-full gradient-background'>
            <h1 className='font-semibold text-4xl'>{value}</h1>
            <p className='text-gray-800 text-sm px-2'>{name}</p>
        </div>
    )
}
