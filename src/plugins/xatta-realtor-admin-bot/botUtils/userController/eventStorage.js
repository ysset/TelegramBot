const storage = {
    events: new Map(),
    createEvent: ({ telegramID, event }) => storage.events.set(telegramID, event),
    callEvent: (telegramID) => storage.events.get(telegramID.toString()),
    isEvent: (telegramID) => storage.events.has(telegramID.toString()),
    clearEvents: (telegramID) => storage.events.delete(telegramID.toString()),
};
module.exports = storage;
