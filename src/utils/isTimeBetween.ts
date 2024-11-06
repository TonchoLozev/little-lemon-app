const isTimeBetween =
    (startTime: string, endTime: string) =>
    (time?: string): boolean => {
        if (!time) return true;
        // Helper function to convert "HH:MM" string to Date object with hours and minutes set
        const parseTime = (timeStr: string): Date => {
            const [hour, minute] = timeStr.split(':').map(Number);
            const date = new Date();
            date.setHours(hour, minute, 0, 0);
            return date;
        };

        // Convert the time strings to Date objects
        const timeDate = parseTime(time);
        const startDate = parseTime(startTime);
        const endDate = parseTime(endTime);

        // Check if the time is within the range
        return timeDate >= startDate && timeDate <= endDate;
    };

export default isTimeBetween;
