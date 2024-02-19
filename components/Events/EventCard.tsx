import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const EventCard = () => {
    return (
        <Card>
            <CardHeader>
                <Skeleton className={'w-full aspect-video'} />
            </CardHeader>
            <CardContent>
                <CardTitle className={"mb-1 text-lg"}>Event Title</CardTitle>
                <CardDescription className={"text-muted"}>Event Description</CardDescription>
            </CardContent>
            <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                <Link href={'#'} className={cn(buttonVariants(),"")}>Details</Link>
            </CardFooter>
        </Card>
    )
}

export default EventCard