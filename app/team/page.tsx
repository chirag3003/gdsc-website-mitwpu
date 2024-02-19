import React from 'react'
import TeamsList from '@/components/Teams/TeamsList'

const TeamPage = () => {
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32'}>
            <TeamsList title={'Tech Team'} />
        </section>
    )
}

export default TeamPage