import React from 'react'

import { ButtonWithIcon } from '../ui/button'
import DebitCardImage from '../../../../public/banners/silver-cards.svg'
import Debit65Image from '../../../../public/icons/debit-65.svg'
import Debit115Image from '../../../../public/icons/debit-115.svg'
import BgImage from '../../../../public/banners/debit-vector.svg'
import Image from 'next/image'
import DebitItemCard from '../debit-item-card'

const debitCard = [
    {
        image: Debit65Image,
        title: "currencies",
        description: <p>
            At BlocFx , we understand the need for small businesses to have QUICK and CONVENIENT access to their funds. Thats why we provide you with a debit cards that ensure instant access to your money, anytime and anywhere.
        </p>
    },
    {
        image: Debit115Image,
        title: "countries",
        description: <div className='space-y-5'>
            <p>
                With BlocFx , you can enjoy the ease and flexibility of managing your finances efficiently, empowering your business to thrive with seamless and secure money transfers.
            </p>
            <p>
                Our partners are Mastercard, Visa and ...
            </p>
        </div>
    }
]

export default function DebitCardSection() {

    return (
        <div className="relative  h-screen bg-black">
            <Image
                src={BgImage}
                alt="debit card"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
            />
            <div className="absolute inset-0 flex items-center justify-end z-10">
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-white gap-24 justify-end  md:h-auto">
                    <div className='grid  space-y-10   w-full '>
                        <div className='flex flex-col lg:flex-row justify-center xl:gap-40 lg:justify-between items-center lg:pl-44 lg:pr-28 m-auto '>
                            <div className='flex flex-col gap-10 items-center lg:items-start'>
                                <div className='grid  space-y-2 px-9  lg:px-0 max-w-xl'>
                                    <h1 className='text-3xl text-center lg:text-left lg:text-4xl font-cenios'>Funds at Your Fingertips</h1>
                                    <p className='font-aktifoa-light text-center lg:text-left'> BlocFx Debit Cards for Quick and EasyAccess
                                    </p>
                                </div>

                                <div className='flex px-8 lg:px-0 gap-8 lg:flex-col'>
                                    {debitCard?.map((item, index) => (
                                        <DebitItemCard title={item?.title} description={item?.description} image={item?.image} key={index} />
                                    ))}
                                </div>


                                <div className=' py-4 hidden lg:flex'>
                                    <ButtonWithIcon title='Request now' className="bg-[#bab9b9a8]" link='/request' />
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <Image
                                    src={DebitCardImage}
                                    alt='DebitCardImage'
                                    style={{ objectFit: 'cover' }}
                                    height={800}
                                    loading='lazy'
                                />
                            </div>
                            <div className='lg:hidden -mb-10'>
                                <Image
                                    src={DebitCardImage}
                                    alt='DebitCardImage'
                                    height={330}
                                    style={{ objectFit: 'cover' }}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
