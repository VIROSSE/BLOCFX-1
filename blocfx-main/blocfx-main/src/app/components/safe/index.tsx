import React from 'react'

import { ButtonWithIcon } from '../ui/button'
import { safeStep } from '../../../../utils/CONSTANTS'
import SafeItemCard from '../safe-item-card'
import BgImage from '../../../../public/banners/bg-safe.jpg'
import MobileBgImage from '../../../../public/banners/rest-bg.png'
import Image from 'next/image'

export default function SafeSection() {

    return (
        <div className="relative h-screen bg-white">
            <Image
                src={BgImage}
                alt="safe account"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className='hidden md:block'

            />
            <Image
                src={MobileBgImage}
                alt="mobile safe account"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className='md:hidden'

            />
            <div className="absolute inset-0 flex items-center justify-end z-10">
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24">
                    <div className='grid  space-y-10 px-5 md:px-20 max-w-2xl w-full'>
                        <div className='space-y-2 text-2xl md:text-4xl font-cenios text-left ml-5 md:ml-1'>
                            <h1>Rest assured, your </h1>
                            <h1>money is in safe hands</h1>

                        </div>
                        <div className=' flex flex-col w-full gap-12 md:gap-0 '>
                            <div className='grid pr-10  md:pr-auto md:-ml-5'>
                                {safeStep?.map((item, index) => (
                                    <SafeItemCard
                                        key={index}
                                        description={item?.description}
                                    />
                                ))}
                            </div>
                            <div className='flex justify-center items-center py-4'>
                                <ButtonWithIcon title='Open account' className="bg-[#bab9b9a8]" link='/request' />
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
