import React from 'react'

import { ButtonWithIcon } from '../ui/button'
import MobileBusiness from '../../../../public/banners/mobile-exchange.png'
import BgImage from '../../../../public/banners/business.jpg'
import MobileBgImage from '../../../../public/banners/mobile-business.png'
import Image from 'next/image'

export default function BusinessSection() {

    return (
        <div className="relative  h-screen bg-black">
            <Image
                src={BgImage}
                alt="business"
                fill
                loading='lazy'
                style={{ transform: "scaleX(-1)", objectFit: 'cover' }}
                className='hidden xs:block  '
            />
            <Image
                src={BgImage}
                alt="mobile business"
                loading='lazy'
                fill
                className='xs:hidden'
                style={{ transform: ' scaleX(-1)', objectFit: 'cover' }}
                objectPosition='58%'
            />
            <div className="absolute inset-0 flex items-center justify-end z-10">
                <div className="absolute inset-0 bg-black opacity-0 lg:opacity-10 z-10"></div>
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24">
                    <div className='grid  space-y-10 px-5 md:px-20  w-full'>
                        <div className='flex justify-center lg:justify-between items-center xl:gap-56 text-white  m-auto '>
                            <div className='flex flex-col gap-4 text-center md:text-left items-center lg:items-start'>
                                <div className='grid  space-y-3  md:px-5 lg:px-0 max-w-xl'>
                                    <h1 className='text-[1.7rem]  text-center md:text-left md:text-4xl font-cenios'> Try now and see the value</h1>
                                    <p className='font-aktifoa-light text-sm md:text-base md:max-w-sm'> Send your money swiftly worldwide, free from hidden fees and exchange rate markups
                                    </p>
                                </div>


                                <div className='flex py-4'>
                                    <ButtonWithIcon title='Open account' className="bg-[#bab9b9a8]" link='/request' />
                                </div>
                            </div>
                            <div className='hidden md:block ml-48 mt-14'>
                                <Image
                                    src={MobileBusiness}
                                    alt='mobile-business'
                                    height={800}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
