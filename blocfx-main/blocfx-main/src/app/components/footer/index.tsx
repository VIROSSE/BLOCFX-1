
import React from 'react'

import { company, legal, services } from '../../../../utils/CONSTANTS'

import FooterItem from './items-card'
import FooterLeftSidebar from './footer-left-sidebar'
import FooterMobileView from './mobile-view'
import FooterItemFollowUs from './footer-item-followus'


export default function Footer() {

    return (
        <div className='grid z-50 absolute w-full'>
            <div className='bg-black text-white h-48 px-14 lg:px-4 xl:px-20 py-8 items-center lg:flex justify-between hidden'>
                <div className='flex flex-col gap-2 w-full'>
                    <FooterLeftSidebar />
                </div>

                <div className='flex justify-between w-full'>
                    {services?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {company?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {legal?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    <FooterItemFollowUs />
                </div>

            </div>

            <div className='lg:hidden'>
                <FooterMobileView />
            </div>
        </div>
    )
}
