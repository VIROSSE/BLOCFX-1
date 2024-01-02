import React from 'react'

import { Button } from '../../ui/button'
import { newsBlock } from '../../../../../utils/CONSTANTS'
import NewsItemCard from './news-item-card'
import Subscribe from '../../subscribe'

export default function ResourceHub() {
    return (
        <div className='flex justify-center flex-col  items-center text-center  pb-20 pt-10 lg:py-20'>
            <div className='flex justify-center flex-col gap-16 items-center text-center px-4'>
                <div className='grid max-w-xl space-y-5 md:px-0'>
                    <h1 className='text-4xl font-cenios'> Welcome to Our Resources Hub!</h1>
                    <p className='font-aktifoa-light'>
                        Dive into our world of news, blogs, and event updates
                        stay informed and inspired with Bloc FX
                    </p>
                </div>

                {newsBlock.map((item, index) => (
                    <NewsItemCard
                        date={item?.data}
                        title={item?.title}
                        des={item?.des}
                        image={item?.image}
                        key={index}
                    />
                ))}

                <Subscribe />

            </div>
        </div>

    )
}
