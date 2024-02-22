import React from 'react'
import TeamsList from '@/components/Teams/TeamsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { TeamCardProps } from '@/components/Teams/TeamCard'

export const revalidate = 3600

const TeamPage = async () => {
    const db = getFirestore(app)
    const teamsCollection = collection(db, 'members')
    const querySnapshot = await getDocs(teamsCollection)
    const team: TeamCardProps[] = []
    querySnapshot.forEach((doc) => {
        const dataItem = doc.data() as ITeamDoc
        const data: TeamCardProps = {
            name: `${dataItem.firstname} ${dataItem.lastname}`,
            role: dataItem.role,
            imageUrl: dataItem.photographLink,
            email: dataItem.email,
            linkedin: dataItem.linkedinProfileLink,
        }
        team.push(data)
    })
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32'}>
            <TeamsList title={'Tech Team'} team={team} />
        </section>
    )
}

export default TeamPage
