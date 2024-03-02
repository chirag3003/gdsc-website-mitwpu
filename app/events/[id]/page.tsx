import React from 'react'
import Link from 'next/link'
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { Facebook, Navigation, Navigation2, Twitter } from 'react-feather'
import { Button, buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { collection, doc, getDoc, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { redirect, RedirectType } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface EventPageProps {
    params: {
        id: string
    }
}

export const revalidate = 600

const EventPage = async ({ params: { id } }: EventPageProps) => {
    const db = getFirestore(app)
    const eventsCollection = collection(db, 'events')
    const querySnapshot = await getDoc(doc(eventsCollection, id))
    const data = querySnapshot.data() as IEventDoc
    if (!data) redirect('/events', RedirectType.replace)

    return (
        <>
            <section
                className={
                    'w-full flex gap-20 flex-col lg:flex-row  p-8 lg:p-24 pt-32 lg:pt-32'
                }
            >
                <div className="content w-full lg:w-1/2">
                    <h1 className={'text-6xl'}>{data.title}</h1>
                    <p className="description text-muted text-lg mt-4 max-w-3xl">
                        {data.multiLineDescription}
                    </p>
                </div>
                <div className="image w-full lg:w-1/2">
                    <div className="mx-auto w-full aspect-video relative rounded-xl overflow-hidden">
                        <Image
                            src={data.bannerImageLinks[0]}
                            alt={data.title}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                        />
                        <Skeleton className={'mx-auto w-full aspect-video'} />
                    </div>
                </div>
            </section>
            <section className={'p-8 lg:p-24 lg:px-0'}>
                <Carousel className="w-10/12 mx-auto">
                    <CarouselContent>
                        {data.agenda.map((agenda, index) => (
                            <CarouselItem
                                className={'md:basis-1/2 lg:basis-1/3'}
                                key={index}
                            >
                                <div className="p-1 h-full max-h-80">
                                    <Card className={'h-full overflow-y-auto overflow-x-hidden'}>
                                        <CardHeader>
                                            <CardTitle>{agenda.date}</CardTitle>
                                            <CardDescription>
                                                {agenda.starts_at}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className={'flex flex-col'}>
                                                {agenda.activities.map(
                                                    (activity, index) => {
                                                        return (
                                                            <li
                                                                className={
                                                                    'py-2 border-b border-muted'
                                                                }
                                                                key={index}
                                                            >
                                                                {activity}
                                                            </li>
                                                        )
                                                    }
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {data.type === 'Upcoming' && (
                <section className={'p-8 lg:p-24 bg-secondary'}>
                    <p className="text-muted text-xl lg:text-2xl mb-4 ">
                        16th April - 18th April
                    </p>
                    <h2 className={'text-4xl lg:text-5xl max-w-4xl'}>
                        {data.venue}
                    </h2>
                    <Link
                        href={data.googleMapLink}
                        className={cn(
                            buttonVariants({ variant: 'outline' }),
                            'flex items-center gap-5 w-min mt-10'
                        )}
                    >
                        <Navigation2 height={20} width={20} /> Locate
                    </Link>
                </section>
            )}
            {data.type === 'Past' && (
                <section className={'p-8 lg:p-24 lg:px-0'}>
                    <h2 className={'mx-8 lg:mx-24 text-5xl mb-10'}>Gallery</h2>
                    <Carousel className="w-10/12 mx-auto">
                        <CarouselContent>
                            {data.flashbackImageLinks.map((image, index) => (
                                <CarouselItem
                                    className={'md:basis-1/2 lg:basis-1/3'}
                                    key={index}
                                >
                                    <div className="w-full aspect-square relative rounded overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={''}
                                            fill={true}
                                        />
                                        <Skeleton
                                            className={
                                                'w-full h-full absolute top-0 left-0'
                                            }
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>
            )}
        </>
    )
}

export default EventPage
