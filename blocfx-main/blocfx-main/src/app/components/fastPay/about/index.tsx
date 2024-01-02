import React from 'react'
import TeamCard from './team-card'
import { teamMembers } from '../../../../../data/mock-data'

export default function MeetOurTeam() {
    const MobileViewTeamList = () => {
        return (
            <div className='grid grid-cols-1 px-8  md:grid-cols-3 w-full  gap-8 md:hidden' >
                {teamMembers?.map((item, index) => (
                    <div key={index} className='sticky top-0 rounded-xl '>
                        <TeamCard
                            name={item?.name}
                            role={item?.role}
                            image={item?.image}
                            className={item?.className}
                        />
                    </div>
                ))}
            </div>
        )
    }

    const DesktopViewTeamList = () => {
        return (
            <div className='hidden grid-cols-1 px-8  md:grid-cols-3 w-full  gap-8 md:grid' >
                {teamMembers?.map((item, index) => (
                    <TeamCard
                        name={item?.name}
                        role={item?.role}
                        image={item?.image}
                        className={item?.className}
                        key={index}
                    />
                ))}
            </div>
        )
    }
    return (
        <div className='flex justify-center flex-col  items-center text-center   py-10 lg:py-20 '>
            <div className='flex justify-center flex-col gap-12 lg:gap-24 items-center text-center '>
                <div className='grid max-w-3xl space-y-5 px-10 md:px-0'>
                    <h1 className='text-3xl md:text-4xl font-cenios'> Meet our star team</h1>
                    <p className='font-aktifoa'>
                        Our team of financial expets is at your service, commited to delivering top noch guidance and solutions to help you make the most of your financial journey with Bloc Fx
                    </p>
                </div>


                <DesktopViewTeamList />
                <MobileViewTeamList />

            </div>
        </div>
    )
}
