// store.js - Event store management

let events = {}; // Initialize an empty events object

export const addEvent = (newEvent) => {
    const eventId = Object.keys(events).length; // Get the current number of events as the ID
    events = { ...events, [eventId]: newEvent }; // Add the new event with the incremented ID
};

export const getAllEvents = () => {
    return events;
};
