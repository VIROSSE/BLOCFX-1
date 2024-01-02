import React from 'react'
import Image from 'next/image'

import Whatsapp from '../../../../../public/icons/whatsapp.svg'
import BgImage from '../../../../../public/banners/contact.jpg'
import Phone from '../../../../../public/icons/call.svg'
import Link from 'next/link'
import { cn } from '../../../../../lib/utils'
import { buttonVariants } from '../../ui/button'

export default function GetInTouch() {
    return (
        <div className="relative  h-screen ">
            <Image
                src={BgImage}
                alt="contact us"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0%"
                loading='lazy'
            />
            <div className="absolute inset-0 flex items-center justify-end z-10">
                <div className="absolute inset-0 contact_us-gradient-background hidden lg:block  lg:w-[45%]"></div>
                <div className="absolute inset-0 mobile-vip-gradient-background  lg:hidden" ></div>
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24">
                    <div className='grid  space-y-10 px-5 md:px-20 w-full'>
                        <div className="mt-[8rem] md:mt-40 md:py-0 px-0 md:px-32 xl:px-32 w-full flex flex-col  ">
                            <div className='flex flex-col gap-10'>
                                <div className='flex  flex-col gap-4'>
                                    <div className='flex items-center gap-3 text-black text-4xl'>
                                        <h1 className='font-cenios'> Get in touch</h1>
                                    </div>
                                    <p className=' text-black text-lg leading-7 max-w-lg font-aktifoa'>
                                        Want to get in touch? We’d love to hear from you. Here’s how you can reach us
                                    </p>
                                </div>
                                <div className=' relative border rounded-2xl max-w-sm p-4 pb-14 border-black'>
                                    <div className='flex  flex-col gap-2'>
                                        <div className='flex items-center gap-3 text-black text-xl font-bold'>
                                            <p className='font-aktifoa-bold'> WhatsApp us </p>
                                        </div>
                                        <p className=' text-gray-800 text-lg leading-6 max-w-lg font-aktifoa'>
                                            Chat with one of our payment experts. Will recommend the right solution for you.
                                        </p>
                                    </div>
                                    <div className='absolute -bottom-6'>
                                        <Link
                                            href="https://wa.me/447888865832"
                                            className={cn(
                                                buttonVariants({ variant: "default", size: "lg" }),
                                                "gap-2 text-bold text-lg h-[3.2rem] px-[0.23rem] bg-[#CDCCCC]"
                                            )}
                                        >
                                            <Image
                                                src={Whatsapp}
                                                alt="Background"
                                                height={50}
                                                className='rounded-full z-50'
                                                loading='lazy'
                                                style={{ objectFit: 'cover' }}
                                                objectPosition='center'
                                            />

                                            <p className='pr-8'>Chat on Whatsapp</p>
                                        </Link>
                                    </div>
                                </div>

                                <div className='relative border rounded-2xl max-w-sm p-4 pb-14 border-black mt-2'>
                                    <div className='flex  flex-col gap-2'>
                                        <div className='flex items-center gap-3 text-black text-xl font-bold'>
                                            <p className='font-aktifoa-bold'> Request a call back </p>
                                        </div>
                                        <p className=' text-gray-800 text-lg leading-6 max-w-lg font-aktifoa'>
                                            Leave your details, and we will call you back within 30 minutes
                                        </p>
                                    </div>
                                    <div className='absolute -bottom-6'>
                                        <Link
                                            href='tel:+447888865832'
                                            className={cn(
                                                buttonVariants({ variant: "default", size: "lg" }),
                                                "gap-2 text-bold text-lg h-[3.2rem] px-[0.23rem] bg-[#CDCCCC]"
                                            )}
                                        >
                                            <Image
                                                src={Phone}
                                                alt="Phone"
                                                height={50}
                                                className='rounded-full z-50'
                                                loading='lazy'
                                                style={{ objectFit: 'cover' }}
                                                objectPosition='center'
                                            />
                                            <p className='pr-8'>Request</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
