import React from 'react'
import Logo from '../logo'
import Image from 'next/image'

import PhoneImage from '../../../../public/icons/phone.svg'
import MailImage from '../../../../public/icons/mail.svg'
import MapImage from '../../../../public/icons/map.svg'
import MobileLogo from '../../../../public/icons/mobile-logo.png'
import { company, legal, services } from '../../../../utils/CONSTANTS'
import FooterItem from './items-card'
import FooterItemFollowUs from './footer-item-followus'
import Link from 'next/link'

export default function FooterMobileView() {
    return (
        <div className='bg-black text-white  px-10 py-8 items-start flex justify-between  '>
            <div className='flex flex-col gap-8 w-full'>
                <Logo className='px-0' />

                <div className='flex justify-between w-full flex-col gap-4'>
                    {services?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {company?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {legal?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}


                </div>
            </div>

            <div className='mt-[4.5rem] space-y-9 flex flex-col w-full'>
                <FooterItemFollowUs />
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={PhoneImage}
                            alt='phone call'
                            height={16}
                            loading='lazy'
                        />
                        <Link href='tel:+447888865832' className='font-cenios text-xs px-1'>
                            +44 7888 865832
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 w-full'>

                        <Image
                            src={MailImage}
                            alt='mail'
                            height={13}
                            loading='lazy'
                        />


                        <Link href='mailto:contact@blocfx.eu' className='font-cenios text-xs px-1'>
                            Contact@blocfx.eu
                        </Link>

                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <div className='flex w-5'>
                            <Image
                                src={MapImage}
                                alt='map'
                                height={15}
                                loading='lazy'
                            />
                        </div>
                        <div className='flex w-full'>
                            <p className='font-cenios text-xs '>71-75 Shelton Street, Greater London, WC2H 9JQ, United Kingdom</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
