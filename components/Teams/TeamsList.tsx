import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'react-feather'

interface TeamsListProps {
    title: string

}

const TeamsList = ({title}:TeamsListProps) => {
    return (
        <div className={"mb-20"}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-square'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4"}>Chirag Bhalotia</CardTitle>
                        <CardDescription className={""}>Full Stack Developer</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><Mail width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><LinkedInLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><GitHubLogoIcon width={24} height={24} /></Link>
                        <Link href={'#'} className={cn(buttonVariants({size: 'icon',variant: 'ghost'}), "")}><InstagramLogoIcon width={24} height={24} /></Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default TeamsList