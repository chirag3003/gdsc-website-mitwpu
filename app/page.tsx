import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function Home() {
    return (
        <>
            <section className={"hero-section lg:min-h-screen w-full flex gap-20 flex-col lg:flex-row lg:items-center"}>
                <div className="content w-full lg:w-1/2">
                    <h1 className={"text-6xl"}>GDSC MITWPU</h1>
                </div>
            </section>
            <Carousel className="w-10/12 mx-auto">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className={"md:basis-1/2 lg:basis-1/3"} key={index}>
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
        </>
    )
}
