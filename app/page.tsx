import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { Facebook, Twitter } from 'react-feather'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import socials from '@/components/configs/socials'

const whatDoWeDo = [
    {
        img: '/project.svg',
    },
    {
        img: '/podcast.jpeg',
    },
    {
        img: '/event.svg',
    },
]

export default function Home() {
    return (
        <>
            <section
                className={
                    'hero-section lg:min-h-screen w-full flex gap-20 flex-col lg:flex-row lg:items-center  p-8 lg:p-24 pt-32 lg:pt-32'
                }
            >
                <div className="content w-full lg:w-1/2">
                    <h1
                        className={
                            'text-6xl bg-clip-text text-transparent bg-gradient-to-br from-cyan-600 to-violet-600'
                        }
                    >
                        GDSC MITWPU
                    </h1>
                    <p className="description text-muted text-lg mt-4 max-w-xl">
                        At GDSC MIT-WPU, we nurture a culture of creativity and
                        collaboration. We aim to explore endless possibilities
                        of technology, with the support and guidance of a warm
                        community.
                    </p>
                    <div className="links flex gap-4 mt-8">
                        {socials.map((social, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={social.url}
                                    className={'p-1'}
                                >
                                    <social.icon height={32} width={32} />
                                </Link>
                            )
                        })}
                    </div>
                    <div className="buttons flex gap-4 mt-4">
                        <Button className={''} size={'lg'}>
                            Contact US
                        </Button>
                        <Button variant={'secondary'} size={'lg'}>
                            Join US
                        </Button>
                    </div>
                </div>
                <div className="image w-full lg:w-1/2">
                    <Skeleton
                        className={'max-w-sm mx-auto w-full aspect-square'}
                    />
                </div>
            </section>
            <section className={'p-8 lg:p-24'}>
                <h2 className={'text-5xl mb-10'}>What do we do?</h2>
                <Carousel className="w-10/12 mx-auto">
                    <CarouselContent>
                        {whatDoWeDo.map(({ img }, index) => (
                            <CarouselItem
                                className={
                                    'md:basis-1/2 lg:basis-1/3 border-none'
                                }
                                key={index}
                            >
                                <Card className="border-none rounded-3xl overflow-hidden">
                                    <CardContent className="flex aspect-square items-center justify-center p-6 relative border-none">
                                        <Image src={img} alt={''} fill={true} />
                                    </CardContent>
                                </Card>
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
