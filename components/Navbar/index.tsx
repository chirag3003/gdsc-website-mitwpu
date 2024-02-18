import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const navLinks = [{
    title: 'Team',
    href: '/team',
}, {
    title: 'Podcasts',
    href: '/podcasts',
}, {
    title: 'Events',
    href: '/events',
}, {
    title: 'Contact',
    href: '/contact',
}]

function Navbar() {
    return (
        <div
            className="fixed z-10 top-0 left-0 right-0 flex items-center justify-between py-5 border-b bg-background px-8 lg:px-24">
            <Link href={'/'} className="logo"><img src="/gdsc-logo.svg" alt="logo" className={'h-10 w-auto'} /></Link>
            <nav className="nav-items items-center gap-6 hidden md:flex">
                {navLinks.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={cn(buttonVariants({ variant: 'ghost' }))}
                        >
                            {link.title}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default Navbar
