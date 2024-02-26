'use client'

import React, { useState } from 'react'
import { TeamCardProps } from './TeamCard'
import TeamsList from './TeamsList'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface TeamsProps {
    teams: Map<string, TeamCardProps[]>
}

function Teams({ teams }: TeamsProps) {
    const teamNames = Array.from(teams.keys())
    const [selectedTeam, setSelectedTeam] = useState(teamNames[0])
    return (
        <div>
            <div className="flex mx-auto w-min mb-20 max-w-full px-8 gap-6 items-center overflow-x-auto">
                {teamNames.map((team, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => setSelectedTeam(team)}
                            variant={'ghost'}
                            className={cn(
                                'text-lg rounded-none hover:bg-transparent',
                                {
                                    'border-b': team === selectedTeam,
                                }
                            )}
                        >
                            {team}
                        </Button>
                    )
                })}
            </div>
            <TeamsList title={selectedTeam} team={teams.get(selectedTeam)!} />
        </div>
    )
}

export default Teams
