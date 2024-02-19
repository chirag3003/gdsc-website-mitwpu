import React from 'react'
import Link from 'next/link'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Facebook, Twitter } from 'react-feather'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const EventPage = () => {
    return (
        <>
            <section
                className={'w-full flex gap-20 flex-col lg:flex-row  p-8 lg:p-24 pt-32 lg:pt-32'}>
                <div className="content w-full lg:w-1/2">
                    <h1 className={'text-6xl'}>Event Title</h1>
                    <p className="description text-muted text-lg mt-4 max-w-3xl">
                        At GDSC MIT-WPU, we nurture a culture of creativity and collaboration. We aim to explore endless
                        possibilities of technology, with the support and guidance of a warm community.
                    </p>
                    <div className="links flex gap-4 mt-8">
                        <Link href={'#'} className={''}>
                            <LinkedInLogoIcon height={32} width={32} />
                        </Link>
                        <Link href={'#'} className={''}>
                            <InstagramLogoIcon height={32} width={32} />
                        </Link>
                        <Link href={'#'} className={''}>
                            <Facebook height={32} width={32} />
                        </Link>
                        <Link href={'#'} className={''}>
                            <Twitter height={32} width={32} />
                        </Link>
                    </div>
                </div>
                <div className="image w-full lg:w-1/2">
                    <Skeleton className={'mx-auto w-full aspect-video'} />
                </div>
            </section>
            <section className={'p-8 lg:p-24 lg:px-0'}>
                <Carousel className="w-10/12 mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className={'md:basis-1/2 lg:basis-1/3'} key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>6th February</CardTitle>
                                            <CardDescription>12:00 pm</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className={'flex flex-col'}>
                                                <li className={'py-2 border-b border-muted'}>Agenda 1</li>
                                                <li className={'py-2 border-b border-muted'}>Agenda 1</li>
                                                <li className={'py-2 border-b border-muted'}>Agenda 1</li>
                                                <li className={'py-2 border-b border-muted'}>Agenda 1</li>
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
            <section className={'p-8 lg:p-24 bg-secondary'}>
                <p className="text-muted text-xl lg:text-2xl mb-4 ">
                    16th April - 18th April
                </p>
                <h2 className={'text-4xl lg:text-5xl max-w-4xl'}>Vk Hall, Mit World Peace University, Kothrud, Pune</h2>
            </section>
            <section className={'p-8 lg:p-24 lg:px-0'}>
                <h2 className={'mx-8 lg:mx-24 text-5xl mb-10'}>Gallery</h2>
                <Carousel className="w-10/12 mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className={'md:basis-1/2 lg:basis-1/3'} key={index}>
                                <div className="p-1">
                                    <Skeleton className={'w-full aspect-square'} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </>
    )
}

export default EventPage