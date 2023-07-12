// format date to simple format: Mon DD, HH:MM am/pm
function formatDate(dateString: string): string {
    const date = new Date(dateString);

    // Format the month
    const month = date.toLocaleString('default', { month: 'short' });

    // Format the day
    const day = date.getDate();

    // Format the hours
    let hours = date.getHours();
    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    // Format the minutes
    const minutes = date.getMinutes();

    // Construct the formatted date string
    const formattedDate = `${month} ${day}, ${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;

    return formattedDate;
}

// Exaample Usage
const inputDate = "Wed Jul 12 2023 13:50:02 GMT+0900 (Korean Standard Time)";
const formattedDate = formatDate(inputDate);
console.log(formattedDate); // Output: Jul 12, 1:50 pm

