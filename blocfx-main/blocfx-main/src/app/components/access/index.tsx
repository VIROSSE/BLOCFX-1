import React from 'react'

import Currencies from './currencies'

export default function AccessSection() {



    return (
        <div className=" relative h-screen bg-black">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-50 lg:inset-56"
                style={{ backgroundImage: "url('/banners/global.svg')" }}
            ></div>


            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: "url('/banners/global-vector.svg')", }}
            ></div>


            <div className=" absolute inset-x-0 py-20 flex flex-col items-center justify-between h-screen text-white gap-24">
                <div className='grid  space-y-3 px-9 md:px-9 text-center'>
                    <h1 className='text-3xl md:text-4xl font-cenios'>Access our competitive Bank Beating FX rates </h1>
                    <h1 className='text-3xl md:text-4xl font-cenios'>in 65+ currencies</h1>
                </div>

                <Currencies />

            </div>
        </div>


    )
}
