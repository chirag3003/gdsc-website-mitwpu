import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export interface EventCardProps {
    title: string
    description: string
    imageUrl: string
    id: string
}

const EventCard = ({ title, description, id, imageUrl }: EventCardProps) => {
    return (
        <Card>
            <CardHeader>
                <div className="w-full aspect-video relative rounded-xl overflow-hidden">
                    <Skeleton className={'w-full h-full absolute top-0 left-0 right-0'} />
                    <Image src={imageUrl} alt={title} fill={true} />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className={'mb-1 text-lg'}>{title}</CardTitle>
                <CardDescription className={'text-muted'}>{description}</CardDescription>
            </CardContent>
            <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                <Link href={`/events/${id}`} className={cn(buttonVariants(), '')}>Details</Link>
            </CardFooter>
        </Card>
    )
}

export default EventCard