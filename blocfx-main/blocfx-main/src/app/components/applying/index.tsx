import React from 'react'

import { ButtonWithIcon } from '../ui/button'
import { applyingStep } from '../../../../utils/CONSTANTS'
import ApplyingItemCard from '../applying-item-card'
import MobileApply from '../../../../public/banners/applying-mobile.png'
import BgImage from '../../../../public/banners/bg-applying.jpg'
import MobileBgImage from '../../../../public/banners/mobile-applying.png'
import Image from 'next/image'

export default function ApplyingSection() {

    const DesktopView = () => {
        return (
            <div className="relative hidden md:block h-screen -mt-10 bg-black">
                <Image
                    src={BgImage}
                    alt="applying"
                    style={{ objectFit: 'cover' }}
                    fill
                    loading='lazy'
                />
                <div className="absolute inset-0 flex items-center justify-end z-10">
                    <div className="applying-gradient-background   w-[85%] h-full " />
                    <div className=" absolute z-20 inset-x-0   flex flex-col items-center justify-center text-white gap-24">
                        <div className='grid  space-y-44 px-9 md:px-0  max-w-7xl w-full'>
                            <div className='space-y-2 text-center -mt-[5.5rem]'>
                                <h1 className='text-3xl md:text-4xl font-cenios'>Applying for your BlocFx Account</h1>
                                <p className='font-aktifoa'> only takes 15 minutes </p>
                            </div>

                            <div className=' flex flex-col justify-end items-end w-full px-10 lg:px-0  gap-12'>
                                <div className='grid gap-6 '>
                                    {applyingStep?.map((item, index) => (
                                        <ApplyingItemCard
                                            key={index}
                                            step={item?.step}
                                            title={item?.title}
                                            description={item?.description}
                                        />
                                    ))}
                                </div>
                                <div className='max-w-sm font-cenios text-bold space-y-12'>
                                    <p>ENJOY THE EXPERIENCE OF SEAMLESS MONEY TRANSACTIONS!</p>
                                    <ButtonWithIcon title='Get Started' link="/request" />
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
            <div className="md:hidden  flex -mt-20 md:mb-0 ">
                <Image
                    src={MobileBgImage}
                    alt="applying"
                    style={{ objectFit: 'cover' }}
                    fill
                    loading='lazy'
                    className='-z-10 mb-48'
                />
                <div className="   flex flex-col items-center justify-center text-black ">
                    <div className='grid  space-y-3 px-10 text-center'>
                        <h1 className='text-3xl md:text-4xl font-cenios'>Applying for your BlocFx Account</h1>
                        <p className='font-aktifoa'> only takes 15 minutes </p>
                    </div>
                    <div className=' flex w-full p-20 xs:p-20 md:p-12'>
                        <Image
                            src={MobileApply}
                            alt='mobile-apply'
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
                        />
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
