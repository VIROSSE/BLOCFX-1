import Image from 'next/image'
import React from 'react'
import XDarkIcon from '../../../../../public/icons/x-dark.svg'
import YoutubeDarkIcon from '../../../../../public/icons/youtube-dark.svg'
import LinkedinDarkIcon from '../../../../../public/icons/linkindin-dark.svg'
import HeartIcon from '../../../../../public/icons/heart.svg'
import { Button } from '../../ui/button'
import EyeIcon from '../../../../../public/icons/eye.svg'
import CommunicateIcon from '../../../../../public/icons/communicate.svg'

interface SocialAndCommunicationProps {
    views: number,
    comments: number,
}

export default function SocialAndCommunication({ views, comments }: SocialAndCommunicationProps) {
    return (
        <div className='flex w-full justify-between items-center font-aktifoa '>
            <div className='flex w-full gap-3 md:gap-8 items-center'>
                <Image
                    src={XDarkIcon}
                    alt='x-social'
                    height={30}
                />
                <Image
                    src={LinkedinDarkIcon}
                    alt='linkedin-social'
                    height={30}
                />
                <Image
                    src={YoutubeDarkIcon}
                    alt='youtube-social'
                    height={30}
                />

            </div>
            <div className='flex w-full gap-5 md:gap-8 items-center justify-end'>
                <div className='hidden md:flex items-center gap-8 '>
                    <p>{views} views</p>
                    <p>{comments} comments</p>
                </div>

                <div className='flex items-center gap-5 md:hidden'>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={EyeIcon}
                            alt='view'
                            height={20}
                        />
                        <p>{views}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={CommunicateIcon}
                            alt='communicate'
                            height={20}
                        />
                        <p>{comments}</p>
                    </div>
                </div>
                <Button className='bg-transparent p-0'>
                    <Image
                        src={HeartIcon}
                        alt='like-social'
                        height={20}
                    />
                </Button>
            </div>
        </div>
    )
}
