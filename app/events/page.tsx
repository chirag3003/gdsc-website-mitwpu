import React from 'react'
import EventsList from '@/components/Events/EventsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { EventCardProps } from '@/components/Events/EventCard'

export const revalidate = 600

const EventsPage = async () => {
    const db = getFirestore(app)
    const eventsCollection = collection(db, 'events')
    const querySnapshot = await getDocs(eventsCollection)
    const dataArray: EventCardProps[] = []
    const dataPastArray: EventCardProps[] = []

    querySnapshot.forEach((doc) => {
        const dataItem = doc.data() as IEventDoc
        const data = {
            title: dataItem.title,
            description: dataItem.singleLineDescription,
            imageUrl: dataItem.bannerImageLinks[0],
            id: dataItem.id,
        }
        if (dataItem.type === 'Upcoming') {
            dataArray.push(data)
        }
        if (dataItem.type === 'Past') {
            dataPastArray.push(data)
        }
    })
    return (
        <section className={' p-8 lg:p-24 pt-32 lg:pt-32 '}>
            <EventsList title={'Upcoming Events'} events={dataArray} />
            <EventsList title={'Past Events'} events={dataPastArray} />
        </section>
    )
}

export default EventsPage
