import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import Image from 'next/image'
import socials from '@/components/configs/socials'
import EmailButton from '@/components/EmailButton'

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
                            'bg-gradient text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-br from-cyan-600 via-primary to-violet-600'
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
                            if(social.name === "Email"){
                return <EmailButton key={index}><div
                  key={index}
                  className='p-1 cursor-pointer'
                >
                  <social.icon height={32} width={32} />
                </div></EmailButton>
              }
                            return (
                                <Link
                                    key={index}
                                    href={social.url}
                                    className={'p-1'}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                >
                                    <social.icon height={32} width={32} />
                                </Link>
                            )
                        })}
                    </div>
                    <div className="buttons flex gap-4 mt-4">
                        <Link
                            href={'/contact'}
                            className={buttonVariants({ size: 'lg' })}
                        >
                            Contact US
                        </Link>
                        <Link
                            href={'/join-us'}
                            className={buttonVariants({
                                size: 'lg',
                                variant: 'secondary',
                            })}
                        >
                            Join US
                        </Link>
                    </div>
                </div>
                <div className="image w-full lg:w-1/2">
                    <img
                        src="/doodle.svg"
                        alt=""
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
