import React from 'react'
import TeamsList from '@/components/Teams/TeamsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { TeamCardProps } from '@/components/Teams/TeamCard'

export const revalidate = 600

const TeamPage = async () => {
    const db = getFirestore(app)
    const teamsCollection = collection(db, 'members')
    const querySnapshot = await getDocs(teamsCollection)
    const teams = new Map<string, TeamCardProps[]>()
    teams.set('Leadership', [])
    teams.set('Tech', [])
    querySnapshot.forEach((doc) => {
        const dataItem = doc.data() as ITeamDoc
        if (!(dataItem.core && dataItem.active)) {
            return
        }
        const data: TeamCardProps = {
            name: `${dataItem.firstname} ${dataItem.lastname}`,
            role: dataItem.role,
            imageUrl: dataItem.photographLink,
            email: dataItem.email,
            linkedin: dataItem.linkedinProfileLink,
        }
        if (!teams.has(dataItem.department)) {
            teams.set(dataItem.department, [])
        }
        teams.get(dataItem.department)!.push(data)
    })
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32'}>
            {Array.from(teams.keys()).map((team, index) => {
                return (
                    <TeamsList
                        key={index}
                        title={team}
                        team={teams.get(team)!}
                    />
                )
            })}
        </section>
    )
}

export default TeamPage
