interface IProjectDoc {
    id: string
    title: string
    singleLineDescription: string
    multiLineDescription: string
    bannerImgUrl: string
    images: string[]
    contributors: {
        memberId: string
        role: string
    }[]
    mediumLink: string
}

interface IProjectCard {
    title: string
    description: string
    techStack: string[]
    image: string
    link?: string
    code?: string
    github?: string
    author?: IAuthor
}

interface IAuthor {
    name: string
    github?: string
    website?: string
}
