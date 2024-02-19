import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'react-feather'
import TeamCard from '@/components/Teams/TeamCard'

interface TeamsListProps {
    title: string

}

const TeamsList = ({title}:TeamsListProps) => {
    return (
        <div className={"mb-20"}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    )
}

export default TeamsList