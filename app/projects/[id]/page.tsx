// import React from 'react'
// import { Skeleton } from '@/components/ui/skeleton'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from '@/components/ui/carousel'
// import { Card, CardContent } from '@/components/ui/card'
// import TeamsList from '@/components/Teams/TeamsList'
// import { buttonVariants } from '@/components/ui/button'
// import { GitHubLogoIcon } from '@radix-ui/react-icons'
// import Link from 'next/link'
// import { cn } from '@/lib/utils'
// // import { collection, doc, getDoc, getFirestore } from '@firebase/firestore'
// import { app } from '@/lib/firebase'
// import { redirect, RedirectType } from 'next/navigation'
// import Image from 'next/image'
// import { TeamCardProps } from '@/components/Teams/TeamCard'

// export const revalidate = 600

// interface ProjectPageParams {
//     params: {
//         id: string
//     }
// }

// const ProjectPage = async ({ params: { id } }: ProjectPageParams) => {
//     const db = getFirestore(app)
//     const projectsCollection = collection(db, 'projects')
//     const querySnapshot = await getDoc(doc(projectsCollection, id))
//     const project = querySnapshot.data() as IProjectDoc
//     if (!project) redirect('/projects', RedirectType.replace)
//     const team: TeamCardProps[] = await Promise.all(
//         project.contributors.map(async (contributor) => {
//             const contributorDoc = await getDoc(
//                 doc(collection(db, 'members'), contributor.memberId)
//             )
//             const data = contributorDoc.data() as ITeamDoc
//             return {
//                 id: data.id,
//                 imageUrl: data.photographLink,
//                 name: `${data.firstname} ${data.lastname}`,
//                 linkedin: data.linkedinProfileLink,
//                 email: data.email,
//                 role: contributor.role,
//             }
//         })
//     )

//     return (
//         <>
//             <section
//                 className={
//                     'flex flex-col lg:flex-row gap-20 mb-20 p-8 lg:p-24 pt-32 lg:pt-32'
//                 }
//             >
//                 <div className="content w-full lg:w-1/2">
//                     <h1 className={'text-2xl lg:text-4xl'}>{project.title}</h1>
//                     <p className={'lg:text-xl text-muted mt-6'}>
//                         {project.multiLineDescription}
//                     </p>
//                     <div className="buttons mt-12 flex gap-5">
//                         <Link
//                             target='_blank'
//                             referrerPolicy='no-referrer'
//                             className={cn(
//                                 buttonVariants({
//                                     variant: 'default',
//                                     size: 'lg',
//                                 }),
//                                 'flex gap-5'
//                             )}
//                             href={project.mediumLink}
//                         >
//                             Read on Medium
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="banner w-full lg:w-1/2">
//                     <div className="image-wrapper-w-full aspect-square max-w-lg mx-auto relative rounded-xl overflow-hidden">
//                         <Image
//                             src={project.bannerImgUrl}
//                             alt={project.title}
//                             fill={true}
//                             style={{ objectFit: 'cover' }}
//                         />
//                         <Skeleton
//                             className={
//                                 'absolute top-0 left-0  right-0 w-full aspect-square max-w-lg mx-auto'
//                             }
//                         />
//                     </div>
//                 </div>
//             </section>
//             {project.images.length > 0 && <section className="images mb-20 bg-secondary py-8 lg:py-24">
//                 <h2 className={'text-4xl lg:text-5xl mb-10 px-8 lg:px-24'}>
//                     Project Images
//                 </h2>
//                 <Carousel className="w-10/12 mx-auto">
//                     <CarouselContent>
//                         {project.images.map((image, index) => (
//                             <CarouselItem
//                                 className={
//                                     ' md:basis-1/2 lg:basis-1/3 overflow-hidden'
//                                 }
//                                 key={index}
//                             >
//                                 <div className="p-1">
//                                     <Card className={'w-full overflow-hidden'}>
//                                         <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
//                                             <div className="w-full h-full relative overflow-hidden">
//                                                 <Image
//                                                     src={image}
//                                                     alt={''}
//                                                     fill={true}
//                                                     style={{
//                                                         objectFit: 'cover',
//                                                     }}
//                                                 />
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </section>}
//             <section className="team p-8 lg:px-24">
//                 <TeamsList title={'Who Worked on this project'} team={team} />
//             </section>
//         </>
//     )
// }

// export default ProjectPage
