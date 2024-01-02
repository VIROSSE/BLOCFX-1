import React from 'react'
import { Button } from './ui/button'
import SubscribeImage from '../../../public/icons/subscribe.svg'
import Image from 'next/image'

export default function Subscribe() {

    const MobileView = () => {
        return (
            <div className='relative w-full bg-[#CDCCCC] rounded-xl items-center justify-center md:hidden'>
                <div className='flex gap-5 w-full   h-full rounded-md py-5 flex-col items-center justify-center'>
                    <p className='font-bold pl-4 flex font-aktifoa-bold'>Sign up to our Newsletter</p>
                    <div className='flex w-full px-10'>
                        <input placeholder='Enter your email' className='h-8 lg:h-8 font-aktifoa rounded-full w-full  text-xs p-3' />
                    </div>


                    <div className='flex -mb-10  w-full items-center justify-center'>
                        <Button className='relative flex justify-center items-center pr-0 bg-transparent' >
                            <div>
                                <Image
                                    src={SubscribeImage}
                                    alt='subscribe'
                                    className='z-10'
                                    loading='lazy'
                                />
                            </div>
                            <p className='font-bold pl-4 flex   font-aktifoa-bold text-white absolute z-50'>
                                Subscribe
                            </p>
                        </Button>
                    </div>

                </div>

            </div>
        )
    }


    const DesktopView = () => {
        return (
            <div className='hidden md:flex items-center gap-5  bg-[#CDCCCC] h-14 rounded-full'>
                <p className='font-bold pl-4 hidden lg:flex font-aktifoa-bold'>Sign up to our Newsletter</p>
                <input placeholder='Enter your email' className='h-10 lg:h-8 font-aktifoa rounded-full w-48 lg:w-80 p-3 text-xs ml-3' />


                <Button className='relative flex justify-center items-center pr-0 bg-transparent' >
                    <div>
                        <Image
                            src={SubscribeImage}
                            alt='subscribe'
                            className='z-10'
                            loading='lazy'
                        />
                    </div>
                    <p className='font-bold pl-4 flex   font-aktifoa-bold text-white absolute z-50'>
                        Subscribe
                    </p>
                </Button>

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
