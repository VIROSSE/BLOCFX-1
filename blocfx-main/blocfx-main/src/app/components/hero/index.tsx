
import React from 'react'
import Image from 'next/image'

import { ButtonWithIcon } from '../ui/button'
import BgImage from '../../../../public/banners/bg-home2.png'

export default function Hero() {
    return (
        <div className="relative   h-screen bg-white">
            <Image
                src={BgImage}
                alt="vip section"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
            />
            <div className="absolute inset-0 flex items-center justify-end z-10">
                <div className="absolute inset-0 bg-black opacity-30 md:opacity-30  " ></div>
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24 justify-end  md:h-auto">
                    <div className='grid  space-y-10 px-5 md:px-20  w-full '>
                        <div className='flex flex-col gap-16 items-start  px-9  md:px-0    m-auto'>
                            <div className='grid  space-y-3'>
                                <h1 className='text-2xl md:text-4xl text-white font-cenios'>Your Trusted Partner in International Business Transfers.</h1>
                                <p className=' text-white text-sm md:text-lg leading-7 font-aktifoa '>
                                    Your Business. Your Currency. Your Way.
                                </p>
                            </div>
                            <div className=''>
                                <ButtonWithIcon title='Get Started' link="/request" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
