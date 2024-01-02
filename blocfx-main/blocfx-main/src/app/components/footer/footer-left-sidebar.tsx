import React from 'react'
import Logo from '../logo'
import Image from 'next/image'

import PhoneImage from '../../../../public/icons/phone.svg'
import MailImage from '../../../../public/icons/mail.svg'
import MapImage from '../../../../public/icons/map.svg'
import Link from 'next/link'

export default function FooterLeftSidebar() {
    return (
        <div className='flex flex-col gap-5'>
            <Logo />
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
                <div className='flex items-center gap-2'>
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
                <div className='flex items-center gap-2'>
                    <Image
                        src={MapImage}
                        alt='map'
                        height={15}
                        loading='lazy'
                    />
                    <p className='font-cenios text-xs px-2'>71-75 Shelton Street, Greater London, WC2H 9JQ, United Kingdom</p>
                </div>
            </div>
        </div>
    )
}
