import React from 'react'
import Link from 'next/link'

const posts = [


    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '/projects/id',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '/projects/id',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '/projects/id',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    // More posts...
]
const ProjectsList = () => {
    return (
        <div>
            {posts.map((post) => (
                <Link href={post.href} key={post.id}>
                    <article key={post.id}
                             className="relative isolate flex flex-col gap-8 lg:flex-row-reverse justify-between max-w-6xl mx-auto border-b py-8">
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                            <img
                                src={post.imageUrl}
                                alt=""
                                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                            </div>
                            <div className="relative max-w-xl">
                                <h3 className="mt-3 text-lg font-semibold leading-6">
                                    <p>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </p>
                                </h3>
                                <p className="mt-5 text-sm leading-6">{post.description}</p>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    )
}

export default ProjectsList