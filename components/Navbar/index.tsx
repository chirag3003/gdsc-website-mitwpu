'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Menu } from 'react-feather'
import { Card, CardContent } from '@/components/ui/card'

const navLinks = [
    {
        title: 'Podcasts',
        href: '/podcasts',
    },
    {
        title: 'Events',
        href: '/events',
    },
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Members',
        href: '/team',
    },
    {
        title: 'Contact Us',
        href: '/contact',
    },
    {
        title: 'Join Us',
        href: '/join-us',
    },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="fixed z-10 top-0 left-0 right-0 py-5 border-b bg-background px-8 lg:px-24">
            <div className="relative w-full flex items-center justify-between">
                <Link href={'/'} className="logo">
                    <img
                        src="/gdsc-logo.svg"
                        alt="logo"
                        className={'h-10 w-auto'}
                    />
                </Link>
                <nav className="nav-items items-center gap-4 hidden lg:flex">
                    {navLinks.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={
                                    'text-sm rounded hover:bg-secondary hover:text-secondary-foreground px-4 py-2'
                                }
                            >
                                {link.title}
                            </Link>
                        )
                    })}
                </nav>
                <Button
                    variant={'ghost'}
                    className={'lg:hidden'}
                    onClick={toggleMenu}
                >
                    <Menu height={26} width={26} />
                </Button>
                <div
                    className={cn(
                        'mobile-menu absolute top-[200%] left-0 right-0 lg:hidden',
                        { hidden: !menuOpen }
                    )}
                >
                    <Card>
                        <CardContent className={'p-4 flex flex-col gap-3'}>
                            {navLinks.map((navLink, index) => {
                                return (
                                    <Link
                                        onClick={() => {
                                            setMenuOpen(false)
                                        }}
                                        key={index}
                                        href={navLink.href}
                                        className={
                                            'bg-primary/20 w-full px-4 py-2 rounded-lg'
                                        }
                                    >
                                        {navLink.title}
                                    </Link>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Navbar
