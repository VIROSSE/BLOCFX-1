import React from 'react'
import { features } from '../../../../utils/CONSTANTS'
import FeaturesCard from '../features-card'
import { cn } from '../../../../lib/utils'

interface FastPaySectionProps {
    className?: string
}


export default function FastPaySection({ className }: FastPaySectionProps) {
    return (
        <div className={cn('isolate flex justify-center flex-col  text-center    py-14 bg-white ', className)}>
            <div className='flex justify-center flex-col gap-7 items-center text-center'>
                <div className='grid  md:max-w-xl space-y-5 px-9 md:px-0'>
                    <h1 className='text-3xl md:text-4xl  font-cenios'> Why choose BlocFx ?</h1>
                    <p className='font-aktifoa'>
                        With us, you can confidently send and receive money securely, with
                        no hidden costs, all delivered swiftly and seamlessly worldwide
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:w-full ' >
                    {features?.map((item, index) => (
                        <FeaturesCard
                            image={item?.icon}
                            link={item?.link}
                            title={item?.title}
                            description={item?.description}
                            key={index}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
