import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
    return (
        <div className="relative isolate">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 lg:static lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-primary">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-muted">
                            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut
                            tincidunt
                            integer elementum id sem. Arcu sed malesuada et magna.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-muted">
                            <div className="flex gap-x-4 bg-primary/10 px-6 py-2 rounded">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-white" href="mailto:hello@example.com">
                                        hello@example.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form action="#" method="POST" className="px-6 pb-24 pt-20 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="flex flex-col gap-6">
                            <div className={'flex flex-col lg:flex-row gap-6'}>
                                <Input type={'text'} placeholder={'First Name'} />
                                <Input type={'text'} placeholder={'Last Name'} />
                            </div>
                            <Input type={'email'} placeholder={'Email'} className={'w-full'} />
                            <Input type={'text'} placeholder={'Phone Number'} />
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <Textarea
                                        name="message"
                                        id="message"
                                        placeholder={'Message'}
                                        rows={4}
                                        className=""
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button
                                type="submit"
                                className=""
                            >
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