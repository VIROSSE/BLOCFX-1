"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { MainNavItem } from '../../../types/type'
import Logo from './logo'
import { MobileNav } from './mobile-nav'
import { cn } from '../../../lib/utils'
import { Button, buttonVariants } from './ui/button'
import Image from 'next/image'
import LoginImage from '../../../public/icons/login.svg'
import { usePathname } from 'next/navigation'


interface MainNavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}

export default function MainNav({ items, children }: MainNavProps) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const pathName = usePathname();

    const onLinkClick = (itemPath: string) => {
        if (itemPath === '/#fastPay') {
            window.scrollTo({ top: 885, left: 0, behavior: "instant" })
        }

        return null
    };


    return (
        <div className="flex gap-4 md:gap-0 w-full md:justify-between md:items-center bg-transparent font-aktifoa ">
            <div className='flex  items-center'>
                <Link
                    href="#"
                    className="hidden items-center lg:flex"
                >
                    <Logo />
                </Link>
            </div>
            <div className='flex items-center gap-12'>
                {items?.length ? (
                    <nav className="hidden gap-10 lg:flex">
                        {items?.map((item, index) => (
                            <Link
                                onClick={() => onLinkClick(item?.href)}
                                key={index}
                                href={item.disabled ? "/" : item.href}
                                className={cn('lg:text-[0.84rem] xl:text-base', pathName === item?.href && 'mb-2 border-b-2')}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                ) : null}
                <nav className="space-x-3 lg:flex hidden justify-center items-center">
                    <Link
                        href="/request"
                        className={cn(
                            buttonVariants({ variant: "default", size: "sm" }),
                            "px-8 font-bold lg:text-[0.84rem] xl:text-base"
                        )}
                    >
                        Get Started
                    </Link>
                    <Link href="/request" className='flex items-center gap-2 '>
                        <Image
                            src={LoginImage}
                            alt="login icon"
                            height={50}
                            width={50}
                            loading='lazy'
                            style={{ objectFit: 'cover' }}
                            objectPosition='center'
                        />
                        <span className='lg:text-[0.84rem] xl:text-base'>Login</span>
                    </Link>
                </nav>
            </div>
            <div className='flex items-center justify-between w-full lg:hidden pr-5'>
                <div className='-ml-7'>
                    <Logo />
                </div>
                <div className='flex gap-4'>
                    <button
                        className="flex items-center space-x-2 lg:hidden"
                        onClick={() => setShowMobileMenu(true)}
                    >
                        <Menu size={30} />
                    </button>
                </div>
            </div>

            {showMobileMenu && items && (
                <MobileNav items={items} setShowMobileMenu={setShowMobileMenu}>{children}</MobileNav>
            )}
        </div>
    )
}
