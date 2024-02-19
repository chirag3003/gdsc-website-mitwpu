import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Mail } from 'react-feather'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const TeamCard = () => {
    return (
        <Card>
            <CardHeader>
                <Skeleton className={'w-full aspect-square'} />
            </CardHeader>
            <CardContent>
                <CardTitle className={'mb-1'}>Chirag Bhalotia</CardTitle>
                <CardDescription className={'text-muted '}>Full Stack Developer</CardDescription>
            </CardContent>
            <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                <Link href={'#'} className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), '')}><Mail width={24}
                                                                                                              height={24} /></Link>
                <Link href={'#'}
                      className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), '')}><LinkedInLogoIcon
                    width={24} height={24} /></Link>
                <Link href={'#'} className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), '')}><GitHubLogoIcon
                    width={24} height={24} /></Link>
                <Link href={'#'}
                      className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), '')}><InstagramLogoIcon
                    width={24} height={24} /></Link>
            </CardFooter>
        </Card>
    )
}

export default TeamCard