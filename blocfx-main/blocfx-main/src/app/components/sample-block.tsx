import React from 'react'

export default function SampleBlock() {
    return (
        <div className=' flex flex-col items-center justify-center bg-red-300 '>
            <div className='flex flex-col w-full max-w-7xl'>
                <div className='flex w-full justify-center items-center h-full'>
                    <div className='flex w-full bg-yellow-100 justify-center items-center'>
                        1
                    </div>
                    <div className='flex w-full bg-red-100 justify-center items-center'>2</div>
                </div>
                <div className='flex w-full justify-center items-center h-full'>
                    <div className='flex w-full bg-green-100 justify-center items-center'>3</div>
                    <div className='flex w-full bg-orange-100 justify-center items-center'>4</div>
                </div>
            </div>
        </div>
    )
}
