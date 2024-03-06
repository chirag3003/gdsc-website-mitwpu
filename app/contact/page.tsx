'use client'

import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import {
    ContactInput,
    contactInputValidator,
} from '@/validators/contact.validator'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import socials,{mail} from '@/components/configs/socials'
import EmailButton from '@/components/EmailButton'

const ContactPage = () => {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactInputValidator),
    })
    const handleFormSubmit = async (data: ContactInput) => {
        try {
            await axios.post('/api/contact', data)
            toast({ title: 'Your message was send successfully!' })
        } catch (err) {
            console.error(err)
            toast({
                title: 'Error Sending Message!',
            })
        }
    }
    return (
        <div className="relative p-8 lg:p-24 pt-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 lg:static lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-5xl font-bold tracking-tight">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted">
                            We{"'"}re thrilled to keep in touch with you! Here
                            are various channels through which you can connect
                            with us:
                        </p>
                        <div className="mt-10 space-y-4 text-base leading-7 text-muted">
                            {socials.map((social, index) => {
                                if(social.name === "Email"){
                  return (
                    <button 
                      key={index}
      onClick={() => {navigator.clipboard.writeText(mail);toast({title:"Email copied to clipboard"})}} className="flex flex-none w-full gap-x-4 bg-black/10 dark:bg-white/10 px-6 py-2 rounded hover:text-foreground"
                  >
                <span className="sr-only">{social.name}</span>
                                        <social.icon
                                            className="h-7 w-6"
                                            aria-hidden="true"
                                        />
                                        <p>{social.name}</p>
                         
                      </button> 
                  )
                }
                                return (
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                        key={index}
                                        className="flex flex-none gap-x-4 bg-black/10 dark:bg-white/10 px-6 py-2 rounded hover:text-foreground"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <social.icon
                                            className="h-7 w-6"
                                            aria-hidden="true"
                                        />
                                        <p>{social.name}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <form
                    className="px-6 pb-24 pt-20 lg:px-8"
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="flex flex-col gap-6">
                            <div className={'flex flex-col lg:flex-row gap-6'}>
                                <Input
                                    type={'text'}
                                    placeholder={'First Name'}
                                    {...register('firstName')}
                                />
                                <Input
                                    type={'text'}
                                    placeholder={'Last Name'}
                                    {...register('lastName')}
                                />
                            </div>
                            <Input
                                type={'email'}
                                placeholder={'Email'}
                                className={'w-full'}
                                {...register('email')}
                            />
                            <Input
                                type={'text'}
                                placeholder={'Phone Number'}
                                {...register('phoneNo')}
                            />
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <Textarea
                                        id="message"
                                        placeholder={'Message'}
                                        rows={4}
                                        className=""
                                        defaultValue={''}
                                        {...register('message')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button type="submit" className="">
                                Send message
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
