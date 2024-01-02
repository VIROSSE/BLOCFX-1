import React from 'react'

import { WhatsappButton } from '../ui/button'
import BgImage from '../../../../public/banners/vip-bg.jpg'
import MobileBgImage from '../../../../public/banners/mobile-vip-bg.png'
import Image from 'next/image'


export default function VipSection() {

    const DesktopView = () => {
        return (
            <div className="relative hidden xs:block  h-screen bg-white">
                <Image
                    src={BgImage}
                    alt="vip section"
                    style={{ objectFit: 'cover' }}
                    fill
                    loading='lazy'
                />
                <div className="absolute inset-0 flex items-center justify-end z-10">
                    <div className="absolute inset-0 vip-gradient-background  hidden md:block" ></div>
                    <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24 justify-end  md:h-auto">
                        <div className='grid  space-y-10 px-5 md:px-20  w-full '>
                            <div className='flex flex-col gap-4 items-center  md:items-start mt-96 md:mt-0'>
                                <div className='grid  space-y-3 px-9  md:px-0 max-w-xl'>
                                    <h1 className='text-3xl text-center md:text-left md:text-4xl font-cenios'> Enjoy our Premium
                                        VIP Service</h1>
                                    <p className='font-aktifoa-light leading-8 text-center md:text-left'>
                                        Celebrating You as a Valued Client, We re Committed to Offering an Exceptional Experience.
                                        That s Why You ll Have a Dedicated Account Manager to Navigate New Payment Routes and Ensure Your Success.
                                    </p>
                                </div>
                                <div className='flex py-4'>
                                    <WhatsappButton className="bg-[#bab9b9a8]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="grid xs:hidden  ">
                <Image
                    src={MobileBgImage}
                    alt="Mobile vip section"
                    style={{ objectFit: 'cover' }}
                    loading='lazy'
                />
                <div className='grid   px-5 md:px-20  w-full pb-10'>
                    <div className='flex flex-col gap-4 items-center  md:items-start -mt-8'>
                        <div className='grid  space-y-3 px-9  md:px-0 max-w-xl'>
                            <div>
                                <h1 className='text-xl text-center md:text-left md:text-4xl font-cenios'> Enjoy our Premium</h1>
                                <h1 className='text-xl text-center md:text-left md:text-4xl font-cenios'>VIP Service</h1>
                            </div>
                            <p className='font-aktifoa-light leading-6  md:leading-8 text-sm text-center md:text-left'>
                                Celebrating You as a Valued Client, We re Committed to Offering an Exceptional Experience.
                                That s Why You ll Have a Dedicated Account Manager to Navigate New Payment Routes and Ensure Your Success.
                            </p>
                        </div>
                        <div className='flex py-4'>
                            <WhatsappButton className="bg-[#bab9b9a8]" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    )
}
