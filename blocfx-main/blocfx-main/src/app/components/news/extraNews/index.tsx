import React from 'react'
import { extraNewsBlock } from '../../../../../utils/CONSTANTS'
import NewsItemCard from './news-item-card'
import ExtraNewsCard from './extra-news-card'
import Subscribe from '../../subscribe'
import { currentNewsBlock } from '../../../../../data/mock-data'

export default function ExtraNews() {
    return (
        <div className='flex justify-center flex-col  items-center text-center mt-10 lg:mt-0  pb-20   lg:py-20'>
            <div className='flex justify-center flex-col gap-16 items-center text-center px-4'>
                <div className='grid max-w-xl space-y-5 md:px-0 '>
                    <h1 className='text-4xl font-cenios'>News</h1>
                </div>

                {currentNewsBlock.map((item, index) => (
                    <NewsItemCard
                        title={item?.title}
                        des={item?.shortDescription}
                        image={item?.image}
                        key={index}
                        newsId={item?.id}
                    />
                ))}



                <div className=' flex h-full w-full  md:max-w-7xl flex-wrap gap-4'>
                    {currentNewsBlock.map((item, index) => (
                        <ExtraNewsCard
                            image={item?.image}
                            title={item?.title}
                            newsId={item?.id}
                            key={index}
                        />
                    ))}


                </div>
                <Subscribe />
            </div>
        </div>

    )
}
