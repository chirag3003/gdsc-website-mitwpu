import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Mail } from 'react-feather'
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import EmailButton from '../EmailButton'

export interface TeamCardProps {
    id: string
    imageUrl: string
    name: string
    role: string
    linkedin?: string
    github?: string
    email: string
    instagram?: string
}

const TeamCard = ({
                      name,
                      role,
                      instagram,
                      email,
                      github,
                      imageUrl,
                      linkedin,
                  }: TeamCardProps) => {
    return (
        <Card>
            <CardHeader>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        placeholder={'blur'}
                    />
                    <Skeleton
                        className={
                            'w-full h-full absolute top-0 left-0 right-0'
                        }
                    />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className={'mb-1'}>{name}</CardTitle>
                <CardDescription className={'text-muted '}>
                    {role}
                </CardDescription>
            </CardContent>
            <CardFooter className={'flex items-center gap-3 justify-end mt-4'}>
                <EmailButton
                    email={email}
                >
                    <div
                        className={cn(
                            buttonVariants({ size: 'icon', variant: 'ghost' }),
                            '',
                        )}
                    >
                        <Mail width={24} height={24} />
                    </div>
                </EmailButton>
                {linkedin && (
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={linkedin}
                        className={cn(
                            buttonVariants({
                                size: 'icon',
                                variant: 'ghost',
                            }),
                            '',
                        )}
                    >
                        <LinkedInLogoIcon width={24} height={24} />
                    </Link>
                )}
                {github && (
                    <Link
                        href={github}
                        className={cn(
                            buttonVariants({ size: 'icon', variant: 'ghost' }),
                            '',
                        )}
                    >
                        <GitHubLogoIcon width={24} height={24} />
                    </Link>
                )}
                {instagram && (
                    <Link
                        href={instagram}
                        className={cn(
                            buttonVariants({
                                size: 'icon',
                                variant: 'ghost',
                            }),
                            '',
                        )}
                    >
                        <InstagramLogoIcon width={24} height={24} />
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}

export default TeamCard
