import React from 'react'
import EventsList from '@/components/Events/EventsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import { EventCardProps } from '@/components/Events/EventCard'
import moment from 'moment'

export const revalidate = 600

const EventsPage = async () => {
  const db = getFirestore(app)
  const eventsCollection = collection(db, 'events')
  const querySnapshot = await getDocs(eventsCollection)
  const dataArray: EventCardProps[] = []
  const dataPastArray: EventCardProps[] = []

  querySnapshot.forEach((doc) => {
    const dataItem = doc.data() as IEventDoc
    const data: EventCardProps = {
      title: dataItem.title,
      description: dataItem.singleLineDescription,
      imageUrl: dataItem.bannerImageLinks[0],
      id: dataItem.id,
      date: dataItem.agenda[0]?.date ? moment(dataItem.agenda[0].date, "DD/MM/YYY").valueOf() : null
    }
    if (dataItem.type === 'Upcoming') {
      dataArray.push(data)
    }
    if (dataItem.type === 'Past') {
      dataPastArray.push(data)
    }
  })

  dataArray.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date - b.date
  })

  dataPastArray.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date - b.date
  })

  return (
    <section className={' p-8 lg:p-24 pt-32 lg:pt-32 '}>
      <EventsList
        title={'Upcoming Events'}
        events={dataArray.reverse()}
      />
      <EventsList
        title={'Past Events'}
        events={dataPastArray.reverse()}
      />
    </section>
  )
}

export default EventsPage
