import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EventsListProps {
    title: string
}

const EventsList = ({ title }: EventsListProps) => {
    return (
        <div>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-video'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4 "}>Event Title</CardTitle>
                        <CardDescription className={""}>Event Description</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-video'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4 text-xl"}>Event Title</CardTitle>
                        <CardDescription className={"text-lg"}>Event Description</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-video'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4 text-xl"}>Event Title</CardTitle>
                        <CardDescription className={"text-lg"}>Event Description</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-video'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4 text-xl"}>Event Title</CardTitle>
                        <CardDescription className={"text-lg"}>Event Description</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className={'w-full aspect-video'} />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className={"mb-4 text-xl"}>Event Title</CardTitle>
                        <CardDescription className={"text-lg"}>Event Description</CardDescription>
                    </CardContent>
                    <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                        <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default EventsList