import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function Home() {
    return (
        <>
            <Card className={"about w-full mb-20"}>
                <CardHeader className={"flex flex-row justify-between items-center space-y-0"}>
                    <p>About GDSC MITWPU</p>
                    <p className={" pl-10 border-l"}>Description Lorem Ipsum </p>
                </CardHeader>
            </Card>
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className={"basis-1 md:basis-1/2 lg:basis-1/3"} key={index}>
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
