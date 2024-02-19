import React from 'react'
import PodcastsList from '@/components/Podcasts/PodcastsList'

const PodcastsPage = () => {
    return (
        <section className={" p-8 lg:p-24 pt-32 lg:pt-32"}>
            <PodcastsList title={'All Podcasts'} />
        </section>
    )
}

export default PodcastsPage