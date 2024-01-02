import React from 'react'

interface ListItemProps { title: string, description: string }

export default function ListItem() {
    const Item = ({ title, description }: ListItemProps) => {
        return (
            <div className='flex items-baseline gap-3 text-white'>
                <div className='hidden lg:flex h-3 w-3 rounded-full gradient-background' />
                <li>
                    <h3 className='inline font-bold text-xs md:text-base lg:text-lg'>{title}</h3>
                    <p className='text-xs md:text-base lg:text-lg'>{description}</p>
                </li>
            </div>
        );
    };
    const List = () => {
        const listData = [
            {
                title: 'Customer Dedication:',
                description: 'Building One on One Relationships is Key'
            },
            {
                title: 'Seamless Onboarding:',
                description: 'Setting Ethical, Straightforward and Swift Industry Stan- dards'
            },
            {
                title: 'Economic Empowerment:',
                description: 'Lowering Costs for Cross Border Investment that empower nations to invest in their businesses and people'
            },
            {
                title: 'Efficiency:',
                description: 'Continuously seeking cost effective solutions to benefit customers growth and stability'
            },
            {
                title: 'Local Engagement:',
                description: 'Investing in communities by establishing local offices and branches, ensuring accessibility and strong community connections.'
            },
        ];

        return (
            <ul className='flex gap-6 flex-col'>
                {listData.map((item, index) => (
                    <Item key={index} title={item.title} description={item.description} />
                ))}
            </ul>
        );
    };
    return <List />
}
