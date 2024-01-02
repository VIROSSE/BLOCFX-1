import React from 'react'
import Image from "next/image";
import BgImage from '../../../../public/banners/login-bg.png'
import Logo from '../../../../public/icons/register-logo.svg'
import RequestForm from '../../components/auth/request/request-form';

export default function RequestPage() {

    const DesktopView = () => {
        return (
            <div className='hidden md:block'>
                <div className=' h-20 bg-black w-full  text-white absolute top-0 -z-20' />
                <div className='relative flex justify-center flex-col  items-center text-center   h-screen'>
                    <Image
                        src={BgImage}
                        alt="transfers"
                        style={{ objectFit: 'cover' }}
                        fill
                        loading='lazy'
                    />
                    <Image
                        src={BgImage}
                        alt="transfers"
                        style={{ objectFit: 'cover' }}
                        fill
                        loading='lazy'
                        className=' md:hidden'
                    />

                    <div className="absolute inset-0 flex items-center justify-end z-10 p-10">

                        <div className=" absolute z-20 inset-x-0 items-center justify-center object-center  max-w-7xl m-auto">
                            <div className='flex bg-black  items-center justify-center '>
                                <div className='hidden md:flex w-full h-full justify-center items-center gap-20 flex-col'>
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        loading='lazy'
                                        height={300}
                                        className='-mr-3'
                                    />
                                    <p className='text-2xl text-white'>Welcome to BlocFx</p>
                                </div>
                                <div className=' w-full bg-white p-10 h-fit '>
                                    <RequestForm />
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
            <div className='md:hidden w-full bg-white p-10 h-fit '>
                <RequestForm />
            </div>
        )
    }

    return (
        <div className='bg-black'>
            <DesktopView />
            <MobileView />
        </div>
    )
}
