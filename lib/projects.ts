import { chirag, tanishq } from './author'

const projects: IProjectCard[] = [
    {
        title: 'Chirag Bhalotia Portfolio',
        description:
            'A personal portfolio website built with Next.js and Tailwind CSS',
        techStack: ['React', 'TailwindCSS', 'Typescript', 'Framer Motion'],
        image: '/images/projects/project1.png',
        link: 'https://chirag.codes',
        author: chirag,
        github: 'https://github.com/chirag3003/portfolio-v3',
        // code: 'https://github1s.com/chirag3003/portfolio-v3',
    },
    {
        title: 'Spy Cam Detection',
        description:
            'A project to detect hidden spy cameras within a given environment',
        techStack: ['Python'],
        image: '/images/projects/project5.png',
        // link: 'https://ecommerce.chirag.codes/',
        github: 'https://github.com/tanishq396/Spy_Cam_Detection',
        author: tanishq,
    },
    {
        title: 'Fleet Management System',
        description: '',
        techStack: ['Nodejs', 'mongodb', 'payment'],
        image: '/images/projects/project7.png',
        author: {
            name: 'Krushna Deshmukh',
        },
    },
    {
        title: 'WorkerBin',
        description:
            'A pastebin alternative used to store custom notes and made using cloudflare workers',
        techStack: [
            'Nextjs',
            'TailwindCSS',
            'Cloudflare Workers',
            'Cloudflare Pages',
        ],
        image: '/images/projects/project2.png',
        link: 'https://workerbin.b68dev.xyz',
        github: 'https://github.com/BRAVO68WEB/cf-challenge',
        author: chirag,
    },
    {
        title: 'RCS EncryptEdge',
        description: 'A landing page made for the rcs competetion',
        techStack: ['Nextjs', 'Tailwind CSS', 'Typescript'],
        image: '/images/projects/project3.png',
        link: 'https://rcs.encryptedge.in/',
        github: 'https://github.com/encryptedge/rcs-landing',
        author: chirag,
    },
    {
        title: 'Ecommerce Website',
        description: 'A working ecommerce website with payment integration',
        techStack: [
            'Nextjs',
            'Tailwind CSS',
            'Typescript',
            'Golang',
            'Razorpay',
        ],
        image: '/images/projects/project4.png',
        link: 'https://ecommerce.chirag.codes',
        github: 'https://github.com/chirag3003/architect-demo',
        author: chirag,
    },
    {
        title: 'Architect Website',
        description: 'A demo website for an architect firm',
        techStack: ['Nextjs', 'Tailwind CSS', 'Typescript', 'Nodemailer'],
        image: '/images/projects/project6.png',
        link: 'https://architect.chirag.codes',
        github: 'https://github.com/chirag3003/ecommerce-frontend-tailwindcss-nextjs',
        author: chirag,
    },
]

export default projects
