import React from 'react'
import WelcomeBlock from '../components/fastPay/welcomeBlock'
import OurVision from '../components/fastPay/ourVision'
import MeetOurTeam from '../components/fastPay/about'

export default function AboutUsPage() {
    return (
        <div>
            <div className=' h-20 bg-black w-full  text-white absolute top-0 -z-20' />
            <WelcomeBlock />
            <OurVision />
            <MeetOurTeam />
        </div>
    )
}
