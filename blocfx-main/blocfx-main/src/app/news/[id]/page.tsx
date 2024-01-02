import CurrentNewsSection from '@/app/components/news/currentNewsSection';
import React from 'react'

interface CurrentNewsProps {
    params: {
        id: any
    }
}

export default function CurrentNews({ params: { id } }: CurrentNewsProps) {

    return (
        <div className='flex justify-center flex-col  items-center  md:max-w-7xl pb-20 pt-10  md:py-20 mx-auto px-5 md:px-10 '>
            <div className=' h-20 bg-black w-full  text-white absolute top-0 -z-20' />
            <CurrentNewsSection newsId={id} />
        </div>
    )
}
