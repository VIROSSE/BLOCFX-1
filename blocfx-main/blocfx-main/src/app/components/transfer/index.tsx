import React from 'react'

import { ButtonWithIcon } from '../ui/button'
import TransferImage from '../../../../public/banners/transfer.png'
import BgImage from '../../../../public/banners/transfer-bg.svg'
import MobileBgImage from '../../../../public/banners/mobile-global.png'
import MobileTransferImage from '../../../../public/banners/transfer-mobile.png'
import Image from 'next/image'

export default function TransferSection() {

    return (
        <div className="relative  h-screen bg-white">
            <Image
                src={BgImage}
                alt="transfers"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className='hidden md:block'
            />
            <Image
                src={MobileBgImage}
                alt="transfers"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className=' md:hidden'
            />
            <div className="absolute inset-0 flex items-center justify-end z-10 ">
                <div className="absolute inset-0 bg-gray-50 opacity-60 z-10"></div>
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24 ">
                    <div className='grid   justify-center  items-center w-full'>
                        <div className='flex justify-center  items-center w-full '>
                            <div className='hidden md:block '>
                                <Image
                                    src={TransferImage}
                                    alt='mobile-business'
                                    height={450}
                                    loading='lazy'
                                />
                            </div>
                            <div className='flex flex-col gap-10 md:gap-4 items-center md:items-start w-full justify-center max-w-lg md:-ml-20 mt-0 md:-mt-[12.5rem] px-0 md:px-10'>
                                <div className='grid  space-y-8 md:space-y-3 px-9 md:px-0 max-w-xl'>
                                    <h1 className='text-xl text-center md:text-left md:text-4xl font-cenios'> Send your money fast</h1>
                                    <p className='font-aktifoa-light leading-6 md:leading-8 text-sm md:text-base text-center md:text-left'> {`BlocFX Brings You Swift Solutions. No more waiting for days when sending money overseas. With our advanced technology and global network, we' ve made it possible for your funds to reach their destination in a matter of seconds. Say hello to efficiency and peace of mind in your money transfers!`}
                                    </p>
                                </div>

                                <div className=' xs:hidden py-5 flex w-full  items-end justify-end'>
                                    <Image
                                        src={MobileTransferImage}
                                        alt='mobile-business-transfer'
                                        height={280}
                                        loading='lazy'
                                    />
                                </div>

                                <div className='hidden xs:block md:hidden py-10'>
                                    <Image
                                        src={TransferImage}
                                        alt='mobile-business'
                                        height={256}
                                        loading='lazy'
                                    />
                                </div>

                                <div className='flex py-4 pt-10'>
                                    <ButtonWithIcon title='Open account' className="bg-[#bab9b9a8]" link='/request' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
