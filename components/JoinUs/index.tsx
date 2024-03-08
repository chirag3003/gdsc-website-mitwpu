'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface IJoinUsProps {
    teams: string[]
    data: IRecruitmentDoc
}

function JoinUs({ data, teams }: IJoinUsProps) {
    const [selectedTeam, setSelectedTeam] = useState('')

    // @ts-ignore
    return (
        <section className="p-8 lg:p-24 pt-32 lg:pt-32 grid lg:grid-cols-2 gap-20 min-h-screen">
            <div className="text-content">
                <h1 className="text-5xl mb-6">Ready to join us?</h1>
                <p className="max-w-xl">
                    GDSC MITWPU is a student-run community passionate about
                    technology and personal growth. We are a diverse group of
                    individuals with different backgrounds, skillsets, and
                    aspirations. What unites us is a shared love for learning,
                    building, and creating. Get involved and make a difference!
                    We look forward to welcoming you to the GDSC MITWPU family!
                </p>
                {teams.length === 0 && <div className="mt-10 py-2 px-4 bg-accent/50 rounded">
                    Sorry, We are not recruiting right now
                </div>}
            </div>
            <form className="max-w-lg w-full mx-auto flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="role">Preferred Role</Label>
                    <Select onValueChange={val => {
                        setSelectedTeam(val)
                    }}>
                        <SelectTrigger disabled={teams.length === 0} id="role" className="w-full">
                            <SelectValue placeholder="Preferred Role" />
                        </SelectTrigger>
                        <SelectContent>
                            {teams.map((team, index) => {
                                return (
                                    <SelectItem value={team} key={index}>{team}</SelectItem>
                                )
                            })}
                        </SelectContent>
                    </Select>
                </div>
                {/* @ts-ignore */}
                <Link target={(data[selectedTeam]) ? '_blank': '_self'} referrerPolicy={'no-referrer'} href={(data[selectedTeam]) ?? '#'}
                      className={cn(buttonVariants(), 'text-lg w-full')}>Submit</Link>
            </form>
        </section>
    )
}

export default JoinUs