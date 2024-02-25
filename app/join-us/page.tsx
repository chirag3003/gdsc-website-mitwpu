import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function JoinUsPage() {
    return (
        <section className="p-8 lg:p-24 pt-32 lg:pt-32 grid lg:grid-cols-2 gap-20">
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
                <div className="mt-10 py-2 px-4 bg-accent/50 rounded">Sorry, We are not recruiting right now</div>
            </div>
            <form className="max-w-lg w-full mx-auto flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="role">Preferred Role</Label>
                    <Select>
                        <SelectTrigger id="role" className="w-full">
                            <SelectValue placeholder="Preferred Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="text-lg w-full">Submit</Button>
            </form>
        </section>
    )
}

export default JoinUsPage
