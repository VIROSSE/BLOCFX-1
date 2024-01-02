import React from 'react'
import IdeaIcon from '../../../../../public/icons/idea.png'
import VisionBg from '../../../../../public/banners/vision-bg.jpg'
import MobileVisionBg from '../../../../../public/banners/mobile-vision-bg.jpg'
import Image from 'next/image'
import { visionFeature } from '../../../../../utils/CONSTANTS'
import VisionFeatureCard from './vision-feature-card'

export default function OurVision() {

    const featureOne = visionFeature.featureOne
    const featureTwo = visionFeature.featureTwo
    const featureThree = visionFeature.featureThree
    const featureFour = visionFeature.featureFour

    return (
        <div className='flex flex-col items-center justify-center  -mt-1 lg:mt-0'>
            <div className='flex flex-col w-full '>
                <div className='flex flex-col lg:flex-row w-full justify-center items-center h-full relative overflow-hidden'>
                    <div className='flex w-full bg-[#010202] justify-center items-center flex-col text-white'>
                        <div className='flex flex-col max-w-md items-center justify-center gap-4 py-48 lg:py-0 md:h-screen text-center'>
                            <Image
                                src={IdeaIcon}
                                alt="vision"
                                height={100}
                                loading='lazy'
                            />
                            <h1 className='text-3xl md:text-4xl font-cenios'>Our Vision</h1>
                            <p className='font-aktifoa-light'>
                                Revolutionizing global business transfers with personal connections for seamless, secure transactions worldwide.
                            </p>
                        </div>
                    </div>

                    <div className='hidden lg:flex h-full w-full -z-50'>
                        <Image
                            src={VisionBg}
                            alt='vision background'
                            style={{ transform: ' translateX(700px)', objectFit: 'cover' }}
                            fill
                            loading='lazy'
                            objectPosition="0% 30%"
                        />
                    </div>
                    <div className=' lg:hidden h-full w-full -z-50'>
                        <Image
                            src={MobileVisionBg}
                            alt='vision background'
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
                            objectPosition="90% 0%"
                        />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row w-full justify-center items-center h-full  '>
                    <div className='flex w-full bg-[#F3F3F3] justify-center items-center py-20 px-10 text-center'>
                        <div className='max-w-xs flex flex-col items-center justify-center space-y-28'>

                            <VisionFeatureCard
                                image={featureOne?.image}
                                title={featureOne?.title}
                                des={featureOne?.des}
                            />

                            <VisionFeatureCard
                                image={featureTwo?.image}
                                title={featureTwo?.title}
                                des={featureTwo?.des}
                            />

                        </div>
                    </div>
                    <div className='flex w-full  justify-center items-center py-12 px-10 text-center'>
                        <div className='max-w-sm flex flex-col items-center justify-center space-y-28'>

                            <VisionFeatureCard
                                image={featureThree?.image}
                                title={featureThree?.title}
                                des={featureThree?.des}
                            />

                            <VisionFeatureCard
                                image={featureFour?.image}
                                title={featureFour?.title}
                                des={featureFour?.des}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
