import React from 'react'
import Image from "next/image";
import BgImage from '../../../../public/banners/login-bg.png'
import Logo from '../../../../public/icons/register-logo.svg'
import LoginForm from '@/app/components/auth/login/login-form';

export default function LoginPage() {

    return (
        <div className='bg-black'>

            <div className=' h-20 bg-black w-full  text-white absolute top-0 -z-20' />
            <div className='relative flex justify-center flex-col  items-center text-center   h-screen'>
                <Image
                    src={BgImage}
                    alt="transfers"
                    style={{ objectFit: 'cover' }}
                    fill
                    loading='lazy'
                    className='hidden md:block'
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
                        <div className='flex bg-black  items-center justify-center px-5 md:px-0 '>
                            <div className='hidden md:flex w-full h-full justify-center items-center gap-20 flex-col'>
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    loading='lazy'
                                    height={300}
                                    className='-mr-3'
                                />
                            </div>
                            <div className=' w-full bg-white p-10  md:h-fit py-28 '>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
