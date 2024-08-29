import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { cn } from '@/lib/utils'
import { GitHub, Globe } from 'react-feather'

interface ProjectsListProps {
    projects: IProjectCard[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {projects.map(
                (
                    {
                        title,
                        description,
                        image,
                        techStack,
                        code,
                        github,
                        link,
                        author,
                    },
                    index
                ) => {
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div
                                    className="w-full bg-white/10 aspect-video rounded-xl overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>
                                {author && (
                                    <div>
                                        <p className="mt-5 mb-3 text-muted">
                                            Author
                                        </p>
                                        <div className="flex items-center justify-between font-medium">
                                            <p className="text-lg">
                                                {author.name}
                                            </p>
                                            <div className="buttons flex gap-3 items-center">
                                                {author.github && (
                                                    <Link
                                                        href={author.github}
                                                        className={cn(
                                                            buttonVariants(),
                                                            'px-3 py-5 rounded-full bg-white/20'
                                                        )}
                                                    >
                                                        <GitHub className="h-5 w-5" />
                                                    </Link>
                                                )}
                                                {author.website && (
                                                    <Link
                                                        href={author.website}
                                                        className={cn(
                                                            buttonVariants(),
                                                            'px-3 py-5 rounded-full bg-white/20'
                                                        )}
                                                    >
                                                        <Globe className="h-5 w-5" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <p className="mt-5 mb-3">Tech Stack</p>
                                <div className="tech-stacks flex flex-wrap gap-2">
                                    {techStack.map((item, index) => (
                                        <div
                                            key={index}
                                            className="tech-stack p-2 px-4 rounded-lg bg-secondary text-secondary-foreground"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex items-center justify-end gap-2">
                                {github && (
                                    <Link
                                        href={github}
                                        className={cn(
                                            buttonVariants({
                                                variant: 'outline',
                                                size: 'icon',
                                            }),
                                            'font-semibold'
                                        )}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        <GitHub height={25} width={25} />
                                    </Link>
                                )}
                                {code && (
                                    <Link
                                        href={code}
                                        className={cn(
                                            buttonVariants(),
                                            'font-semibold'
                                        )}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        View Code
                                        <ArrowTopRightIcon
                                            className="ml-5"
                                            height={18}
                                            width={18}
                                        />
                                    </Link>
                                )}
                                {link && (
                                    <Link
                                        href={link}
                                        className={cn(
                                            buttonVariants(),
                                            'font-semibold'
                                        )}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        Visit Site
                                        <ArrowTopRightIcon
                                            className="ml-5"
                                            height={18}
                                            width={18}
                                        />
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    )
                }
            )}
        </div>
    )
}

export default ProjectsList
