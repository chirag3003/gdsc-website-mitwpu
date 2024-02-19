import React from 'react'
import EventsList from '@/components/Events/EventsList'

const EventsPage = () => {
    return (
        <section className={" p-8 lg:p-24 pt-32 lg:pt-32 "}>
            <EventsList title={'Upcoming Events'} />
            <EventsList title={'Past Events'} />
        </section>
    )
}

export default EventsPage