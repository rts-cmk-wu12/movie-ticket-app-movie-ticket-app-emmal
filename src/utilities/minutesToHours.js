export default function minutesToHours(minutes) {

    if (!isNaN(minutes)) {

        if (minutes === 0) {
            return ""
            // <>&#8208;</>
        }

        const hours = Math.floor(minutes / 60)
        const leftOverMinutes = minutes % 60

        if (hours === 0) {
            return `${leftOverMinutes}m`
        }
        
        return `${hours}h ${leftOverMinutes}m`
    }
}
