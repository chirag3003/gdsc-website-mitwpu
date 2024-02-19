import React from 'react'
import EventsList from '@/components/Events/EventsList'

const EventsPage = () => {
    return (
        <>
            <EventsList title={'Upcoming Events'} />
            <EventsList title={'Past Events'} />
        </>
    )
}

export default EventsPage