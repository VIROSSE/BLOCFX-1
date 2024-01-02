import React from 'react'
import ResourceHub from '../components/news/resourceHub'
import ExtraNews from '../components/news/extraNews'

export default function NewsPage() {
    return (
        <div>
            <div className=' h-20 bg-black w-full  text-white absolute top-0 -z-20' />
            {/* <ResourceHub /> */}
            <ExtraNews />
        </div>
    )
}
