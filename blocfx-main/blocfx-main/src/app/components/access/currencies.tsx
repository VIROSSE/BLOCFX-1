import Image from 'next/image'
import React from 'react'

import CurrencyImage1 from '../../../../public/icons/currency1.svg'
import CurrencyImage2 from '../../../../public/icons/currency2.svg'
import CurrencyImage3 from '../../../../public/icons/currency3.svg'
import CurrencyImage4 from '../../../../public/icons/currency4.svg'
import CurrencyImage5 from '../../../../public/icons/currency5.svg'
import CurrencyImage6 from '../../../../public/icons/currency6.svg'
import CurrencyImage7 from '../../../../public/icons/currency7.svg'
import CurrencyImage8 from '../../../../public/icons/currency8.svg'
import CurrencyImage9 from '../../../../public/icons/currency9.svg'
import CurrencyImage10 from '../../../../public/icons/currency10.svg'
import CurrencyImage11 from '../../../../public/icons/currency11.svg'
import CurrencyImage12 from '../../../../public/icons/currency12.svg'
import CurrencyImage13 from '../../../../public/icons/currency13.svg'

export default function Currencies() {

    const DesktopView = () => {
        return (
            <div className='hidden lg:flex  gap-6 flex-wrap items-center justify-center'>
                <Image
                    src={CurrencyImage1}
                    alt='CurrencyImage1'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage2}
                    alt='CurrencyImage2'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage3}
                    alt='CurrencyImage3'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage4}
                    alt='CurrencyImage4'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage5}
                    alt='CurrencyImage5'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage6}
                    alt='CurrencyImage6'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage7}
                    alt='CurrencyImage7'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage8}
                    alt='CurrencyImage8'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage9}
                    alt='CurrencyImage9'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage10}
                    alt='CurrencyImage10'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage11}
                    alt='CurrencyImage11'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage12}
                    alt='CurrencyImage12'
                    height={50}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage13}
                    alt='CurrencyImage13'
                    height={50}
                    loading='lazy'
                />
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className='lg:hidden flex gap-4  flex-wrap items-center justify-center px-10'>
                <Image
                    src={CurrencyImage1}
                    alt='CurrencyImage1'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage2}
                    alt='CurrencyImage2'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage3}
                    alt='CurrencyImage3'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage4}
                    alt='CurrencyImage4'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage5}
                    alt='CurrencyImage5'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage6}
                    alt='CurrencyImage6'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage7}
                    alt='CurrencyImage7'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage8}
                    alt='CurrencyImage8'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage9}
                    alt='CurrencyImage9'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage10}
                    alt='CurrencyImage10'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage11}
                    alt='CurrencyImage11'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage12}
                    alt='CurrencyImage12'
                    height={40}
                    loading='lazy'
                />
                <Image
                    src={CurrencyImage13}
                    alt='CurrencyImage13'
                    height={40}
                    loading='lazy'
                />
            </div>
        )
    }

    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    )
}
