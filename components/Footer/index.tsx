import React from 'react'
import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'react-feather'

const navigation = {
    social: [
        {
            name:"Mail",
            href: "#",
            icon: Mail
        },
        {
            name: 'Instagram',
            href: '#',
            icon: InstagramLogoIcon,
        },
        {
            name: 'X',
            href: '#',
            icon: TwitterLogoIcon,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: GitHubLogoIcon,
        },
        {
            name: 'Linkedin',
            href: '#',
            icon: LinkedInLogoIcon,
        },
    ],
}
const Footer = () => {
    return (
        <footer className="mt-8 border-t border-border/10 p-8 flex flex-col gap-9 md:flex-row md:items-center md:justify-between lg:px-24">

            <div className="logo">
                <img className="h-14 w-auto" src={'/gdsc-logo.svg'}  alt={""}/>
            </div>
            <div className="flex space-x-6">
                {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-foreground md:text-foreground/60 hover:text-foreground">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" height={20} width={20}/>
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer