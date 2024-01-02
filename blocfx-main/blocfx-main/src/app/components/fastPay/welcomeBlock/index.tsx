import React from 'react'
import { ButtonWithIcon } from '../../ui/button'
import WelcomeBlockImage from '../../../../../public/icons/welcome-block.svg'
import BgImage from '../../../../../public/banners/debit-vector.svg'

import Image from 'next/image'
import WelcomeBlockItemCard from './welcome-block-item-card'
import { welcomeBlock } from '../../../../../utils/CONSTANTS'

export default function WelcomeBlock() {
    return (
        <div className='relative flex flex-col items-center justify-center '>
            <Image
                src={BgImage}
                alt="debit"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className='translate-x-0 lg:translate-x-1'
            />
            <div className='  flex flex-col w-full max-w-7xl'>

                <div className="   text-black z-40">
                    <div className='flex justify-between  flex-col  items-center text-center py-10 md:py-24 px-7 gap-14 lg:gap-40 xl:px-10 '>
                        <div className='grid  md:max-w-xl space-y-2 md:space-y-5 px-0 md:px-0'>
                            <h1 className='text-3xl md:text-4xl font-cenios'> Welcome to BlocFx</h1>
                            <p className='font-aktifoa text-xs sm:text-base'>
                                Where we revolutionize the landscape of global money transfers
                            </p>
                        </div>

                        <div className='flex w-full items-center justify-center gap-10 md:gap-24 flex-wrap md:flex-nowrap' >
                            <div className='flex flex-col w-full gap-5 md:gap-16'>
                                <WelcomeBlockItemCard
                                    description={welcomeBlock.block1}
                                />
                                <div className='h-[0.01rem] w-full bg-black' />
                                <WelcomeBlockItemCard
                                    description={welcomeBlock.block2}
                                />
                            </div>

                            <div className='flex  '>
                                <Image
                                    src={WelcomeBlockImage}
                                    alt='logo block'
                                    height={550}
                                    className='hidden md:block'
                                    loading='lazy'
                                />
                                <Image
                                    src={WelcomeBlockImage}
                                    alt='logo block'
                                    height={180}
                                    className='md:hidden'
                                    loading='lazy'
                                />
                            </div>

                            <div className='flex flex-col w-full gap-5 md:gap-16'>
                                <WelcomeBlockItemCard
                                    description={welcomeBlock.block3}
                                />
                                <div className='h-[0.01rem] w-full bg-black' />
                                <WelcomeBlockItemCard
                                    description={welcomeBlock.block4}
                                />
                            </div>
                        </div>

                        <div className='flex'>
                            <ButtonWithIcon title='Open account' link='/request' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
