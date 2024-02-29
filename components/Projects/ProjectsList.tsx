import React from 'react'
import Link from 'next/link'

interface ProjectsListProps {
    projects: IProjectDoc[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <div>
            {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id}>
                    <article
                        className="relative isolate flex flex-col gap-8 lg:flex-row-reverse justify-between max-w-6xl mx-auto border-b py-8">
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                            <img
                                src={project.bannerImgUrl}
                                alt=""
                                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                            {/* <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={'2020-03-16'} className="text-muted">
                                    {'Mar 16, 2020'}
                                </time>
                            </div> */}
                            <div className="relative max-w-xl">
                                <h3 className="mt-3 text-lg font-semibold leading-6">
                                    <p>
                                        <span className="absolute inset-0" />
                                        {project.title}
                                    </p>
                                </h3>
                                <p className="mt-5 text-sm leading-6">{project.singleLineDescription}</p>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    )
}

export default ProjectsList