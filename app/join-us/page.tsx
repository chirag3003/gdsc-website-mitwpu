import { Button } from '@/components/ui/button'
import {
    getFirestore,
    getDoc,
    collection,
    doc,
    getDocs,
} from '@firebase/firestore'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { RedirectType, redirect } from 'next/navigation'
import { app } from '@/lib/firebase'
import JoinUs from '@/components/JoinUs'

async function JoinUsPage() {
    redirect('/', RedirectType.replace)
    const db = getFirestore(app)
    const recruitmentCollection = collection(db, 'recruitment')
    const querySnapshot = await getDocs(recruitmentCollection)
    let teams: string[] = []
    let data: IRecruitmentDoc
    querySnapshot.forEach((doc) => {
        data = doc.data() as IRecruitmentDoc
        Object.keys(data).forEach((key) => {
            // @ts-ignore
            if (data[key]) teams.push(key)
        })
    })

    return <JoinUs data={data!} teams={teams} />
}

export default JoinUsPage
