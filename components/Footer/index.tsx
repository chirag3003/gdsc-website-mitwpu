import React from 'react'
import socials from '../configs/socials'

const Footer = () => {
    return (
        <footer className="mt-8 border-t border-border/10 p-8 flex flex-col gap-9 md:flex-row md:items-center md:justify-between lg:px-24">
            <div className="logo">
                <img className="h-14 w-auto" src={'/gdsc-logo.svg'} alt={''} />
            </div>
            <div className="flex space-x-6">
                {socials.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="text-foreground md:text-foreground/60 hover:text-foreground"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                            height={20}
                            width={20}
                        />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
