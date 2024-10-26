export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string provided");
    }

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate.replace(',', ' •');
}

// Example usage
const formattedDate = formatDate('2024-10-30');
console.log(formattedDate);
