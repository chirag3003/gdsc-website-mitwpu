import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

interface PodcastsListProps {
    title: string
}

const PodcastsList = ({ title }: PodcastsListProps) => {
    return (
        <div className={"mb-20"}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'#'}>
                    <Card>
                        <CardHeader>
                            <Skeleton className={'w-full aspect-square'} />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className={'text-lg'}>Podcast Title</CardTitle>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default PodcastsList