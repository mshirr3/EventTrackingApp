import { rl } from './ReadLineHelper.js'

export class EventsViews {

    showStartMenu() {
        console.log(`
            ===== Main Menu =====
            1. Create a new event
            2. Delete an existing event
            3. Update an event
            4. List all events
            5. Exit application
            =====================
        `)
    }

    askDate() {
        return new Promise((resolve) => {
            rl.question('Enter the date (YYYY-MM-DD): ', (date) => {
                resolve(date);
            });
        });
    }

    askEvent() {
        return new Promise((resolve) => {
            rl.question('Enter the event description: ', (event) => {
                resolve(event)
            });
        });
    }

    showAllEvents(events) {
       for (const event of events) {
         console.log(`${event.eventText}, id: ${event.id}`)
       }
    }


}