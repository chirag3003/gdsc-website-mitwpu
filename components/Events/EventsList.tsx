import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import EventCard from '@/components/Events/EventCard'

interface EventsListProps {
    title: string
}

const EventsList = ({ title }: EventsListProps) => {
    return (
        <div className={"mb-20"}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default EventsList