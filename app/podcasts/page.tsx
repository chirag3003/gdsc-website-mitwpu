import React from 'react'
import PodcastsList from '@/components/Podcasts/PodcastsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'

export const revalidate = 600

const PodcastsPage = async () => {
    const db = getFirestore(app)
    const podcastCollection = collection(db, 'podcasts')
    const querySnapshot = await getDocs(podcastCollection)
    const podcasts: IPodcastDoc[] = []
    querySnapshot.forEach((doc) => {
        const data = doc.data() as IPodcastDoc
        podcasts.push(data)
    })
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32'}>
            <PodcastsList title={'All Podcasts'} podcasts={podcasts} />
        </section>
    )
}

export default PodcastsPage
