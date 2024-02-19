import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import TeamsList from '@/components/Teams/TeamsList'
import { Button, buttonVariants } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const ProjectPage = () => {
    return (
        <>
            <section className={'flex flex-col lg:flex-row gap-20 mb-20'}>
                <div className="content w-full lg:w-1/2">
                    <h1 className={'text-2xl lg:text-4xl'}>How you can train an AI to convert your design mockups into
                        HTML and
                        CSS8</h1>
                    <p className={'lg:text-xl text-muted mt-6'}>Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    <div className="buttons mt-12 flex gap-5">
                        <Link className={cn(buttonVariants({ variant: 'secondary', size: "lg" }), 'flex gap-5')}
                              href={'#'}><GitHubLogoIcon height={20} width={20} /> Github </Link>
                    </div>
                </div>
                <div className="banner w-full lg:w-1/2">
                    <Skeleton className={'w-full aspect-square max-w-lg mx-auto'} />
                </div>
            </section>
            <section className="images mb-20">
                <h2 className={'text-4xl mb-10'}>Project Images</h2>
                <Carousel className="w-10/12 mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className={' md:basis-1/2 lg:basis-1/3'} key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
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
            <section className="team">
                <TeamsList title={'Who Worked on this project'} />
            </section>
        </>
    )
}

export default ProjectPage