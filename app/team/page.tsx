import React from 'react'
import TeamsList from '@/components/Teams/TeamsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { TeamCardProps } from '@/components/Teams/TeamCard'
import Teams from '@/components/Teams'

export const revalidate = 600

const TeamPage = async () => {
    const db = getFirestore(app)
    const teamsCollection = collection(db, 'members')
    const querySnapshot = await getDocs(teamsCollection)
    const teams = new Map<string, TeamCardProps[]>()
    teams.set('Tech', [])
    const leadership: TeamCardProps[] = []
    querySnapshot.forEach((doc) => {
        const dataItem = doc.data() as ITeamDoc
        if (dataItem.core === 'false' && dataItem.active === 'false') {
            console.log(dataItem)
            return
        }
        const data: TeamCardProps = {
            id: dataItem.id,
            name: `${dataItem.firstname} ${dataItem.lastname}`,
            role: dataItem.role,
            imageUrl: dataItem.photographLink,
            email: dataItem.email,
            linkedin: dataItem.linkedinProfileLink,
        }
        if (dataItem.department === 'Leadership') {
            // console.log(dataItem)
            leadership.push(data)
            if (data.name === 'Tanishq Shah' && leadership.length > 1) {
                const member = leadership[0]
                leadership[0] = data
                leadership[leadership.length - 1] = member
            }
            return
        }
        if (!teams.has(dataItem.department)) {
            teams.set(dataItem.department, [])
        }
        teams.get(dataItem.department)!.push(data)
        if (data.name === 'Chirag Bhalotia') {
            const member = teams.get(dataItem.department)![0]
            teams.get(dataItem.department)![0] = data
            teams.get(dataItem.department)![
                teams.get(dataItem.department)!.length - 1
            ] = member
        }
        if (data.name === 'Oaj Bidnurkar') {
            const member = teams.get(dataItem.department)![1]
            teams.get(dataItem.department)![1] = data
            teams.get(dataItem.department)![
                teams.get(dataItem.department)!.length - 1
            ] = member
        }
    })
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32'}>
            <TeamsList title="Leadership" team={leadership} />
            <Teams teams={teams} />
        </section>
    )
}

export default TeamPage
