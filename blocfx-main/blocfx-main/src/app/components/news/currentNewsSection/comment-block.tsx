import React from 'react'

export default function CommentBlock() {
    return (
        <div className='gird border font-aktifoa p-8 space-y-5 justify-center'>
            <p className='pl-1'>Comments</p>
            <input
                placeholder='Write a comment...'
                className='w-full h-14 border rounded-full px-5'
            />
        </div >
    )
}
