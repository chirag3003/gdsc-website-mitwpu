import React from 'react'
import TeamCard, { TeamCardProps } from '@/components/Teams/TeamCard'

interface TeamsListProps {
    title: string
    team: TeamCardProps[]
}

const TeamsList = ({ title, team }: TeamsListProps) => {
    return (
        <div className={'mb-20'}>
            <h2 className={'text-3xl lg:text-4xl mb-10'}>{title}</h2>
            <div className="events-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {team.map((team, index) => {
                    return (
                        <TeamCard key={index} {...team} />
                    )
                })}
            </div>
        </div>
    )
}

export default TeamsList