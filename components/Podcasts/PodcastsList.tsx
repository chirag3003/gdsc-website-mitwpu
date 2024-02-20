import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import Image from 'next/image'

interface PodcastsListProps {
    title: string
    podcasts: IPodcastDoc[]
}

const PodcastsList = ({ title, podcasts }: PodcastsListProps) => {
    return (
        <div className={'mb-20'}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {podcasts.map(
                    ({ title, spotifyLink, bannerImgLink }, index) => {
                        return (
                            <Link
                                key={index}
                                href={spotifyLink}
                                target={'_blank'}
                                referrerPolicy={'no-referrer'}
                            >
                                <Card>
                                    <CardHeader>
                                        <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                                            <Skeleton
                                                className={
                                                    'w-full aspect-square'
                                                }
                                            />
                                            <Image
                                                src={bannerImgLink}
                                                alt={title}
                                                fill={true}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>
                                            <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                                                {title} afsdf asdaf sdf as d
                                            </p>
                                        </CardTitle>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default PodcastsList
