import React from 'react'
import { currentNewsBlock } from '../../../../../data/mock-data';
import Image from 'next/image';
import SocialAndCommunication from './social-and-communication';
import RelatedNewsCard from './related-news-card';
import CommentBlock from './comment-block';
import { cn } from '../../../../../lib/utils';

interface CurrentNewsSectionProps {
    newsId: string
}

export default function CurrentNewsSection({ newsId }: CurrentNewsSectionProps) {

    const getCurrentNewsData = currentNewsBlock?.filter((item) => item.id === newsId)
    const getRestOfNewsData = currentNewsBlock?.filter((item) => item.id !== newsId)

    return (
        <div className='space-y-10'>
            {getCurrentNewsData?.map((item, index) => (
                <div className='space-y-10 mb-20' key={index}>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-aktifoa'>{item.header}</h1>
                        <p className='font-aktifoa text-lg'> {item.title}</p>
                        <p className='font-aktifoa'> {item.shortDescription}</p>
                        <div className='md:flex h-[40rem] relative hidden '>
                            <Image
                                src={item?.image}
                                alt={item?.title}
                                style={{ objectFit: 'cover' }}
                                fill
                                loading='lazy'
                                objectPosition="50% 0%"
                            />
                        </div>
                        <div className='md:hidden  relative  '>
                            <Image
                                src={item?.image}
                                alt={item?.title}
                                style={{ objectFit: 'cover' }}
                                loading='lazy'
                            />
                        </div>
                        <div className='font-aktifoa space-y-5'>
                            {item?.description.map((info, index) => (
                                <div key={index}>
                                    <p className={cn('text-lg', info?.header ? 'pt-6' : 'pt-0')}>{info?.header}</p>
                                    <div>
                                        <p>{info?.title}</p>
                                        <p>{info?.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SocialAndCommunication views={item?.views} comments={item?.comments} />
                </div>
            ))}

            <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                {getRestOfNewsData?.map((item, index) => (
                    <RelatedNewsCard
                        key={index}
                        image={item?.image}
                        title={item?.title}
                        views={item?.views}
                        comments={item?.comments}
                        newsId={item?.id}
                    />
                ))}
            </div>

            <CommentBlock />



        </div>
    )
}
