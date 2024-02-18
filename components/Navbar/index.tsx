import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

function Navbar() {
    return (
        <div className="fixed z-10 top-0 left-0 right-0 flex items-center justify-between py-5 border-b bg-background px-8 lg:px-24">
            <div className="logo"><img src="/gdsc-logo.svg" alt="logo" className={'h-10 w-auto'} /></div>
            <nav className="nav-items items-center gap-6 hidden md:flex">
                <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    href={'#'}
                >
                    Item 1
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    href={'#'}
                >
                    Item 2
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    href={'#'}
                >
                    Item 3
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    href={'#'}
                >
                    Item 4
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
